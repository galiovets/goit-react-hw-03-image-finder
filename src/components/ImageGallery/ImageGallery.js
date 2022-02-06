import PropTypes from 'prop-types';
import ImageGalleryItem from '../ImageGalleryItem';

function ImageGallery({ images, onModalOpen }) {
  return (
    <ul className="ImageGallery">
      {images.map(({ id, tags, webformatURL, largeImageURL }) => {
        return (
          <ImageGalleryItem
            key={id}
            tags={tags}
            webformatURL={webformatURL}
            largeImageURL={largeImageURL}
            onModalOpen={onModalOpen}
          />
        );
      })}
    </ul>
  );
}

ImageGallery.propTypes = {
  images: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.number.isRequired,
    }),
  ),
};

export default ImageGallery;
