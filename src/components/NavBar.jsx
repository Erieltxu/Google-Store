import React, { useState } from 'react';
import './navBar.css';

const NavBar = ({ handleSectionClick }) => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  return (
    <>
      <header>
        <nav className="headerNav">
          <div className="headerMenu">
            <div className="headerGoogle">
              <img
                className="headerLogo"
                src="src\assets\img\icons\google-logo.png"
                alt="Logo de Google"
              />
            </div>
            <a>Phones</a>
            <a onClick={() => handleSectionClick('earbuds')}>Earbuds</a>
            <a onClick={() => handleSectionClick('watches')}>Watches</a>
            <a>Smart Home</a>
            <a>Accessories</a>
            <a>Subscriptions</a>
          </div>
          <div className="menuIcons">
            <a href="#">
              <img
                src="src\assets\img\icons\Search.svg"
                alt="Icono de búsqueda"
              />
            </a>
            <a href="#">
              <img src="src\assets\img\icons\Help.svg" alt="Icono de ayuda" />
            </a>
            <a onClick={() => handleSectionClick('earbuds')}>
              <img src="src\assets\img\icons\Cart.svg" alt="Icono del carrito" />
            </a>
            <a href="#">
              <img src="src\assets\img\icons\Avatar.svg" alt="Icono de avatar" />
            </a>
            <div className="hamburger-menu" onClick={toggleMenu}>
              {/* SVG del menú hamburguesa */}
              <svg
                className="hamburger-icon"
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 24 24"
                width="24"
                height="24"
              >
                <path
                  fill="currentColor"
                  d="M21 18H3v-2h18v2zm0-5H3v-2h18v2zm0-7H3V4h18v2z"
                />
              </svg>
            </div>
          </div>
        </nav>
      </header>
      <hr className="linea"></hr>
      {/* Aquí va el menú desplegable para móviles */}
      {isMenuOpen && (
        <div className="mobile-menu">
          <a>Phones</a>
          <a onClick={() => handleSectionClick('earbuds')}>Earbuds</a>
          <a onClick={() => handleSectionClick('watches')}>Watches</a>
          <a>Smart Home</a>
          <a>Accessories</a>
          <a>Subscriptions</a>
        </div>
      )}
    </>
  );
};

export default NavBar;