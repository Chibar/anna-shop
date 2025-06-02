import React from 'react';
import '../styles/SizeChartPage.css';

const SizeChartPage = () => {
  return (
    <div className="size-chart-page">
      <div className="container">
        <h1 className="page-title">Таблица размеров</h1>
        
        <div className="size-chart-content">
          <div className="size-chart-info">
            <p>
              Для правильного выбора размера рекомендуем ознакомиться с нашей таблицей размеров. 
              Все измерения указаны в сантиметрах. Если ваши мерки находятся между двумя размерами, 
              рекомендуем выбрать больший размер для более комфортной посадки.
            </p>
          </div>
          
          <div className="size-chart-table">
            <h2>Пижамы и сорочки</h2>
            <table>
              <thead>
                <tr>
                  <th>Размер</th>
                  <th>Обхват груди</th>
                  <th>Обхват талии</th>
                  <th>Обхват бедер</th>
                </tr>
              </thead>
              <tbody>
                <tr>
                  <td>XS</td>
                  <td>82-86</td>
                  <td>60-64</td>
                  <td>86-90</td>
                </tr>
                <tr>
                  <td>S</td>
                  <td>86-90</td>
                  <td>64-68</td>
                  <td>90-94</td>
                </tr>
                <tr>
                  <td>M</td>
                  <td>90-94</td>
                  <td>68-72</td>
                  <td>94-98</td>
                </tr>
                <tr>
                  <td>L</td>
                  <td>94-98</td>
                  <td>72-76</td>
                  <td>98-102</td>
                </tr>
                <tr>
                  <td>XL</td>
                  <td>98-102</td>
                  <td>76-80</td>
                  <td>102-106</td>
                </tr>
              </tbody>
            </table>
          </div>
          
          <div className="measurement-guide">
            <h2>Как правильно снять мерки</h2>
            <div className="measurement-steps">
              <div className="measurement-step">
                <h3>Обхват груди</h3>
                <p>Измерьте обхват в самой выступающей точке груди, лента должна проходить горизонтально вокруг тела.</p>
              </div>
              <div className="measurement-step">
                <h3>Обхват талии</h3>
                <p>Измерьте обхват в самой узкой части талии, обычно на уровне пупка.</p>
              </div>
              <div className="measurement-step">
                <h3>Обхват бедер</h3>
                <p>Измерьте обхват по самым выступающим точкам ягодиц.</p>
              </div>
            </div>
            <div className="measurement-image">
              <img src="/placeholder-image.jpg" alt="Схема измерений" />
            </div>
          </div>
          
          <div className="size-chart-note">
            <h3>Примечание</h3>
            <p>
              Размеры могут незначительно отличаться в зависимости от модели и материала изделия. 
              Если у вас возникли вопросы по подбору размера, пожалуйста, свяжитесь с нашей службой поддержки.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default SizeChartPage;