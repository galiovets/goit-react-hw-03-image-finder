import PropTypes from 'prop-types';

function ImageGalleryItem({ webformatURL, tags, largeImageURL, onModalOpen }) {
  return (
    <li className="ImageGalleryItem">
      <img
        src={webformatURL}
        alt={tags}
        data-source={largeImageURL}
        className="ImageGalleryItem-image"
        onClick={onModalOpen}
      />
    </li>
  );
}

ImageGalleryItem.propTypes = {
  webformatURL: PropTypes.string.isRequired,
  tags: PropTypes.string,
  largeImageURL: PropTypes.string,
  onOpenModal: PropTypes.func,
};

export default ImageGalleryItem;
