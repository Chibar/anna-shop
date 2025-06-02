import React from 'react';
import { useParams } from 'react-router-dom';
import ProductCard from '../components/ProductCard';
import '../styles/CategoryPage.css';

// Временные данные для демонстрации
const categoryProducts = {
  pajamas: [
    {
      id: 1,
      name: 'Пижама шелковая розовая',
      price: 5990,
      image: '/placeholder-image.jpg',
    },
    {
      id: 2,
      name: 'Пижама хлопковая в полоску',
      price: 4590,
      image: '/placeholder-image.jpg',
    },
    {
      id: 3,
      name: 'Пижама атласная голубая',
      price: 6290,
      image: '/placeholder-image.jpg',
    },
    {
      id: 4,
      name: 'Пижама с шортами черная',
      price: 4990,
      image: '/placeholder-image.jpg',
    },
  ],
  nightgowns: [
    {
      id: 5,
      name: 'Сорочка кружевная белая',
      price: 3990,
      image: '/placeholder-image.jpg',
    },
    {
      id: 6,
      name: 'Сорочка шелковая бежевая',
      price: 4290,
      image: '/placeholder-image.jpg',
    },
    {
      id: 7,
      name: 'Сорочка атласная черная',
      price: 3790,
      image: '/placeholder-image.jpg',
    },
  ],
  silk: [
    {
      id: 8,
      name: 'Шелк армани комплект черный',
      price: 7990,
      image: '/placeholder-image.jpg',
    },
    {
      id: 9,
      name: 'Шелк армани комплект белый',
      price: 7990,
      image: '/placeholder-image.jpg',
    },
  ],
};

const categoryTitles = {
  pajamas: 'Пижамы',
  nightgowns: 'Сорочки',
  silk: 'Шелк армани',
};

const CategoryPage = () => {
  const { categoryId } = useParams();
  const products = categoryProducts[categoryId] || [];
  const categoryTitle = categoryTitles[categoryId] || 'Категория не найдена';

  return (
    <div className="category-page">
      <div className="container">
        <h1 className="category-title">{categoryTitle}</h1>
        
        <div className="filters">
          <div className="filter-group">
            <label>Сортировать по:</label>
            <select>
              <option value="popular">Популярности</option>
              <option value="price-asc">Цена (по возрастанию)</option>
              <option value="price-desc">Цена (по убыванию)</option>
              <option value="new">Новинки</option>
            </select>
          </div>
          
          <div className="filter-group">
            <label>Размер:</label>
            <div className="size-filters">
              <button>XS</button>
              <button>S</button>
              <button>M</button>
              <button>L</button>
              <button>XL</button>
            </div>
          </div>
        </div>
        
        <div className="products-grid">
          {products.length > 0 ? (
            products.map(product => (
              <ProductCard key={product.id} product={product} />
            ))
          ) : (
            <p className="no-products">В данной категории товары не найдены.</p>
          )}
        </div>
      </div>
    </div>
  );
};

export default CategoryPage;