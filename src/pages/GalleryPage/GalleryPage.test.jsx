import { render, screen, waitFor } from '@testing-library/react';
import GalleryPage from './GalleryPage';

// Mock fetch for testing
// eslint-disable-next-line no-undef
global.fetch = jest.fn();

// Mock the Banner component
jest.mock('../../components/Banner/Banner', () => {
  return function MockBanner() {
    return <div data-testid="banner">Banner</div>;
  };
});

// Mock the Card component
jest.mock('../../components/Card/Card', () => {
  return function MockCard({ image, onClick }) {
    return (
      <div data-testid={`card-${image.id}`} onClick={onClick}>
        {image.alt}
      </div>
    );
  };
});

// Mock the Modal component
jest.mock('../../components/Modal/Modal', () => {
  return function MockModal({ isOpen, onClose, children }) {
    if (!isOpen) return null;
    return (
      <div data-testid="modal">
        <button onClick={onClose}>Close</button>
        {children}
      </div>
    );
  };
});

describe('GalleryPage Component', () => {
  beforeEach(() => {
    jest.clearAllMocks();
    // eslint-disable-next-line no-undef
    global.fetch.mockReset();
  });

  it('renders gallery page with banner', async () => {
    // eslint-disable-next-line no-undef
    global.fetch.mockResolvedValueOnce({ ok: false });

    render(<GalleryPage />);

    await waitFor(() => {
      expect(screen.getByTestId('banner')).toBeInTheDocument();
    });
  });

  it('renders gallery title and subtitle', async () => {
    // eslint-disable-next-line no-undef
    global.fetch.mockResolvedValueOnce({ ok: false });

    render(<GalleryPage />);

    await waitFor(() => {
      expect(screen.getByText('Gallery')).toBeInTheDocument();
      expect(screen.getByText(/Explore our collection of images/)).toBeInTheDocument();
    });
  });

  it('shows loading state initially', () => {
    // eslint-disable-next-line no-undef
    global.fetch.mockImplementationOnce(
      () =>
        new Promise(() => {
          // Never resolves
        })
    );

    render(<GalleryPage />);

    expect(screen.getByText('Loading gallery...')).toBeInTheDocument();
  });

  it('shows empty state when no images are found', async () => {
    // eslint-disable-next-line no-undef
    global.fetch.mockResolvedValueOnce({ ok: false });

    render(<GalleryPage />);

    await waitFor(() => {
      expect(screen.getByText(/No images found in gallery/)).toBeInTheDocument();
    });
  });

  it('renders gallery grid when images are loaded', async () => {
    // Mock successful fetch for 6 images
    // eslint-disable-next-line no-undef
    global.fetch
      .mockResolvedValueOnce({ ok: true })
      .mockResolvedValueOnce({ ok: true })
      .mockResolvedValueOnce({ ok: true })
      .mockResolvedValueOnce({ ok: true })
      .mockResolvedValueOnce({ ok: true })
      .mockResolvedValueOnce({ ok: true });

    render(<GalleryPage />);

    await waitFor(() => {
      expect(screen.getByTestId('card-0')).toBeInTheDocument();
    });
  });
});
