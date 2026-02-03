import { render, screen } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import { MemoryRouter } from 'react-router-dom';
import App from './App';

describe('App routing', () => {
  it('renders the Home page by default', () => {
    render(
      <MemoryRouter initialEntries={['/']}>
        <App />
      </MemoryRouter>
    );

    expect(screen.getByRole('heading', { name: /Home/i })).toBeInTheDocument();
  });

  it('navigates to the Contact page when Contact link is clicked', async () => {
    const user = userEvent.setup();

    render(
      <MemoryRouter initialEntries={['/']}>
        <App />
      </MemoryRouter>
    );

    const contactLink = screen.getByRole('link', { name: /Contact/i });
    await user.click(contactLink);

    expect(screen.getByRole('heading', { name: /Connect With Us/i })).toBeInTheDocument();
  });

  it('sets the active class on the current nav link', async () => {
    const user = userEvent.setup();

    const { container } = render(
      <MemoryRouter initialEntries={['/']}>
        <App />
      </MemoryRouter>
    );

    const homeLink = screen.getByRole('link', { name: /Home/i });
    expect(homeLink.className).toMatch(/header__nav-link--active/);

    const contactLink = screen.getByRole('link', { name: /Contact/i });
    await user.click(contactLink);

    expect(contactLink.className).toMatch(/header__nav-link--active/);
    expect(container.querySelectorAll('.header__nav-link--active').length).toBe(1);
  });
});
