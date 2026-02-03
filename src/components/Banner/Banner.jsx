import { useState, useEffect } from 'react';
import PropTypes from 'prop-types';
import './Banner.scss';

const Banner = ({ images, autoplay, interval }) => {
  const [currentSlide, setCurrentSlide] = useState(0);

  useEffect(() => {
    if (!autoplay || images.length === 0) {
      return undefined;
    }

    const timer = setInterval(() => {
      setCurrentSlide((prev) => (prev + 1) % images.length);
    }, interval);

    return () => clearInterval(timer);
  }, [autoplay, images.length, interval]);

  const goToSlide = (index) => {
    setCurrentSlide(index);
  };

  const goToPrevious = () => {
    setCurrentSlide((prev) => (prev - 1 + images.length) % images.length);
  };

  const goToNext = () => {
    setCurrentSlide((prev) => (prev + 1) % images.length);
  };

  if (images.length === 0) {
    return <div className="banner banner--empty">No images available</div>;
  }

  return (
    <div className="banner">
      <div className="banner__container">
        <div className="banner__slides">
          {images.map((image, index) => (
            <div
              key={image.id || index}
              className={`banner__slide ${index === currentSlide ? 'banner__slide--active' : ''}`}
              style={{
                backgroundImage: `url(${image.src})`,
              }}
            >
              {image.alt && <div className="banner__alt-text">{image.alt}</div>}
            </div>
          ))}
        </div>

        <button
          className="banner__button banner__button--prev"
          onClick={goToPrevious}
          aria-label="Previous slide"
          type="button"
        >
          ❮
        </button>

        <button
          className="banner__button banner__button--next"
          onClick={goToNext}
          aria-label="Next slide"
          type="button"
        >
          ❯
        </button>

        <div className="banner__dots">
          {images.map((image, index) => (
            <button
              key={image.id || index}
              className={`banner__dot ${index === currentSlide ? 'banner__dot--active' : ''}`}
              onClick={() => goToSlide(index)}
              aria-label={`Go to slide ${index + 1}`}
              type="button"
            >
              <span className="sr-only">Slide {index + 1}</span>
            </button>
          ))}
        </div>
      </div>
    </div>
  );
};

Banner.propTypes = {
  images: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.oneOfType([PropTypes.string, PropTypes.number]),
      src: PropTypes.string.isRequired,
      alt: PropTypes.string,
    })
  ).isRequired,
  autoplay: PropTypes.bool,
  interval: PropTypes.number,
};

Banner.defaultProps = {
  autoplay: true,
  interval: 5000,
};

export default Banner;
