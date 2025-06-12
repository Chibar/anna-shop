import React from 'react';
import { Link } from 'react-router-dom';
import '../styles/Footer.css';

import logoImage from '../assets/images/footer/logo.svg'

const Footer = () => {
  return (
    <footer className="footer">
      <div className="container">
        <div className='footer-content'>
          <div className="footer-column">
            <Link to="/anna-shop/">
              <img src={logoImage} alt="ANNA" className="footer-logo" />
            </Link>
          </div>
        

          <div className="footer-column">
            <h3>Информация</h3>
            <ul>
              <li><Link to="/about">О нас</Link></li>
              <li><Link to="/contacts">Контакты</Link></li>
              <li><Link to="/delivery">Доставка и оплата</Link></li>
              <li><Link to="/returns">Возврат</Link></li>
            </ul>
          </div>
          
          <div className="footer-column">
            <h3>Каталог</h3>
            <ul>
              <li><Link to="/category/pajamas">Пижамы</Link></li>
              <li><Link to="/category/nightgowns">Сорочки</Link></li>
              <li><Link to="/category/silk">Шелк армани</Link></li>
              <li><Link to="/size-chart">Таблица размеров</Link></li>
            </ul>
          </div>
          
          <div className="footer-column">
            <h3>Документы</h3>
            <ul>
              <li><Link to="/privacy-policy">Политика конфиденциальности</Link></li>
              <li><Link to="/terms">Пользовательское соглашение</Link></li>
            </ul>
          </div>
          
          <div className="footer-column">
            <h3>Контакты</h3>
            <ul className="contact-info">
              <li>
                <span>Телефон:</span>
                <a href="tel:+79001234567">+7 (900) 123-45-67</a>
              </li>
              <li>
                <span>Email:</span>
                <a href="mailto:info@annashop.ru">info@annashop.ru</a>
              </li>
            </ul>
          </div>
        </div>
        
        <div className="footer-bottom">
          
        </div>
      </div>
    </footer>
  );
};

export default Footer;