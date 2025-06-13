import React, { useState, useMemo, useEffect } from 'react';
import { useParams, useLocation, Link } from 'react-router-dom';
import ProductCard from '../components/ProductCard';
import '../styles/CategoryPage.css';

import homeProduct1 from '../assets/images/HomePage/catalog/p1.png';
import homeProduct2 from '../assets/images/HomePage/catalog/p2.png';
import homeProduct3 from '../assets/images/HomePage/catalog/p3.png';
import homeProduct4 from '../assets/images/HomePage/catalog/p4.png';

// Временные данные для демонстрации
const categoryProducts = {
  pajamas: [
    {
      id: 1,
      name: 'Пижама "Белла"',
      price: 1300,
      image: homeProduct1,
    },
    {
      id: 2,
      name: 'Пижама "Единорожка"',
      price: 1200,
      image: homeProduct2,
    },
    {
      id: 3,
      name: 'Пижама с лисичками',
      price: 1500,
      image: homeProduct3,
    },
    {
      id: 4,
      name: 'Пижама с ажурным вырезом',
      price: 1800,
      image: homeProduct4,
    },
  ],
  nightgowns: [
    {
      id: 5,
      name: 'Сорочка кружевная белая',
      price: 3990,
      image: homeProduct1,
    },
    {
      id: 6,
      name: 'Сорочка шелковая бежевая',
      price: 4290,
      image: homeProduct2,
    },
    {
      id: 7,
      name: 'Сорочка атласная черная',
      price: 3790,
      image: homeProduct3,
    },
  ],
  silk: [
    {
      id: 8,
      name: 'Шелк армани комплект черный',
      price: 7990,
      image: homeProduct4,
    },
    {
      id: 9,
      name: 'Шелк армани комплект белый',
      price: 7990,
      image: homeProduct1,
    },
  ],
};

const categoryTitles = {
  pajamas: 'Пижамы',
  nightgowns: 'Сорочки',
  silk: 'Шелк армани',
};

const breadcrumbTitles = {
  pajamas: 'Пижамы',
  nightgowns: 'Сорочки',
  silk: 'Шелк армани',
};

const CategoryPage = () => {
  const { categoryId } = useParams();
  const location = useLocation();
  const [sortBy, setSortBy] = useState('popular');
  const [selectedSizes, setSelectedSizes] = useState([]);
  const [selectedColors, setSelectedColors] = useState([]);
  const [priceRange, setPriceRange] = useState({ min: 0, max: 10000 });
  const [isLoading, setIsLoading] = useState(true);
  
  const products = categoryProducts[categoryId] || [];
  const categoryTitle = categoryTitles[categoryId] || 'Категория не найдена';

  const breadcrumbs = [
    { path: '/', title: 'Главная' },
    { path: '/catalog', title: 'Каталог' },
    { path: `/category/${categoryId}`, title: breadcrumbTitles[categoryId] || 'Категория' }
  ];

  // Reset filters when category changes
  useEffect(() => {
    setSortBy('popular');
    setSelectedSizes([]);
    setSelectedColors([]);
    setPriceRange({ min: 0, max: 10000 });
    setIsLoading(true);
    
    const timer = setTimeout(() => {
      setIsLoading(false);
    }, 500);

    return () => clearTimeout(timer);
  }, [categoryId]);

  const handleSizeClick = (size) => {
    setSelectedSizes(prev => 
      prev.includes(size) 
        ? prev.filter(s => s !== size)
        : [...prev, size]
    );
  };

  const handleColorClick = (color) => {
    setSelectedColors(prev => 
      prev.includes(color) 
        ? prev.filter(c => c !== color)
        : [...prev, color]
    );
  };

  const handlePriceChange = (type, value) => {
    setPriceRange(prev => ({
      ...prev,
      [type]: Number(value)
    }));
  };

  const sortedAndFilteredProducts = useMemo(() => {
    let result = [...products];

    // Apply sorting
    switch (sortBy) {
      case 'price-asc':
        result.sort((a, b) => a.price - b.price);
        break;
      case 'price-desc':
        result.sort((a, b) => b.price - a.price);
        break;
      case 'new':
        result.sort((a, b) => b.id - a.id);
        break;
      default: // 'popular'
        break;
    }

    // Apply filters
    if (selectedSizes.length > 0) {
      // In a real app, filter by available sizes
      // For demo, we'll keep all products
    }

    if (selectedColors.length > 0) {
      // In a real app, filter by colors
      // For demo, we'll keep all products
    }

    // Filter by price range
    result = result.filter(product => 
      product.price >= priceRange.min && 
      product.price <= priceRange.max
    );

    return result;
  }, [products, sortBy, selectedSizes, selectedColors, priceRange]);

  const handleSortChange = (e) => {
    setSortBy(e.target.value);
    window.scrollTo({
      top: document.querySelector('.products-grid').offsetTop - 100,
      behavior: 'smooth'
    });
  };

  const colors = [
    { name: 'Белый', value: '#FFFFFF' },
    { name: 'Черный', value: '#000000' },
    { name: 'Бежевый', value: '#F5F5DC' },
    { name: 'Розовый', value: '#FFC0CB' },
    { name: 'Голубой', value: '#ADD8E6' },
  ];

  return (
    <div className="category-page">
      <div className="container">
        <nav className="breadcrumbs" aria-label="Хлебные крошки">
          {breadcrumbs.map((crumb, index) => (
            <React.Fragment key={crumb.path}>
              {index > 0 && <span className="breadcrumb-separator">/</span>}
              {index === breadcrumbs.length - 1 ? (
                <span className="breadcrumb-current">{crumb.title}</span>
              ) : (
                <Link to={crumb.path} className="breadcrumb-link">
                  {crumb.title}
                </Link>
              )}
            </React.Fragment>
          ))}
        </nav>

        <aside className="sidebar">
          <h1 className="category-title">{categoryTitle}</h1>
          <div className="filters">
            <div className="filter-group">
              <label>Сортировать по:</label>
              <select 
                value={sortBy} 
                onChange={handleSortChange}
                disabled={isLoading}
              >
                <option value="popular">Популярности</option>
                <option value="price-asc">Цена (по возрастанию)</option>
                <option value="price-desc">Цена (по убыванию)</option>
                <option value="new">Новинки</option>
              </select>
            </div>

            <div className="filter-group">
              <label>Цена:</label>
              <div className="price-range">
                <input
                  type="number"
                  value={priceRange.min}
                  onChange={(e) => handlePriceChange('min', e.target.value)}
                  placeholder="От"
                  min="0"
                  max={priceRange.max}
                  disabled={isLoading}
                />
                <span>-</span>
                <input
                  type="number"
                  value={priceRange.max}
                  onChange={(e) => handlePriceChange('max', e.target.value)}
                  placeholder="До"
                  min={priceRange.min}
                  disabled={isLoading}
                />
              </div>
            </div>
            
            <div className="filter-group">
              <label>Размер:</label>
              <div className="size-filters">
                {['XS', 'S', 'M', 'L', 'XL'].map(size => (
                  <button
                    key={size}
                    className={selectedSizes.includes(size) ? 'active' : ''}
                    onClick={() => handleSizeClick(size)}
                    disabled={isLoading}
                  >
                    {size}
                  </button>
                ))}
              </div>
            </div>

            <div className="filter-group">
              <label>Цвет:</label>
              <div className="color-filters">
                {colors.map(color => (
                  <button
                    key={color.value}
                    className={`color-button ${selectedColors.includes(color.value) ? 'active' : ''}`}
                    onClick={() => handleColorClick(color.value)}
                    disabled={isLoading}
                    style={{ backgroundColor: color.value }}
                    title={color.name}
                  />
                ))}
              </div>
            </div>
          </div>
        </aside>
        
        <main className="products-grid">
          {isLoading ? (
            <div className="loading-placeholder">
              Загрузка товаров...
            </div>
          ) : sortedAndFilteredProducts.length > 0 ? (
            sortedAndFilteredProducts.map(product => (
              <ProductCard 
                key={product.id} 
                product={product}
                categoryId={categoryId}
              />
            ))
          ) : (
            <p className="no-products">
              {selectedSizes.length > 0 || selectedColors.length > 0
                ? 'Товары с выбранными параметрами не найдены'
                : 'В данной категории товары не найдены'}
            </p>
          )}
        </main>
      </div>
    </div>
  );
};

export default CategoryPage;