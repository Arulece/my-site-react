import { render, screen, fireEvent, waitFor } from '@testing-library/react';
import Banner from './Banner';

describe('Banner Component', () => {
  const mockImages = [
    { id: 1, src: '/image-1.jpg', alt: 'Image 1' },
    { id: 2, src: '/image-2.jpg', alt: 'Image 2' },
    { id: 3, src: '/image-3.jpg', alt: 'Image 3' },
  ];

  it('renders banner with images', () => {
    render(<Banner images={mockImages} autoplay={false} />);
    const bannerElement = screen.getByRole('button', { name: /previous slide/i });
    expect(bannerElement).toBeInTheDocument();
  });

  it('renders navigation dots for each image', () => {
    render(<Banner images={mockImages} autoplay={false} />);
    const dots = screen.getAllByRole('button', { name: /go to slide/i });
    expect(dots).toHaveLength(mockImages.length);
  });

  it('renders prev and next buttons', () => {
    render(<Banner images={mockImages} autoplay={false} />);
    const prevButton = screen.getByRole('button', { name: /previous slide/i });
    const nextButton = screen.getByRole('button', { name: /next slide/i });
    expect(prevButton).toBeInTheDocument();
    expect(nextButton).toBeInTheDocument();
  });

  it('changes slide on next button click', () => {
    render(<Banner images={mockImages} autoplay={false} />);
    const nextButton = screen.getByRole('button', { name: /next slide/i });
    const dots = screen.getAllByRole('button', { name: /go to slide/i });

    fireEvent.click(nextButton);
    expect(dots[1]).toHaveClass('banner__dot--active');
  });

  it('changes slide on previous button click', () => {
    render(<Banner images={mockImages} autoplay={false} />);
    const nextButton = screen.getByRole('button', { name: /next slide/i });
    const prevButton = screen.getByRole('button', { name: /previous slide/i });
    const dots = screen.getAllByRole('button', { name: /go to slide/i });

    fireEvent.click(nextButton);
    fireEvent.click(prevButton);
    expect(dots[0]).toHaveClass('banner__dot--active');
  });

  it('changes slide on dot click', () => {
    render(<Banner images={mockImages} autoplay={false} />);
    const dots = screen.getAllByRole('button', { name: /go to slide/i });

    fireEvent.click(dots[2]);
    expect(dots[2]).toHaveClass('banner__dot--active');
  });

  it('loops to first slide when clicking next on last slide', () => {
    render(<Banner images={mockImages} autoplay={false} />);
    const nextButton = screen.getByRole('button', { name: /next slide/i });
    const dots = screen.getAllByRole('button', { name: /go to slide/i });

    fireEvent.click(dots[2]);
    fireEvent.click(nextButton);
    expect(dots[0]).toHaveClass('banner__dot--active');
  });

  it('loops to last slide when clicking prev on first slide', () => {
    render(<Banner images={mockImages} autoplay={false} />);
    const prevButton = screen.getByRole('button', { name: /previous slide/i });
    const dots = screen.getAllByRole('button', { name: /go to slide/i });

    fireEvent.click(prevButton);
    expect(dots[2]).toHaveClass('banner__dot--active');
  });

  it('auto-advances slides when autoplay is enabled', async () => {
    render(<Banner images={mockImages} autoplay interval={100} />);
    const dots = screen.getAllByRole('button', { name: /go to slide/i });

    await waitFor(
      () => {
        expect(dots[1]).toHaveClass('banner__dot--active');
      },
      { timeout: 300 }
    );
  });

  it('displays empty state when no images provided', () => {
    render(<Banner images={[]} autoplay={false} />);
    expect(screen.getByText('No images available')).toBeInTheDocument();
  });

  it('renders alt text for images', () => {
    render(<Banner images={mockImages} autoplay={false} />);
    const altTexts = screen.getAllByText(/image \d/i);
    expect(altTexts.length).toBeGreaterThan(0);
  });

  it('has correct default props', () => {
    const { rerender } = render(<Banner images={mockImages} />);
    const nextButton = screen.getByRole('button', { name: /next slide/i });
    expect(nextButton).toBeInTheDocument();

    rerender(<Banner images={mockImages} autoplay={false} interval={1000} />);
    expect(screen.getByRole('button', { name: /next slide/i })).toBeInTheDocument();
  });
});
