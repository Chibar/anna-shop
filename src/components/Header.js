import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import '../styles/Header.css';
import logoImage from '../assets/images/logo.png';

const Header = () => {
  const [catalogMenuOpen, setCatalogMenuOpen] = useState(false);

  const toggleCatalogMenu = () => {
    setCatalogMenuOpen(!catalogMenuOpen);
  };

  return (
    <header className="header">
      <div className="top-bar">
        <div className="container">
          <div className="top-bar-content">
            <div className="contact-info">
              <a href="tel:+79001234567">+7 (900) 123-45-67</a>
              <a href="mailto:info@annashop.ru">info@annashop.ru</a>
            </div>
            <div className="user-actions">
              <Link to="/account">Личный кабинет</Link>
              <Link to="/cart">Корзина</Link>
            </div>
          </div>
        </div>
      </div>

      <div className="main-header">
        <div className="container">
          <div className="header-content">
            <div className="logo">
              <Link to="/">
                <img src={logoImage} alt="ANNA" />
              </Link>
            </div>
            <nav className="navigation">
              <ul>
                <li className="catalog-item">
                  <button onClick={toggleCatalogMenu}>
                    Каталог
                    <svg width="10" height="6" viewBox="0 0 10 6" fill="none" xmlns="http://www.w3.org/2000/svg">
                      <path d="M1 1L5 5L9 1" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
                    </svg>
                  </button>
                  {catalogMenuOpen && (
                    <div className="dropdown-menu">
                      <div className="dropdown-column">
                        <h3>Категории</h3>
                        <ul>
                          <li><Link to="/category/pajamas">Пижамы</Link></li>
                          <li><Link to="/category/nightgowns">Сорочки</Link></li>
                          <li><Link to="/category/silk">Шелк армани</Link></li>
                        </ul>
                      </div>
                      <div className="dropdown-column">
                        <h3>Коллекции</h3>
                        <ul>
                          <li><Link to="/collection/summer">Летняя</Link></li>
                          <li><Link to="/collection/winter">Зимняя</Link></li>
                        </ul>
                      </div>
                    </div>
                  )}
                </li>
                <li><Link to="/category/pajamas">Пижамы</Link></li>
                <li><Link to="/category/nightgowns">Сорочки</Link></li>
                <li><Link to="/category/silk">Шелк армани</Link></li>
                <li><Link to="/size-chart">Таблица размеров</Link></li>
              </ul>
            </nav>
          </div>
        </div>
      </div>
    </header>
  );
};

export default Header;