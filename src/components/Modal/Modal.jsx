import { useEffect } from 'react';
import PropTypes from 'prop-types';
import './Modal.scss';

const Modal = ({ isOpen, onClose, children, ariaLabel, ariaDescribedBy }) => {
  useEffect(() => {
    if (!isOpen) {
      return undefined;
    }

    const handleEscapeKey = (event) => {
      if (event.key === 'Escape') {
        onClose();
      }
    };

    // Prevent body scroll when modal is open
    document.body.style.overflow = 'hidden';
    document.addEventListener('keydown', handleEscapeKey);

    return () => {
      document.body.style.overflow = 'unset';
      document.removeEventListener('keydown', handleEscapeKey);
    };
  }, [isOpen, onClose]);

  if (!isOpen) {
    return null;
  }

  const handleOverlayClick = (event) => {
    if (event.target === event.currentTarget) {
      onClose();
    }
  };

  return (
    <div
      className="modal modal--active"
      role="dialog"
      aria-modal="true"
      aria-label={ariaLabel}
      aria-describedby={ariaDescribedBy}
    >
      <div className="modal__overlay" onClick={handleOverlayClick} aria-hidden="true" />

      <div className="modal__content">
        <button type="button" className="modal__close" onClick={onClose} aria-label="Close modal">
          <span aria-hidden="true">&times;</span>
        </button>

        <div className="modal__body">{children}</div>
      </div>
    </div>
  );
};

Modal.propTypes = {
  isOpen: PropTypes.bool.isRequired,
  onClose: PropTypes.func.isRequired,
  children: PropTypes.node.isRequired,
  ariaLabel: PropTypes.string,
  ariaDescribedBy: PropTypes.string,
};

Modal.defaultProps = {
  ariaLabel: 'Modal dialog',
  ariaDescribedBy: undefined,
};

export default Modal;
