import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import '../styles/CheckoutPage.css';

const CheckoutPage = () => {
  const [formData, setFormData] = useState({
    firstName: '',
    lastName: '',
    email: '',
    phone: '',
    address: '',
    city: '',
    postalCode: '',
    paymentMethod: 'card'
  });
  
  const [orderPlaced, setOrderPlaced] = useState(false);
  
  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value
    }));
  };
  
  const handleSubmit = (e) => {
    e.preventDefault();
    // Здесь будет логика отправки заказа
    console.log('Заказ оформлен:', formData);
    setOrderPlaced(true);
  };
  
  if (orderPlaced) {
    return (
      <div className="checkout-page">
        <div className="container">
          <div className="order-success">
            <h1>Заказ успешно оформлен!</h1>
            <p>Спасибо за ваш заказ. Номер вашего заказа: <strong>ANS-{Math.floor(Math.random() * 10000)}</strong></p>
            <p>Мы отправили подтверждение на вашу электронную почту.</p>
            <Link to="/" className="back-to-home">Вернуться на главную</Link>
          </div>
        </div>
      </div>
    );
  }
  
  return (
    <div className="checkout-page">
      <div className="container">
        <h1 className="page-title">Оформление заказа</h1>
        
        <div className="checkout-content">
          <div className="checkout-form">
            <form onSubmit={handleSubmit}>
              <div className="form-section">
                <h2>Контактная информация</h2>
                <div className="form-row">
                  <div className="form-group">
                    <label htmlFor="firstName">Имя*</label>
                    <input
                      type="text"
                      id="firstName"
                      name="firstName"
                      value={formData.firstName}
                      onChange={handleChange}
                      required
                    />
                  </div>
                  <div className="form-group">
                    <label htmlFor="lastName">Фамилия*</label>
                    <input
                      type="text"
                      id="lastName"
                      name="lastName"
                      value={formData.lastName}
                      onChange={handleChange}
                      required
                    />
                  </div>
                </div>
                
                <div className="form-row">
                  <div className="form-group">
                    <label htmlFor="email">Email*</label>
                    <input
                      type="email"
                      id="email"
                      name="email"
                      value={formData.email}
                      onChange={handleChange}
                      required
                    />
                  </div>
                  <div className="form-group">
                    <label htmlFor="phone">Телефон*</label>
                    <input
                      type="tel"
                      id="phone"
                      name="phone"
                      value={formData.phone}
                      onChange={handleChange}
                      required
                    />
                  </div>
                </div>
              </div>
              
              <div className="form-section">
                <h2>Адрес доставки</h2>
                <div className="form-group">
                  <label htmlFor="address">Адрес*</label>
                  <input
                    type="text"
                    id="address"
                    name="address"
                    value={formData.address}
                    onChange={handleChange}
                    required
                  />
                </div>
                
                <div className="form-row">
                  <div className="form-group">
                    <label htmlFor="city">Город*</label>
                    <input
                      type="text"
                      id="city"
                      name="city"
                      value={formData.city}
                      onChange={handleChange}
                      required
                    />
                  </div>
                  <div className="form-group">
                    <label htmlFor="postalCode">Индекс*</label>
                    <input
                      type="text"
                      id="postalCode"
                      name="postalCode"
                      value={formData.postalCode}
                      onChange={handleChange}
                      required
                    />
                  </div>
                </div>
              </div>
              
              <div className="form-section">
                <h2>Способ оплаты</h2>
                <div className="payment-methods">
                  <div className="payment-method">
                    <input
                      type="radio"
                      id="card"
                      name="paymentMethod"
                      value="card"
                      checked={formData.paymentMethod === 'card'}
                      onChange={handleChange}
                    />
                    <label htmlFor="card">Банковская карта</label>
                  </div>
                  <div className="payment-method">
                    <input
                      type="radio"
                      id="cash"
                      name="paymentMethod"
                      value="cash"
                      checked={formData.paymentMethod === 'cash'}
                      onChange={handleChange}
                    />
                    <label htmlFor="cash">Наличными при получении</label>
                  </div>
                </div>
              </div>
              
              <button type="submit" className="place-order-btn">
                Оформить заказ
              </button>
            </form>
          </div>
          
          <div className="order-summary">
            <h2>Ваш заказ</h2>
            <div className="order-items">
              <div className="order-item">
                <div className="item-info">
                  <img src="/placeholder-image.jpg" alt="Пижама шелковая розовая" />
                  <div>
                    <h3>Пижама шелковая розовая</h3>
                    <p>Размер: M</p>
                    <p>Количество: 1</p>
                  </div>
                </div>
                <div className="item-price">5990 ₽</div>
              </div>
              <div className="order-item">
                <div className="item-info">
                  <img src="/placeholder-image.jpg" alt="Сорочка кружевная белая" />
                  <div>
                    <h3>Сорочка кружевная белая</h3>
                    <p>Размер: S</p>
                    <p>Количество: 2</p>
                  </div>
                </div>
                <div className="item-price">7980 ₽</div>
              </div>
            </div>
            
            <div className="order-totals">
              <div className="total-row">
                <span>Подытог:</span>
                <span>13970 ₽</span>
              </div>
              <div className="total-row">
                <span>Доставка:</span>
                <span>Бесплатно</span>
              </div>
              <div className="total-row final">
                <span>Итого:</span>
                <span>13970 ₽</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CheckoutPage;