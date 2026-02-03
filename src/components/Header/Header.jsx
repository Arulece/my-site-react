import React, { useState } from 'react';
import { NavLink } from 'react-router-dom';
import './Header.scss';

const Header = () => {
  const [isNavOpen, setIsNavOpen] = useState(false);

  const handleToggleNav = () => {
    setIsNavOpen((prev) => !prev);
  };

  const closeNav = () => {
    setIsNavOpen(false);
  };

  const getNavLinkClassName = ({ isActive }) =>
    `header__nav-link${isActive ? ' header__nav-link--active' : ''}`;

  return (
    <header className="header">
      <div className="header__inner">
        <div className="header__brand">
          <div className="header__logo">MyLogo</div>
        </div>

        <button
          type="button"
          className="header__toggle"
          aria-label="Toggle navigation"
          aria-expanded={isNavOpen}
          onClick={handleToggleNav}
        >
          <span className="header__toggle-line" />
          <span className="header__toggle-line" />
          <span className="header__toggle-line" />
        </button>

        <nav
          className={`header__nav ${isNavOpen ? 'header__nav--open' : ''}`}
          aria-label="Primary navigation"
        >
          <ul className="header__nav-list">
            <li className="header__nav-item">
              <NavLink to="/" end className={getNavLinkClassName} onClick={closeNav}>
                Home
              </NavLink>
            </li>
            <li className="header__nav-item">
              <NavLink to="/about" className={getNavLinkClassName} onClick={closeNav}>
                About
              </NavLink>
            </li>
            <li className="header__nav-item">
              <NavLink to="/services" className={getNavLinkClassName} onClick={closeNav}>
                Services
              </NavLink>
            </li>
            <li className="header__nav-item">
              <NavLink to="/blog" className={getNavLinkClassName} onClick={closeNav}>
                Blog
              </NavLink>
            </li>
            <li className="header__nav-item">
              <NavLink to="/contact" className={getNavLinkClassName} onClick={closeNav}>
                Contact
              </NavLink>
            </li>
          </ul>
          <div className="header__contact">
            <a href="mailto:contact@example.com" className="header__contact-link">
              arulkumar.m.ece@gmail.com
            </a>
          </div>
        </nav>
      </div>
    </header>
  );
};

export default Header;


