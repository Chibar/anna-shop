import React from 'react';
import { Link } from 'react-router-dom';
import '../styles/Footer.css';

import logoImage from '../assets/images/footer/logo.svg'
import vkIcon from '../assets/images/footer/vk.png'
import tgIcon from '../assets/images/footer/tg.png'

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
            <h3>Покупателям</h3>
            <ul>
              <li><Link to="/catalog">Каталог</Link></li>
            </ul>
          </div>
          
          <div className="footer-column">
            <h3>Наша одежда</h3>
            <ul>
              <li><Link to="/category/pajamas">Пижамы</Link></li>
              <li><Link to="/category/nightgowns">Сорочки</Link></li>
            </ul>
          </div>
          
          <div className="footer-column">
            <h3>О компании</h3>
            <ul>
              <li><Link to="/about">О нас</Link></li>
              <li><Link to="/contacts">Контакты</Link></li>
            </ul>
          </div>
          
          <div className="footer-column">
            <h3>Контакты</h3>
            <ul className="contact-info">
              <li><Link to="tel:+7(965)-112-56-85">+7(965)-112-56-85</Link></li>
              <li><Link to="mailto:pijamkashop@mail.ru">pijamkashop@mail.ru</Link></li>
            </ul>
            <ul className='contact-social'>
              <li>
                <Link to="https://vk.com">
                  <img src={vkIcon} alt='vk' />
                </Link> 
              </li>
              <li>
                <Link to="https://web.telegram.org/">
                  <img src={tgIcon} alt='tg' />
                </Link> 
              </li>
            </ul>
          </div>
        </div>
        
        <div className="footer-bottom">
          <Link to="/privacy-policy">Пользовательское соглашение</Link>
          <Link to="/privacy-policy">Политика конфидициальности</Link>
        </div>
      </div>
    </footer>
  );
};

export default Footer;