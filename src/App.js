import { Component } from 'react';
import './App.css';
import { getFetch } from './services/API';
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
  };

  componentDidUpdate(prevProps, prevState) {
    const { searchValue } = this.state;
    if (searchValue !== prevState.searchValue) {
      this.setState({
        page: 1,
        images: [],
      });
      getFetch(searchValue).then(images => {
        if (images.length === 0) {
          alert(`Sorry, no images were found`);
        } else {
          this.setState(prevState => {
            return {
              images: [...prevState.images, ...images],
              page: prevState.page + 1,
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
          images: [...prevState.images, ...images],
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
    const { images, showModal, largeImageURL } = this.state;
    return (
      <Container>
        <SearchBar onSubmit={this.getSearchValue} />
        <ImageGallery images={images} onModalOpen={this.onOpenModal} />
        {images.length > 0 ? (
          <Button
            content="Load more"
            isIcon
            iconId="load"
            fill="white"
            styledType="blue"
            onClick={this.handleLoad}
          />
        ) : null}
        {showModal && <Modal onClose={this.toggleModal} largeImgUrl={largeImageURL} />}
      </Container>
    );
  }
}

export default App;
