import React from 'react';

function Header() {
  return (
    <header className="l-header">
      <nav className="nav bd-grid">
        <div>
          <a href="#" className="nav__logo">Marlon</a>
        </div>

        <div className="nav__menu" id="nav-menu">
          <ul className="nav__list">
            <li className="nav__item"><a href="#home" className="nav__link active-link">Home</a></li>
            <li className="nav__item"><a href="#about" className="nav__link">About</a></li>
            <li className="nav__item"><a href="#skills" className="nav__link">Skills</a></li>
            <li className="nav__item"><a href="#work" className="nav__link">Work</a></li>
            <li className="nav__item"><a href="#contact" className="nav__link">Contact</a></li>
          </ul>
        </div>

        <div className="nav__toggle" id="nav-toggle">
          <i className='bx bx-menu'></i>
        </div>
      </nav>
    </header>
  );
}

export default Header;
