import React from 'react';
import { Link } from 'react-router-dom';
import ProductCard from '../components/ProductCard';
import '../styles/HomePage.css';

import heroImage from '../assets/images/HomePage/hero.png';
import aboutWide from '../assets/images/HomePage/about/wide.png';
import aboutN1 from '../assets/images/HomePage/about/n1.png';
import aboutN2 from '../assets/images/HomePage/about/b2.png';
import aboutN3 from '../assets/images/HomePage/about/n3.png';

import homeProduct1 from '../assets/images/HomePage/catalog/p1.png';
import homeProduct2 from '../assets/images/HomePage/catalog/p2.png';
import homeProduct3 from '../assets/images/HomePage/catalog/p3.png';
import homeProduct4 from '../assets/images/HomePage/catalog/p4.png';

import homeProductButtonCart from '../assets/images/HomePage/catalog/Cart.png';

import choiceImage from '../assets/images/HomePage/choice.png';

import subImg from '../assets/images/HomePage/sub/right.png';

import subCheckbox from '../assets/images/HomePage/sub/checkbox.png';

import mapImage from '../assets/images/HomePage/map.png';

const about = {
    'wide': aboutWide,
    'n': [
        aboutN1,
        aboutN2,
        aboutN3,
    ]
}

// Временные данные для демонстрации
const featuredProducts = [
    {
        id: 1,
        name: 'Пижама “Белла”',
        price: '1 300 ₽',
        image: homeProduct1,
    },
    {
        id: 2,
        name: 'Пижама “Единорожка”',
        price: '1 200 ₽',
        image: homeProduct2,
    },
    {
        id: 3,
        name: 'Пижама с лисичками',
        price: '1 500 ₽',
        image: homeProduct3,
    },
    {
        id: 4,
        name: 'Пижама с ажурным вырезом',
        price: '1 800 ₽',
        image: homeProduct4,
    }
];

const HomePage = ({ setHeaderType }) => {
    React.useEffect(() => {
        setHeaderType('transparent');

        // Cleanup function to reset header type when component unmounts
        return () => {
            setHeaderType('default');
        };
    }, [setHeaderType]);

    return (
        <div className="home-page">
            <section className="hero">
                <div className="hero-container">
                    <div className="hero-content">
                        <h1>Домашняя одежда <br />и пижамы для женщин</h1>
                        <p>Выглядеть привлекательно нужно даже дома - комфортные <br />и неотразимые пижамы обеспечивают покой и легкость твоему телу</p>
                        <Link to="/category/pajamas" className="shop-now-btn">Перейти в каталог</Link>
                    </div>
                    <div className='hero-image'>
                        <img src={heroImage} alt='Домашняя одежда и пижамы для женщин' />
                    </div>
                </div>
            </section>

            <section className='home-about'>
                <div className="container">
                    <div className='home-about-head'>
                        <div className='home-about-head-left'>
                            <h2 className='home-about-head-title'>О НАС</h2>
                            <div className='home-about-head-text'>
                                Pijamka Shop - это молодой и современный российский бренд домашней одежды.<br /><br />
                                Мы используем самые комфортные материалы: натуральный и приятный к телу хлопок, мягкую и нежную вискозу. Пижамы, сорочки, пеньюары, домашние костюмы сшиты на нашем производстве в России
                            </div>
                        </div>
                        <div className='home-about-head-right'>
                            <img src={about.wide} alt='О НАС' />
                        </div>
                    </div>
                    <div className='home-about-list'>
                        <div className='home-about-list-item'>
                            <img src={about.n[0]} alt='О НАС' />
                            <div className='home-about-list-item-text'>
                                ПИЖАМЫ
                            </div>
                        </div>
                        <div className='home-about-list-item'>
                            <img src={about.n[1]} alt='О НАС' />
                            <div className='home-about-list-item-text'>
                                СОРОЧКИ
                            </div>
                        </div>
                        <div className='home-about-list-item'>
                            <img src={about.n[2]} alt='О НАС' />
                            <div className='home-about-list-item-text'>
                                ШЕЛК АРМАНИ
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            <section className='home-catalog'>
                <div className='container'>
                    <h2 className='home-catalog-title'>КАТАЛОГ ТОВАРОВ</h2>
                    <div className='home-catalog-list'>
                        {featuredProducts.map((product) => (
                            <div className='home-catalog-list-item' key={product.id}>
                                <div className='home-catalog-list-item-image'>
                                    <img src={product.image} alt={product.name} />
                                </div>
                                <div className='home-catalog-list-item-price'>{product.price}</div>
                                <div className='home-catalog-list-item-name'>{product.name}</div>
                                <button className='home-catalog-list-item-button'>
                                    <img src={homeProductButtonCart} alt='cart' />
                                    В корзину
                                </button>
                            </div>
                        ))}

                    </div>
                </div>
            </section>

            <section className='home-choice'>
                <div className='container'>
                    <img src={choiceImage} alt='Выбор' />
                </div>
            </section>

            <section className='home-subscribe'>
                <div className='container'>
                    <div className='home-subscribe-content'>
                        <div className='home-subscribe-left'>
                            <h2 className='home-subscribe-title'>ПОДПИШИТЕСЬ НА РАССЫЛКУ</h2>
                            <div className='home-subscribe-text'>
                                Мы будем держать вас в курсе всех событий и поможем оставаться в тренде моды
                            </div>
                            <form className='home-subscribe-form'>
                                <div className='home-subscribe-form-inputs'>
                                    <input type='email' placeholder='Эл. почта' />
                                    <button type='submit'>Подписаться</button>
                                </div>
                                <div className='home-subscribe-form-label'>
                                    <img src={subCheckbox} alt='Галка' />
                                    <span>Я даю согласие на обработку моих персональных данных в соответствии с <Link to="/privacy-policy" className="sub-privacy">политикой конфиденциальности</Link></span>
                                </div>
                            </form>
                        </div>
                        <div className='home-subscribe-right'>
                            <img src={subImg} alt='Подписка' />
                        </div>
                    </div>
                </div>
            </section>

            <section className='home-contacts'>
                <div className='container'>
                    <div className='home-contacts-content'>
                        <div className='home-contacts-left'>
                            <h2 className='home-contacts-title'>КОНТАКТЫ</h2>
                            <div className='home-contacts-text'>
                                Телефон: +7(965)-112-56-85 <br/>
                                Почта: PijamkaShop.@mail.ru <br/>
                                Адрес: Чебоксары, ул. Композиторов Воробьевых, 20 
                            </div>
                        </div>
                        <div className='home-contacts-right'>
                            <img src={mapImage} alt='Карта' />
                        </div>
                    </div>
                </div>
            </section>
        </div>
    );
};

export default HomePage;