import { render, screen, fireEvent } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import Card from './Card';

describe('Card Component', () => {
  const mockImage = {
    id: 1,
    src: '/image.jpg',
    alt: 'Test Image',
  };
  const mockOnClick = jest.fn();

  beforeEach(() => {
    mockOnClick.mockClear();
  });

  it('renders card with image', () => {
    render(<Card image={mockImage} onClick={mockOnClick} />);
    const img = screen.getByAltText('Test Image');
    expect(img).toBeInTheDocument();
    expect(img).toHaveAttribute('src', '/image.jpg');
  });

  it('renders card title', () => {
    render(<Card image={mockImage} onClick={mockOnClick} />);
    expect(screen.getByText('Test Image')).toBeInTheDocument();
  });

  it('calls onClick when card is clicked', async () => {
    const user = userEvent.setup();
    render(<Card image={mockImage} onClick={mockOnClick} />);
    const card = screen.getByRole('button');
    await user.click(card);
    expect(mockOnClick).toHaveBeenCalled();
  });

  it('calls onClick when Enter key is pressed', () => {
    render(<Card image={mockImage} onClick={mockOnClick} />);
    const card = screen.getByRole('button');
    fireEvent.keyDown(card, { key: 'Enter', code: 'Enter' });
    expect(mockOnClick).toHaveBeenCalled();
  });

  it('calls onClick when Space key is pressed', () => {
    render(<Card image={mockImage} onClick={mockOnClick} />);
    const card = screen.getByRole('button');
    fireEvent.keyDown(card, { key: ' ', code: 'Space' });
    expect(mockOnClick).toHaveBeenCalled();
  });

  it('has proper accessibility attributes', () => {
    render(<Card image={mockImage} onClick={mockOnClick} />);
    const card = screen.getByRole('button');
    expect(card).toHaveAttribute('tabIndex', '0');
    expect(card).toHaveAttribute('aria-label');
  });

  it('uses custom ariaLabel when provided', () => {
    render(<Card image={mockImage} onClick={mockOnClick} ariaLabel="Custom label" />);
    const card = screen.getByRole('button');
    expect(card).toHaveAttribute('aria-label', 'Custom label');
  });
});
