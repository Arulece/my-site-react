import React from 'react';
import { render, screen, fireEvent } from '@testing-library/react';
import Header from './Header';

describe('Header', () => {
  it('renders logo and navigation links', () => {
    render(<Header />);

    expect(screen.getByText(/MyLogo/i)).toBeInTheDocument();
    expect(screen.getByRole('link', { name: /Home/i })).toBeInTheDocument();
    expect(screen.getByRole('link', { name: /About/i })).toBeInTheDocument();
    expect(screen.getByRole('link', { name: /Services/i })).toBeInTheDocument();
    expect(screen.getByRole('link', { name: /Blog/i })).toBeInTheDocument();
    expect(screen.getByRole('link', { name: /contact@example.com/i })).toBeInTheDocument();
  });

  it('toggles mobile navigation visibility when toggle button is clicked', () => {
    render(<Header />);

    const toggleButton = screen.getByRole('button', { name: /Toggle navigation/i });
    const nav = screen.getByRole('navigation', { name: /Primary navigation/i });

    expect(nav.className).not.toMatch(/header__nav--open/);

    fireEvent.click(toggleButton);
    expect(nav.className).toMatch(/header__nav--open/);

    fireEvent.click(toggleButton);
    expect(nav.className).not.toMatch(/header__nav--open/);
  });
});


