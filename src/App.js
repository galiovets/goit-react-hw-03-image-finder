import { Component } from 'react';
import toast, { Toaster } from 'react-hot-toast';
import './App.css';
import { getFetch } from './services/API';
import Loader from './components/Loader';
import Container from './components/Container';
import SearchBar from './components/Searchbar';
import ImageGallery from './components/ImageGallery';
import Button from './components/Button';
import Modal from './components/Modal';

class App extends Component {
  state = {
    searchValue: '',
    page: 1,
    images: [],
    showModal: false,
    largeImageURL: '',
    loading: false,
    availableImages: 0,
  };

  componentDidUpdate(prevProps, prevState) {
    const { searchValue } = this.state;
    if (searchValue !== prevState.searchValue) {
      this.setState({
        page: 1,
        images: [],
        loading: true,
        availableImages: 0,
      });
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
          return this.setState({ loading: false });
        } else {
          this.setState(prevState => {
            return {
              images: [...prevState.images, ...images.hits],
              page: prevState.page + 1,
              loading: false,
              availableImages: images.totalHits,
            };
          });
        }
      });
    }
  }
  getSearchValue = searchValue => {
    this.setState({ searchValue: searchValue.toLowerCase() });
  };

  handleLoad = () => {
    const { page, searchValue } = this.state;
    getFetch(searchValue, page).then(images => {
      this.setState(prevState => {
        return {
          images: [...prevState.images, ...images.hits],
          page: prevState.page + 1,
        };
      });
    });

    this.handleScroll();
  };

  handleScroll = () => {
    setTimeout(() => {
      window.scrollTo({
        top: document.documentElement.scrollHeight,
        behavior: 'smooth',
      });
    }, 500);
  };

  toggleModal = () => {
    this.setState(({ showModal }) => ({
      showModal: !showModal,
    }));
  };

  onOpenModal = event => {
    this.setState({ largeImageURL: event.target.dataset.source });
    this.toggleModal();
  };

  render() {
    const { loading, images, showModal, largeImageURL, availableImages } = this.state;
    return (
      <Container>
        <Toaster position="bottom-center" />
        <SearchBar onSubmit={this.getSearchValue} />
        {loading && <Loader />}
        <ImageGallery images={images} onModalOpen={this.onOpenModal} />
        {availableImages > images.length && (
          <Button
            content="Load more"
            isIcon
            iconId="load"
            fill="white"
            styledType="blue"
            onClick={this.handleLoad}
          />
        )}
        {showModal && <Modal onClose={this.toggleModal} largeImgUrl={largeImageURL} />}
      </Container>
    );
  }
}

export default App;
