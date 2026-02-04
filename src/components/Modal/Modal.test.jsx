import { render, screen, fireEvent } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import Modal from './Modal';

describe('Modal Component', () => {
  const mockOnClose = jest.fn();

  beforeEach(() => {
    mockOnClose.mockClear();
  });

  it('does not render when isOpen is false', () => {
    const { container } = render(
      <Modal isOpen={false} onClose={mockOnClose}>
        <p>Modal content</p>
      </Modal>
    );
    const modal = container.querySelector('.modal--active');
    expect(modal).not.toBeInTheDocument();
  });

  it('renders modal content when isOpen is true', () => {
    render(
      <Modal isOpen onClose={mockOnClose}>
        <p>Modal content</p>
      </Modal>
    );
    expect(screen.getByText('Modal content')).toBeInTheDocument();
  });

  it('calls onClose when close button is clicked', async () => {
    const user = userEvent.setup();
    render(
      <Modal isOpen onClose={mockOnClose}>
        <p>Modal content</p>
      </Modal>
    );
    const closeButton = screen.getByRole('button', { name: /close modal/i });
    await user.click(closeButton);
    expect(mockOnClose).toHaveBeenCalled();
  });

  it('calls onClose when overlay is clicked', async () => {
    const user = userEvent.setup();
    const { container } = render(
      <Modal isOpen onClose={mockOnClose}>
        <p>Modal content</p>
      </Modal>
    );
    const overlay = container.querySelector('.modal__overlay');
    await user.click(overlay);
    expect(mockOnClose).toHaveBeenCalled();
  });

  it('calls onClose when Escape key is pressed', async () => {
    render(
      <Modal isOpen onClose={mockOnClose}>
        <p>Modal content</p>
      </Modal>
    );
    fireEvent.keyDown(document, { key: 'Escape', code: 'Escape' });
    expect(mockOnClose).toHaveBeenCalled();
  });

  it('has proper aria attributes', () => {
    render(
      <Modal isOpen onClose={mockOnClose} ariaLabel="Test modal">
        <p>Modal content</p>
      </Modal>
    );
    const dialog = screen.getByRole('dialog');
    expect(dialog).toHaveAttribute('aria-modal', 'true');
    expect(dialog).toHaveAttribute('aria-label', 'Test modal');
  });

  it('prevents body scroll when open', () => {
    const { rerender } = render(
      <Modal isOpen={false} onClose={mockOnClose}>
        <p>Content</p>
      </Modal>
    );

    rerender(
      <Modal isOpen onClose={mockOnClose}>
        <p>Content</p>
      </Modal>
    );

    expect(document.body.style.overflow).toBe('hidden');

    rerender(
      <Modal isOpen={false} onClose={mockOnClose}>
        <p>Content</p>
      </Modal>
    );

    expect(document.body.style.overflow).toBe('unset');
  });
});
