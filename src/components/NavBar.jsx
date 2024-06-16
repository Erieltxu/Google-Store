import React, { useState } from 'react';
import './navBar.css';


const NavBar = ({ handleSectionClick }) => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
    const menuIcon = document.getElementById('menuBtn');
    menuIcon.addEventListener('mouseenter', function() {
      const rects = menuIcon.getElementsByTagName('rect');
      for (let rect of rects) {
        rect.setAttribute('fill', 'blue');
      }
    });
    
    menuIcon.addEventListener('mouseleave', function() {
      const rects = menuIcon.getElementsByTagName('rect');
      for (let rect of rects) {
        rect.setAttribute('fill', '#5F6368');
      }
    });
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
            <a class="phones">Phones</a>
            <a class="earbuds" href="/Earbuds">Earbuds</a>
            <a class="watches" href="/Watches">Watches</a>
            <a class="smart-home">Smart Home</a>
            <a class="accessories"> Accessories</a>

          </div>
          <div className="menuIcons">
            <a href="#">
              <img
                src="src/assets/img/icons/Search.svg"
                alt="Icono de búsqueda"
              />
            </a>
            <a href="#">
              <img src="src\assets\img\icons\Help.svg" alt="Icono de ayuda" />
            </a>
            <a onClick={() => handleSectionClick('earbuds')} href="/cart">
              <img src="src/assets/img/icons/Cart.svg" alt="Icono del carrito" />
            </a>
            <a href="#">
              <img src="src/assets/img/icons/Avatar.svg" alt="Icono de avatar" />
            </a>
            {/* Ícono de menú para pantallas pequeñas */}
            <div className="menuContainer">
              <div className="menuIcon" onClick={toggleMenu}>
                <img src="src/assets/img/icons/Menu.svg" alt="Menú" id="menuBtn" className="menuIcon"/>
              </div>
              {/* Mostrar dropdownMenu solo si isMenuOpen es true */}
              {isMenuOpen && (
                <div className="dropdownMenu" id="dropdownMenu">
                  <a>Phones</a>
                  <a href="https://www.youtube.com/watch?v=mBYSUUnMt9M&ab_channel=freeCodeCampEspa%C3%B1ol">Earbuds</a>
                  <a href="/">Watches</a>
                  <a>Smart Home</a>
                  <a>Accessories</a>
                  <a>Subscriptions</a>
                </div>
              )}
            </div>
          </div>
        </nav>
      </header>
      <hr className="linea"></hr>
      
    </>
  );
};


export default NavBar;
