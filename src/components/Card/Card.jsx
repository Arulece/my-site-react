import PropTypes from 'prop-types';
import './Card.scss';

const Card = ({ image, onClick, ariaLabel }) => {
  const handleKeyDown = (event) => {
    if (event.key === 'Enter' || event.key === ' ') {
      event.preventDefault();
      onClick();
    }
  };

  return (
    <div
      className="card"
      onClick={onClick}
      onKeyDown={handleKeyDown}
      role="button"
      tabIndex={0}
      aria-label={ariaLabel || `View ${image.alt}`}
    >
      <div className="card__image-wrapper">
        <img src={image.src} alt={image.alt} className="card__image" />
        <div className="card__overlay" aria-hidden="true">
          <span className="card__icon">🔍</span>
        </div>
      </div>
      <div className="card__content">
        <h3 className="card__title">{image.alt}</h3>
      </div>
    </div>
  );
};

Card.propTypes = {
  image: PropTypes.shape({
    src: PropTypes.string.isRequired,
    alt: PropTypes.string.isRequired,
    id: PropTypes.oneOfType([PropTypes.string, PropTypes.number]),
  }).isRequired,
  onClick: PropTypes.func.isRequired,
  ariaLabel: PropTypes.string,
};

Card.defaultProps = {
  ariaLabel: undefined,
};

export default Card;
