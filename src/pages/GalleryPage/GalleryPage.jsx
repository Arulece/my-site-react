import { useState, useEffect } from 'react';
import Banner from '../../components/Banner/Banner';
import Card from '../../components/Card/Card';
import Modal from '../../components/Modal/Modal';
import './GalleryPage.scss';

const GalleryPage = () => {
  const [galleryImages, setGalleryImages] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  const [selectedImage, setSelectedImage] = useState(null);
  const [isModalOpen, setIsModalOpen] = useState(false);

  const bannerImages = [
    {
      id: 1,
      src: '/assets/gallery/family.png',
      alt: 'Gallery Banner',
    },
    {
      id: 2,
      src: '/assets/gallery/family_1.png',
      alt: 'Gallery Banner 2',
    },
  ];

  useEffect(() => {
    const loadGalleryImages = async () => {
      try {
        setLoading(true);
        setError(null);

        // List of sample gallery images - add more as needed
        const sampleImages = [
          '/assets/gallery/family.png',
          '/assets/gallery/family_1.png',
          '/assets/gallery/family_2.png',
          '/assets/gallery/gallery-4.svg',
          '/assets/gallery/gallery-5.svg',
          '/assets/gallery/gallery-6.svg',
        ];

        // Fetch each image to verify it exists
        const validImages = [];
        for (let i = 0; i < sampleImages.length; i += 1) {
          try {
            const response = await fetch(sampleImages[i], { method: 'HEAD' });
            if (response.ok) {
              validImages.push({
                id: i,
                src: sampleImages[i],
                alt: `Gallery Image ${i + 1}`,
              });
            }
          } catch {
            // Image not found, skip it
          }
        }

        if (validImages.length === 0) {
          setError('No images found in gallery. Please add images to public/assets/gallery/');
        } else {
          setGalleryImages(validImages);
        }
      } catch {
        setError('Error loading gallery images. Please check the gallery folder.');
      } finally {
        setLoading(false);
      }
    };

    loadGalleryImages();
  }, []);

  const handleCardClick = (image) => {
    setSelectedImage(image);
    setIsModalOpen(true);
  };

  const handleModalClose = () => {
    setIsModalOpen(false);
    setSelectedImage(null);
  };

  return (
    <div className="gallery-page">
      <section className="gallery-page__banner-section">
        <Banner images={bannerImages} autoplay={false} />
      </section>

      <section className="gallery-page__hero">
        <div className="gallery-page__hero-content">
          <h1 className="gallery-page__title">Gallery</h1>
          <p className="gallery-page__subtitle">
            Explore our collection of images. Click on any image to view it in full screen.
          </p>
        </div>
      </section>

      <section className="gallery-page__content">
        {loading && (
          <div className="gallery-page__loading">
            <p>Loading gallery...</p>
          </div>
        )}

        {error && !loading && (
          <div className="gallery-page__empty-state">
            <p className="gallery-page__empty-state-icon">📁</p>
            <p className="gallery-page__empty-state-message">{error}</p>
          </div>
        )}

        {!loading && !error && galleryImages.length > 0 && (
          <div className="gallery-page__grid">
            {galleryImages.map((image) => (
              <Card key={image.id} image={image} onClick={() => handleCardClick(image)} />
            ))}
          </div>
        )}
      </section>

      <Modal isOpen={isModalOpen} onClose={handleModalClose} ariaLabel="Image modal">
        {selectedImage && (
          <div className="gallery-page__modal-image">
            <img src={selectedImage.src} alt={selectedImage.alt} />
          </div>
        )}
      </Modal>
    </div>
  );
};

export default GalleryPage;
