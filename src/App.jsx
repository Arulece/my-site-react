import { Routes, Route } from 'react-router-dom';
import Header from './components/Header/Header';
import HomePage from './pages/HomePage/HomePage';
import ContactPage from './pages/ContactPage/ContactPage';
import GalleryPage from './pages/GalleryPage/GalleryPage';

const PlaceholderPage = ({ title }) => (
  <section className="app__section app__section--hero">
    <h1 className="app__title">{title}</h1>
    <p className="app__subtitle">
      This is a placeholder page. You can replace this content with your own implementation.
    </p>
  </section>
);

const App = () => (
  <div className="app">
    <Header />
    <main className="app__main">
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/about" element={<PlaceholderPage title="About" />} />
        <Route path="/services" element={<PlaceholderPage title="Services" />} />
        <Route path="/gallery" element={<GalleryPage />} />
        <Route path="/blog" element={<PlaceholderPage title="Blog" />} />
        <Route
          path="/contact"
          element={
            <section className="app__section">
              <ContactPage />
            </section>
          }
        />
      </Routes>
    </main>
  </div>
);

export default App;
