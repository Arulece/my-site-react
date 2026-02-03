import Banner from '../components/Banner/Banner';
import './HomePage.scss';

const HomePage = () => {
  const bannerImages = [
    {
      id: 1,
      src: '/assets/slide-1.svg',
      alt: 'Welcome to our site',
    },
    {
      id: 2,
      src: '/assets/slide-2.svg',
      alt: 'Discover our services',
    },
    {
      id: 3,
      src: '/assets/slide-3.svg',
      alt: 'Join our community',
    },
  ];

  return (
    <div className="home-page">
      <section className="home-page__banner-section">
        <Banner images={bannerImages} autoplay interval={5000} />
      </section>

      <section className="home-page__content">
        <div className="home-page__container">
          <h1 className="home-page__title">Welcome to Our Site</h1>
          <p className="home-page__subtitle">
            Explore our amazing content and discover what we have to offer. Edited
          </p>

          <div className="home-page__features">
            <article className="home-page__feature">
              <h2 className="home-page__feature-title">Feature One</h2>
              <p className="home-page__feature-text">
                Experience quality and excellence with our first feature set.
              </p>
            </article>

            <article className="home-page__feature">
              <h2 className="home-page__feature-title">Feature Two</h2>
              <p className="home-page__feature-text">
                Discover innovation and modern solutions tailored for you.
              </p>
            </article>

            <article className="home-page__feature">
              <h2 className="home-page__feature-title">Feature Three</h2>
              <p className="home-page__feature-text">
                Join thousands of satisfied users enjoying our services.
              </p>
            </article>
          </div>
        </div>
      </section>
    </div>
  );
};

export default HomePage;
