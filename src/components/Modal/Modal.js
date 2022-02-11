import { Component } from 'react';
import { createPortal } from 'react-dom';

const modalRoot = document.querySelector('#modal-root');

class Modal extends Component {
  componentDidMount() {
    window.addEventListener('keydown', this.handlKeyDown);
  }

  componentWillUnmount() {
    window.removeEventListener('keydown', this.handlKeyDown);
  }

  handlKeyDown = evt => {
    if (evt.code === 'Escape') {
      this.props.onClose();
    }
  };

  handlOverlayClick = evt => {
    if (evt.currentTarget === evt.target) {
      this.props.onClose();
    }
  };

  render() {
    return createPortal(
      <div className="Overlay" onClick={this.handlOverlayClick}>
        <div className="Modal">
          <img src={this.props.largeImgUrl} alt="" />
        </div>
      </div>,
      modalRoot,
    );
  }
}

export default Modal;
