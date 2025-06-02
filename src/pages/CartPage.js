import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import '../styles/CartPage.css';

// Временные данные для демонстрации
const initialCartItems = [
  {
    id: 1,
    name: 'Пижама шелковая розовая',
    price: 5990,
    image: '/placeholder-image.jpg',
    size: 'M',
    quantity: 1
  },
  {
    id: 5,
    name: 'Сорочка кружевная белая',
    price: 3990,
    image: '/placeholder-image.jpg',
    size: 'S',
    quantity: 2
  }
];

const CartPage = () => {
  const [cartItems, setCartItems] = useState(initialCartItems);
  const [promoCode, setPromoCode] = useState('');
  const [promoApplied, setPromoApplied] = useState(false);
  
  const updateQuantity = (id, newQuantity) => {
    if (newQuantity < 1) return;
    
    setCartItems(prevItems => 
      prevItems.map(item => 
        item.id === id ? { ...item, quantity: newQuantity } : item
      )
    );
  };
  
  const removeItem = (id) => {
    setCartItems(prevItems => prevItems.filter(item => item.id !== id));
  };
  
  const applyPromoCode = (e) => {
    e.preventDefault();
    if (promoCode.toLowerCase() === 'скидка10') {
      setPromoApplied(true);
    } else {
      alert('Промокод недействителен');
    }
  };
  
  const subtotal = cartItems.reduce((sum, item) => sum + item.price * item.quantity, 0);
  const discount = promoApplied ? subtotal * 0.1 : 0;
  const total = subtotal - discount;
  
  if (cartItems.length === 0) {
    return (
      <div className="cart-page">
        <div className="container">
          <h1 className="page-title">Корзина</h1>
          <div className="empty-cart">
            <p>Ваша корзина пуста</p>
            <Link to="/" className="continue-shopping">Продолжить покупки</Link>
          </div>
        </div>
      </div>
    );
  }
  
  return (
    <div className="cart-page">
      <div className="container">
        <h1 className="page-title">Корзина</h1>
        
        <div className="cart-content">
          <div className="cart-items">
            <table className="cart-table">
              <thead>
                <tr>
                  <th>Товар</th>
                  <th>Цена</th>
                  <th>Размер</th>
                  <th>Количество</th>
                  <th>Сумма</th>
                  <th></th>
                </tr>
              </thead>
              <tbody>
                {cartItems.map(item => (
                  <tr key={item.id} className="cart-item">
                    <td className="item-info">
                      <img src={item.image} alt={item.name} className="item-image" />
                      <div className="item-details">
                        <h3 className="item-name">{item.name}</h3>
                      </div>
                    </td>
                    <td className="item-price">{item.price} ₽</td>
                    <td className="item-size">{item.size}</td>
                    <td className="item-quantity">
                      <div className="quantity-selector">
                        <button 
                          className="quantity-btn" 
                          onClick={() => updateQuantity(item.id, item.quantity - 1)}
                        >
                          -
                        </button>
                        <span className="quantity-value">{item.quantity}</span>
                        <button 
                          className="quantity-btn" 
                          onClick={() => updateQuantity(item.id, item.quantity + 1)}
                        >
                          +
                        </button>
                      </div>
                    </td>
                    <td className="item-total">{item.price * item.quantity} ₽</td>
                    <td className="item-remove">
                      <button 
                        className="remove-btn" 
                        onClick={() => removeItem(item.id)}
                      >
                        ✕
                      </button>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
          
          <div className="cart-summary">
            <h2>Итого</h2>
            
            <div className="promo-code">
              <form onSubmit={applyPromoCode}>
                <input 
                  type="text" 
                  placeholder="Промокод" 
                  value={promoCode}
                  onChange={(e) => setPromoCode(e.target.value)}
                />
                <button type="submit">Применить</button>
              </form>
            </div>
            
            <div className="summary-details">
              <div className="summary-row">
                <span>Подытог:</span>
                <span>{subtotal} ₽</span>
              </div>
              {promoApplied && (
                <div className="summary-row discount">
                  <span>Скидка (10%):</span>
                  <span>-{discount} ₽</span>
                </div>
              )}
              <div className="summary-row">
                <span>Доставка:</span>
                <span>Бесплатно</span>
              </div>
              <div className="summary-row total">
                <span>Итого:</span>
                <span>{total} ₽</span>
              </div>
            </div>
            
            <Link to="/checkout" className="checkout-btn">
              Оформить заказ
            </Link>
            
            <Link to="/" className="continue-shopping">
              Продолжить покупки
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CartPage;