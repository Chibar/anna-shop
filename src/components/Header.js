import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import '../styles/Header.css';
import { Grid, Menu } from 'react-feather';
import logoImageWhite from '../assets/images/header/logo-white.png'
import logoImageBlack from '../assets/images/header/logo.png'

import cartImageWhite from '../assets/images/header/cart-white.png';
import cartImageBlack from '../assets/images/header/cart-black.png';

const Header = ({ headerType }) => {
  const [catalogMenuOpen, setCatalogMenuOpen] = useState(false);
  const [headerClass, setHeaderClass] = useState('header');
  const [logo, setLogo] = useState(logoImageBlack);
  const [cart, setCartImage] = useState(cartImageBlack);

  const toggleCatalogMenu = () => {
    setCatalogMenuOpen(!catalogMenuOpen);
  };

  useEffect(() => {
    if (headerType === 'transparent') {
      setHeaderClass('header transparent');
      setLogo(logoImageWhite)
      setCartImage(cartImageWhite)
    } else {
      setHeaderClass('header');
      setLogo(logoImageBlack)
      setCartImage(cartImageBlack)
    }
  }, [headerType]);

  return (
    <header className={headerClass}>
      <div className="header-container">
        <div className="logo">
          <Link to="/anna-shop/">
            <img src={logo} alt="Логотип" />
          </Link>
        </div>

        <div className='main-nav-wrapper'>
          <div className="header-contacts">
            <div className="phone"><span className='phone-val'>8 800 723 11 92</span> - звонок бесплатный</div>
            <Link to="mailto:pijamka@shop.ru" className='email'>
              pijamka@shop.ru
            </Link>
          </div>
          <nav className="main-nav">
            <ul>
              <li className="catalog-item">
                <button onClick={toggleCatalogMenu} className='header-catalog-opener'>
                  <Grid size={16} />
                  <span>КАТАЛОГ</span>
                </button>
                {catalogMenuOpen && (
                  <div className="dropdown-menu">
                    <div className="dropdown-column">
                      <h3>Категории</h3>
                      <ul>
                        <li><Link to="/category/pajamas">Пижамы</Link></li>
                        <li><Link to="/category/sorochki">Сорочки</Link></li>
                        <li><Link to="/category/silk">Шелк Армани</Link></li>
                        <li><Link to="/category/new">Новинки</Link></li>
                      </ul>
                    </div>
                    <div className="dropdown-column">
                      <h3>Коллекции</h3>
                      <ul>
                        <li><Link to="/collection/summer">Летняя</Link></li>
                        <li><Link to="/collection/winter">Зимняя</Link></li>
                        <li><Link to="/collection/special">Особые случаи</Link></li>
                      </ul>
                    </div>
                  </div>
                )}
              </li>
              <li><Link to="/pajamas">ПИЖАМЫ</Link></li>
              <li><Link to="/sorochki">СОРОЧКИ</Link></li>
              <li><Link to="/silk-armani">ШЕЛК АРМАНИ</Link></li>
              <li><Link to="/about">О НАС</Link></li>
              <li>
                <Link to="/cart">
                  <img src={cart} alt='Корзина' />
                </Link>
              </li>
            </ul>
          </nav>
        </div>
      </div>
    </header>
  );
};

export default Header;