import React, { useState } from 'react';
import { useParams, Link } from 'react-router-dom';
import '../styles/ProductPage.css';

// Временные данные для демонстрации
const productsData = [
  {
    id: 1,
    name: 'Пижама шелковая розовая',
    price: 5990,
    images: ['/placeholder-image.jpg', '/placeholder-image.jpg', '/placeholder-image.jpg'],
    description: 'Элегантная шелковая пижама розового цвета. Изготовлена из натурального шелка высшего качества. Комплект состоит из рубашки с длинным рукавом и брюк.',
    sizes: ['XS', 'S', 'M', 'L', 'XL'],
    material: 'Шелк 100%',
    care: 'Ручная стирка при температуре не выше 30°C',
    category: 'pajamas'
  },
  {
    id: 5,
    name: 'Сорочка кружевная белая',
    price: 3990,
    images: ['/placeholder-image.jpg', '/placeholder-image.jpg'],
    description: 'Изящная кружевная сорочка белого цвета. Выполнена из мягкого хлопка с добавлением эластана для идеальной посадки по фигуре.',
    sizes: ['S', 'M', 'L'],
    material: 'Хлопок 95%, Эластан 5%',
    care: 'Деликатная стирка при температуре не выше 30°C',
    category: 'nightgowns'
  },
];

const ProductPage = () => {
  const { productId } = useParams();
  const product = productsData.find(p => p.id === parseInt(productId)) || null;
  
  const [selectedSize, setSelectedSize] = useState('');
  const [quantity, setQuantity] = useState(1);
  const [mainImage, setMainImage] = useState(0);
  
  if (!product) {
    return (
      <div className="container">
        <div className="product-not-found">
          <h2>Товар не найден</h2>
          <p>К сожалению, запрашиваемый товар не существует.</p>
          <Link to="/" className="back-btn">Вернуться на главную</Link>
        </div>
      </div>
    );
  }
  
  const handleAddToCart = () => {
    if (!selectedSize) {
      alert('Пожалуйста, выберите размер');
      return;
    }
    
    // Здесь будет логика добавления в корзину
    console.log(`Добавлено в корзину: ${product.name}, размер: ${selectedSize}, количество: ${quantity}`);
  };
  
  return (
    <div className="product-page">
      <div className="container">
        <div className="breadcrumbs">
          <Link to="/">Главная</Link> &gt; 
          <Link to={`/category/${product.category}`}>{product.category === 'pajamas' ? 'Пижамы' : product.category === 'nightgowns' ? 'Сорочки' : 'Шелк армани'}</Link> &gt; 
          <span>{product.name}</span>
        </div>
        
        <div className="product-details">
          <div className="product-gallery">
            <div className="main-image">
              <img src={product.images[mainImage]} alt={product.name} />
            </div>
            <div className="thumbnail-images">
              {product.images.map((image, index) => (
                <div 
                  key={index} 
                  className={`thumbnail ${mainImage === index ? 'active' : ''}`}
                  onClick={() => setMainImage(index)}
                >
                  <img src={image} alt={`${product.name} - изображение ${index + 1}`} />
                </div>
              ))}
            </div>
          </div>
          
          <div className="product-info">
            <h1 className="product-name">{product.name}</h1>
            <p className="product-price">{product.price} ₽</p>
            
            <div className="product-sizes">
              <p className="size-label">Размер:</p>
              <div className="size-options">
                {product.sizes.map(size => (
                  <button 
                    key={size} 
                    className={`size-btn ${selectedSize === size ? 'active' : ''}`}
                    onClick={() => setSelectedSize(size)}
                  >
                    {size}
                  </button>
                ))}
              </div>
              <Link to="/size-chart" className="size-chart-link">Таблица размеров</Link>
            </div>
            
            <div className="product-quantity">
              <p>Количество:</p>
              <div className="quantity-selector">
                <button 
                  className="quantity-btn" 
                  onClick={() => setQuantity(prev => (prev > 1 ? prev - 1 : 1))}
                >
                  -
                </button>
                <span className="quantity-value">{quantity}</span>
                <button 
                  className="quantity-btn" 
                  onClick={() => setQuantity(prev => prev + 1)}
                >
                  +
                </button>
              </div>
            </div>
            
            <button className="add-to-cart-btn" onClick={handleAddToCart}>
              Добавить в корзину
            </button>
            
            <div className="product-description">
              <h3>Описание</h3>
              <p>{product.description}</p>
            </div>
            
            <div className="product-details-info">
              <div className="detail-item">
                <span className="detail-label">Материал:</span>
                <span className="detail-value">{product.material}</span>
              </div>
              <div className="detail-item">
                <span className="detail-label">Уход:</span>
                <span className="detail-value">{product.care}</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProductPage;