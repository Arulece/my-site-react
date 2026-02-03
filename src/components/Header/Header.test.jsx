import { render, screen, fireEvent } from '@testing-library/react';
import { MemoryRouter } from 'react-router-dom';
import Header from './Header';

const renderWithRouter = () =>
  render(
    <MemoryRouter>
      <Header />
    </MemoryRouter>
  );

describe('Header', () => {
  it('renders logo and navigation links', () => {
    renderWithRouter();

    expect(screen.getByText(/MyLogo/i)).toBeInTheDocument();
    expect(screen.getByRole('link', { name: /Home/i })).toBeInTheDocument();
    expect(screen.getByRole('link', { name: /About/i })).toBeInTheDocument();
    expect(screen.getByRole('link', { name: /Services/i })).toBeInTheDocument();
    expect(screen.getByRole('link', { name: /Blog/i })).toBeInTheDocument();
    expect(screen.getByRole('link', { name: /arulkumar\.m\.ece@gmail\.com/i })).toBeInTheDocument();
  });

  it('toggles mobile navigation visibility when toggle button is clicked', () => {
    renderWithRouter();

    const toggleButton = screen.getByRole('button', { name: /Toggle navigation/i });
    const nav = screen.getByRole('navigation', { name: /Primary navigation/i });

    expect(nav.className).not.toMatch(/header__nav--open/);

    fireEvent.click(toggleButton);
    expect(nav.className).toMatch(/header__nav--open/);

    fireEvent.click(toggleButton);
    expect(nav.className).not.toMatch(/header__nav--open/);
  });
});
