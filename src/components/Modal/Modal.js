import { useEffect } from 'react';
import { createPortal } from 'react-dom';
import PropTypes from 'prop-types';

const modalRoot = document.querySelector('#modal-root');

export default function Modal({ onClose, largeImgUrl }) {
  useEffect(() => {
    window.addEventListener('keydown', handlKeyDown);
    return () => {
      window.removeEventListener('keydown', handlKeyDown);
    };
  });

  const handlKeyDown = evt => {
    if (evt.code === 'Escape') {
      onClose();
    }
  };

  const handlOverlayClick = evt => {
    if (evt.currentTarget === evt.target) {
      onClose();
    }
  };

  return createPortal(
    <div className="Overlay" onClick={handlOverlayClick}>
      <div className="Modal">
        <img src={largeImgUrl} alt="" />
      </div>
    </div>,
    modalRoot,
  );
}

Modal.propTypes = {
  onClose: PropTypes.func,
  largeImgUrl: PropTypes.string.isRequired,
};
