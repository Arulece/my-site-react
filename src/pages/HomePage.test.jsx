import { render, screen } from '@testing-library/react';
import HomePage from './HomePage';

// Mock the Banner component
jest.mock('../components/Banner/Banner', () => {
  return function MockBanner() {
    return <div data-testid="banner-mock">Mock Banner Component</div>;
  };
});

describe('HomePage Component', () => {
  it('renders the home page', () => {
    render(<HomePage />);
    const homePageElement = screen.getByRole('heading', { name: /welcome to our site/i });
    expect(homePageElement).toBeInTheDocument();
  });

  it('renders the Banner component', () => {
    render(<HomePage />);
    const bannerMock = screen.getByTestId('banner-mock');
    expect(bannerMock).toBeInTheDocument();
  });

  it('renders page title', () => {
    render(<HomePage />);
    const title = screen.getByRole('heading', { name: /welcome to our site/i });
    expect(title).toBeInTheDocument();
  });

  it('renders subtitle', () => {
    render(<HomePage />);
    const subtitle = screen.getByText(
      /explore our amazing content and discover what we have to offer/i
    );
    expect(subtitle).toBeInTheDocument();
  });

  it('renders three feature sections', () => {
    render(<HomePage />);
    const features = screen.getAllByRole('heading', { level: 2 });
    expect(features).toHaveLength(3);
  });

  it('renders feature titles', () => {
    render(<HomePage />);
    expect(screen.getByRole('heading', { name: /feature one/i })).toBeInTheDocument();
    expect(screen.getByRole('heading', { name: /feature two/i })).toBeInTheDocument();
    expect(screen.getByRole('heading', { name: /feature three/i })).toBeInTheDocument();
  });

  it('renders feature descriptions', () => {
    render(<HomePage />);
    expect(
      screen.getByText(/experience quality and excellence with our first feature set/i)
    ).toBeInTheDocument();
    expect(
      screen.getByText(/discover innovation and modern solutions tailored for you/i)
    ).toBeInTheDocument();
    expect(
      screen.getByText(/join thousands of satisfied users enjoying our services/i)
    ).toBeInTheDocument();
  });
});
