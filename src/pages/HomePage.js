import React from 'react';
import { Link } from 'react-router-dom';
import ProductCard from '../components/ProductCard';
import '../styles/HomePage.css';

// Временные данные для демонстрации
const featuredProducts = [
  {
    id: 1,
    name: 'Пижама шелковая розовая',
    price: 5990,
    image: '/placeholder-image.jpg',
    category: 'pajamas'
  },
  {
    id: 2,
    name: 'Сорочка кружевная белая',
    price: 3990,
    image: '/placeholder-image.jpg',
    category: 'nightgowns'
  },
  {
    id: 3,
    name: 'Пижама хлопковая в полоску',
    price: 4590,
    image: '/placeholder-image.jpg',
    category: 'pajamas'
  },
  {
    id: 4,
    name: 'Шелк армани комплект черный',
    price: 7990,
    image: '/placeholder-image.jpg',
    category: 'silk'
  }
];

const HomePage = () => {
  return (
    <div className="home-page">
      <section className="hero">
        <div className="container">
          <div className="hero-content">
            <h1>Элегантная одежда для сна и отдыха</h1>
            <p>Изысканные пижамы и сорочки из натуральных материалов</p>
            <Link to="/category/pajamas" className="shop-now-btn">Смотреть коллекцию</Link>
          </div>
        </div>
      </section>

      <section className="featured-categories">
        <div className="container">
          <h2 className="section-title">Категории</h2>
          <div className="categories-grid">
            <Link to="/category/pajamas" className="category-card">
              <div className="category-image">
                <img src="/placeholder-image.jpg" alt="Пижамы" />
              </div>
              <h3>Пижамы</h3>
            </Link>
            <Link to="/category/nightgowns" className="category-card">
              <div className="category-image">
                <img src="/placeholder-image.jpg" alt="Сорочки" />
              </div>
              <h3>Сорочки</h3>
            </Link>
            <Link to="/category/silk" className="category-card">
              <div className="category-image">
                <img src="/placeholder-image.jpg" alt="Шелк армани" />
              </div>
              <h3>Шелк армани</h3>
            </Link>
          </div>
        </div>
      </section>

      <section className="featured-products">
        <div className="container">
          <h2 className="section-title">Популярные товары</h2>
          <div className="products-grid">
            {featuredProducts.map(product => (
              <ProductCard key={product.id} product={product} />
            ))}
          </div>
          <div className="view-all">
            <Link to="/products" className="view-all-btn">Смотреть все товары</Link>
          </div>
        </div>
      </section>

      <section className="newsletter-section">
        <div className="container">
          <div className="newsletter-content">
            <h2>Подпишитесь на наши новости</h2>
            <p>Получайте информацию о новых коллекциях и специальных предложениях</p>
            <form className="newsletter-form">
              <input type="email" placeholder="Ваш email" required />
              <button type="submit">Подписаться</button>
            </form>
          </div>
        </div>
      </section>
    </div>
  );
};

export default HomePage;