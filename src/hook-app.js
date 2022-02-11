import { useState, useEffect } from 'react';
import toast, { Toaster } from 'react-hot-toast';
import './App.css';
import { getFetch } from './services/API';
import Loader from './components/Loader';
import Container from './components/Container';
import SearchBar from './components/Searchbar';
import ImageGallery from './components/ImageGallery';
import Button from './components/Button';
import Modal from './components/Modal';

export default function App() {
  const [searchValue, setSearchValue] = useState('');
  const [page, setPage] = useState(1);
  const [images, setImages] = useState([]);
  const [showModal, setShowModal] = useState(false);
  const [largeImageURL, setLargeImageURL] = useState('');
  const [loading, setLoading] = useState(false);
  const [availableImages, setAvailableImages] = useState(0);

  useEffect(() => {
    if (searchValue === '') {
      return;
    }
    setPage(1);
    setImages([]);
    setLoading(true);
    setAvailableImages(0);
  }, [searchValue]);

  getFetch(searchValue, 1).then(images => {
    if (images.hits.length === 0) {
      toast.error('Sorry, nothing was found', {
        duration: 3000,
        style: {
          borderRadius: '10px',
          background: 'white',
          color: 'black',
          padding: '10px',
          textAlign: 'center',
        },
      });
      return setLoading(false);
    } else {
      setImages(prevState => [images.hits]);
      setPage(prevState => prevState + 1);
      setLoading(false);
      setAvailableImages(images.totalHits);
    }
  });

  const getSearchValue = searchValue => {
    setSearchValue(searchValue.toLowerCase());
  };

  const handleLoad = () => {
    getFetch(searchValue, page).then(images => {
      setImages(prevState => [...prevState, ...images.hits]);
      setPage(prevState => prevState + 1);
    });

    handleScroll();
  };

  const handleScroll = () => {
    setTimeout(() => {
      window.scrollTo({
        top: document.documentElement.scrollHeight,
        behavior: 'smooth',
      });
    }, 500);
  };

  const toggleModal = () => {
    setShowModal(prevState => !prevState);
  };

  const onOpenModal = evt => {
    setLargeImageURL(evt.target.dataset.source);
    toggleModal();
  };

  return (
    <Container>
      <Toaster position="bottom-center" />
      <SearchBar onSubmit={getSearchValue} />
      {loading && <Loader />}
      <ImageGallery images={images} onModalOpen={onOpenModal} />
      {availableImages > images.length && (
        <Button
          content="Load more"
          isIcon
          iconId="load"
          fill="white"
          styledType="blue"
          onClick={handleLoad}
        />
      )}
      {showModal && <Modal onClose={toggleModal} largeImgUrl={largeImageURL} />}
    </Container>
  );
}
