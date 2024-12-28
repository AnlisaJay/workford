import React, { useState } from 'react';
import ModalWindow from './ModalWindow';



const Main = () => {
  const [showModal, setShowModal] = useState(false);
  const [totalCost, setTotalCost] = useState(null);

  const handleOpenModal = () => {
    setShowModal(true);
  };

  const handleCloseModal = () => {
    setShowModal(false);
  };

  const handleCalculate = () => {
    const size = parseInt(document.getElementById("size").value);
    const materials = document.getElementById("materials").value;
    const finish = document.getElementById("finish").value;

    if (!size || size <= 0) {
      alert("Пожалуйста, введите корректную площадь.");
      return;
    }

    let baseCost = size * 5000; // Базовая стоимость за 1 м²

    // Учитываем тип материалов
    if (materials === "premium") baseCost *= 1.5;
    if (materials === "luxury") baseCost *= 2;

    // Учитываем отделку
    if (finish === "basicFinish") baseCost *= 1.2;
    if (finish === "fullFinish") baseCost *= 1.5;

    setTotalCost(baseCost);
  };

  return (
    <div>
      <header>
        {/* Логотип */}
        <img src="/images/logo192.png" alt="Логотип" className="logo" />

        <div className="menu">
          <a href="#about">О нас</a>
          <a href="#services">Услуги</a>
          <a href="#contacts">Контакты</a>
          <a href="#reviews">Отзывы</a>
          <a href="#calculator">Калькулятор</a>
        </div>

        <button onClick={handleOpenModal} className="btn">Связаться</button>

        {/* Модальное окно */}
        <ModalWindow show={showModal} onClose={handleCloseModal}>
          <h2 style={{ color: "#4824ff", fontSize: "40px" }}>Контакты</h2>
          <p style={{ fontSize: "22px" }}>
            Вы можете связаться с нами по телефону <br /> 8(800)-999-99-90
          </p>
        </ModalWindow>
      </header>

      <div className="welcome-block">
        <div className="first-block">
          <h1>Строительство домов <span className="title">Свой дом</span></h1>
          <h2 style={{ marginBottom: "7%", marginTop: "7%" }}>
            Архитектура Комфорта<span style={{ color: "#4824ff"}}> <br />
            надежный партнер в сфере</span><br />строительства домов
          </h2>
          <h3>который предлагает полный<br />
          спектр услуг по проектированию <span style={{color: "#4824ff"}}> <br />и возведению жилых объектов</span>
          </h3>
        </div>

        {/* Блок с изображением справа */}
        <div className="image-container">
          <img className="first-image-layer" src="/images/1.png" alt="1" draggable="false"/>
        </div>
      </div>

      <div id="services" className="service-block" draggable="false">
        <h1 style={{ fontSize: "52px" }}>УСЛУГИ</h1>
        <p style={{ fontSize: "27px" }}>Мы предлагаем полный цикл услуг <span style={{color:"#4824ff"}}>по строительству жилых домов</span></p>

        <div style={{ display: "flex" }}>
          <p className="tag"><p className="tag-icon"/> Строительство домов под ключ</p>
          <p className="tag"><p className="tag-icon"/> Проектирование</p>
          <p className="tag"><p className="tag-icon"/> Отделка и ремонт</p>
          <p className="tag"><p className="tag-icon"/> Консультации и поддержка</p>
          <p className="tag"><p className="tag-icon"/> Калькулятор стоимости строительства</p>
        </div>
      </div>

      {/* Блок калькулятора */}
      <div id="calculator" className="calculator-block" style={{ padding: "50px 0", backgroundColor: "#f4f4f4" }}>
        <h2 style={{ fontSize: "40px", color: "#4824ff", textAlign: "center" }}>Калькулятор стоимости строительства</h2>
        
        <div style={{ display: "flex", justifyContent: "center", marginTop: "30px" }}>
          <div style={{ maxWidth: "600px", width: "100%" }}>
            <form>
              <div style={{ marginBottom: "20px" }}>
                <label htmlFor="houseType" style={{ fontSize: "22px", color: "#666" }}>Тип дома:</label>
                <select id="houseType" name="houseType" style={{ width: "100%", padding: "10px", fontSize: "18px", marginTop: "10px" }}>
                  <option value="house">Дом</option>
                  <option value="cottage">Коттедж</option>
                  <option value="villa">Вилла</option>
                </select>
              </div>

              <div style={{ marginBottom: "20px" }}>
                <label htmlFor="size" style={{ fontSize: "22px", color: "#666" }}>Площадь (м²):</label>
                <input type="number" id="size" name="size" placeholder="Введите площадь" style={{ width: "100%", padding: "10px", fontSize: "18px", marginTop: "10px" }} />
              </div>

              <div style={{ marginBottom: "20px" }}>
                <label htmlFor="materials" style={{ fontSize: "22px", color: "#666" }}>Тип материалов:</label>
                <select id="materials" name="materials" style={{ width: "100%", padding: "10px", fontSize: "18px", marginTop: "10px" }}>
                  <option value="standard">Стандартные</option>
                  <option value="premium">Премиум</option>
                  <option value="luxury">Люкс</option>
                </select>
              </div>

              <div style={{ marginBottom: "20px" }}>
                <label htmlFor="finish" style={{ fontSize: "22px", color: "#666" }}>Отделка:</label>
                <select id="finish" name="finish" style={{ width: "100%", padding: "10px", fontSize: "18px", marginTop: "10px" }}>
                  <option value="noFinish">Без отделки</option>
                  <option value="basicFinish">Базовая отделка</option>
                  <option value="fullFinish">Полная отделка</option>
                </select>
              </div>

              <button type="button" onClick={handleCalculate} style={{ padding: "15px 25px", backgroundColor: "#4824ff", color: "#fff", fontSize: "20px", border: "none", cursor: "pointer" }}>
                Рассчитать
              </button>
            </form>
            
            {totalCost && (
              <div style={{ marginTop: "30px", textAlign: "center" }}>
                <h3 style={{ fontSize: "28px", color: "#4824ff" }}>Ориентировочная стоимость:</h3>
                <p style={{ fontSize: "30px", fontWeight: "bold", color: "#4824ff" }}>{totalCost} руб.</p>
              </div>
            )}
          </div>
        </div>
      </div>

      

      {/* Раздел О нас */}
      <section id="about" style={{ padding: "50px 0", backgroundColor: "#f4f4f4" }}>
        <h2 style={{ fontSize: "40px", color: "#4824ff", textAlign: "center" }}>О компании</h2>
        <div style={{ display: "flex", justifyContent: "space-around", marginTop: "30px" }}>
          <div style={{ flex: 1, margin: "0 20px" }}>
            <p style={{ fontSize: "22px", lineHeight: "1.6" }}>
              Архитектура Комфорта — это надежный партнер в сфере строительства домов, который предлагает полный спектр услуг по проектированию и возведению жилых и коммерческих объектов.
              Наша команда состоит из опытных специалистов, которые обладают глубокими знаниями и навыками в области строительства, архитектуры и дизайна.
            </p>
            <p style={{ fontSize: "22px", lineHeight: "1.6" }}>
              С момента своего основания компания зарекомендовала себя как надежный и ответственный подрядчик, ценящий доверие своих клиентов. Мы используем только современные технологии и качественные материалы, что гарантирует долговечность и надежность построенных объектов.
            </p>
          </div>

          {/* Изображение компании */}
          <div style={{ flex: 1 }}>
            <img src="/images/company_image.jpg" alt="Компания" style={{ width: "100%", borderRadius: "10px" }} />
          </div>
        </div>

        <div style={{ marginTop: "50px", textAlign: "center" }}>
          <h3 style={{ fontSize: "35px", color: "#4824ff" }}>История компании</h3>
          <p style={{ fontSize: "22px", lineHeight: "1.6", maxWidth: "800px", margin: "0 auto" }}>
            Основана в 2010 году, компания "Архитектура Комфорта" быстро зарекомендовала себя на рынке строительства благодаря качеству и надежности своих услуг.
            За годы работы компания реализовала множество успешных проектов, включая жилые комплексы, загородные дома и коммерческие объекты.
            В 2015 году компания получила несколько наград за инновации в строительстве и дизайне.
          </p>
        </div>

        <div style={{ marginTop: "50px", textAlign: "center" }}>
          <h3 style={{ fontSize: "35px", color: "#4824ff" }}>Команда</h3>
          <p style={{ fontSize: "22px", lineHeight: "1.6", maxWidth: "800px", margin: "0 auto" }}>
            В команде компании работают высококвалифицированные специалисты, включая архитекторов, инженеров и строителей с многолетним опытом. Компания активно инвестирует в обучение и развитие своих сотрудников, что позволяет поддерживать высокий уровень профессионализма.
          </p>
        </div>
      </section>

      {/* Раздел отзывов */}
      <section id="reviews" style={{ padding: "50px 0", backgroundColor: "#f0f0f0" }}>
        <h2 style={{ fontSize: "40px", color: "#4824ff", textAlign: "center" }}>Отзывы</h2>
        
        <div style={{ marginTop: "30px", display: "flex", justifyContent: "space-around", flexWrap: "wrap" }}>
          {/* Отзыв 1 */}
          <div style={{ width: "300px", margin: "20px", padding: "20px", backgroundColor: "#fff", borderRadius: "10px", boxShadow: "0 4px 10px rgba(0, 0, 0, 0.1)" }}>
            <p style={{ fontSize: "20px", fontStyle: "italic", color: "#666" }}>
              "Мы обратились в Архитектура Комфорта для строительства нашего первого дома, и остались в полном восторге! С самого начала команда проявила высокий уровень профессионализма и внимательности к нашим пожеланиям. Проект был разработан быстро и с учетом всех наших требований. Строительство прошло в срок, а качество работ превзошло наши ожидания. Теперь у нас есть уютный дом, в котором мы счастливо живем. Рекомендуем всем!"
            </p>
            <h4 style={{ fontSize: "22px", color: "#4824ff", marginTop: "20px" }}>Анна и Сергей Петровы</h4>
            <p style={{ fontSize: "18px", color: "#666" }}>Заказчики, индивидуальный проект</p>
          </div>

          {/* Отзыв 2 */}
          <div style={{ width: "300px", margin: "20px", padding: "20px", backgroundColor: "#fff", borderRadius: "10px", boxShadow: "0 4px 10px rgba(0, 0, 0, 0.1)" }}>
            <p style={{ fontSize: "20px", fontStyle: "italic", color: "#666" }}>
              "Хочу выразить благодарность Архитектура Комфорта за отличную работу! Я долго искал надежного подрядчика для строительства дачи, и, наконец, нашел. Команда профессионалов помогла мне на каждом этапе — от проектирования до отделки. Особенно понравился калькулятор стоимости, который позволил заранее понять, какие расходы нас ожидают. Все было сделано качественно и в срок. Обязательно буду рекомендовать вас своим друзьям!"
            </p>
            <h4 style={{ fontSize: "22px", color: "#4824ff", marginTop: "20px" }}>Игорь Сидоров</h4>
            <p style={{ fontSize: "18px", color: "#666" }}>Заказчик, дача</p>
          </div>

          {/* Отзыв 3 */}
          <div style={{ width: "300px", margin: "20px", padding: "20px", backgroundColor: "#fff", borderRadius: "10px", boxShadow: "0 4px 10px rgba(0, 0, 0, 0.1)" }}>
            <p style={{ fontSize: "20px", fontStyle: "italic", color: "#666" }}>
              "С Архитектура Комфорта мы строили дом для нашей семьи. В целом, мы довольны результатом. Работы были выполнены качественно, и команда всегда была на связи, что очень важно. Единственное, что хотелось бы улучшить — это скорость некоторых процессов. Но в целом все было прекрасно. Большое спасибо за вашу работу!"
            </p>
            <h4 style={{ fontSize: "22px", color: "#4824ff", marginTop: "20px" }}>Марина и Алексей Ивановы</h4>
            <p style={{ fontSize: "18px", color: "#666" }}>Заказчики, частный дом</p>
          </div>
          
        </div>
      </section>
      <div id="contacts" className="contacts-block" style={{ padding: "50px 0", backgroundColor: "#f4f4f4" }}>
  <h2 style={{ fontSize: "40px", color: "#4824ff", textAlign: "center" }}>Контакты</h2>

  <div style={{ display: "flex", justifyContent: "center", marginTop: "30px" }}>
    <div style={{ maxWidth: "600px", width: "100%" }}>
      <h3 style={{ fontSize: "28px", color: "#333" }}>Форма обратной связи</h3>
      <form>
        <div style={{ marginBottom: "20px" }}>
          <label htmlFor="name" style={{ fontSize: "22px", color: "#666" }}>Ваше имя:</label>
          <input type="text" id="name" name="name" placeholder="Введите ваше имя" style={{ width: "100%", padding: "10px", fontSize: "18px", marginTop: "10px" }} />
        </div>

        <div style={{ marginBottom: "20px" }}>
          <label htmlFor="email" style={{ fontSize: "22px", color: "#666" }}>Ваш email:</label>
          <input type="email" id="email" name="email" placeholder="Введите ваш email" style={{ width: "100%", padding: "10px", fontSize: "18px", marginTop: "10px" }} />
        </div>

        <div style={{ marginBottom: "20px" }}>
          <label htmlFor="message" style={{ fontSize: "22px", color: "#666" }}>Сообщение:</label>
          <textarea id="message" name="message" placeholder="Введите ваше сообщение" style={{ width: "100%", padding: "10px", fontSize: "18px", marginTop: "10px", height: "150px" }}></textarea>
        </div>

        <button type="submit" style={{ padding: "15px 25px", backgroundColor: "#4824ff", color: "#fff", fontSize: "20px", border: "none", cursor: "pointer" }}>
          Отправить
        </button>
      </form>
    </div>
  </div>

  <div style={{ marginTop: "50px", textAlign: "center" }}>
    <p style={{ fontSize: "20px", color: "#666" }}>
      Телефон: <a href="tel:+78009999990" style={{ color: "#4824ff" }}>8(800) 999-99-90</a><br />
      Email: <a href="mailto:info@company.com" style={{ color: "#4824ff" }}>info@company.com</a><br />
      Адрес: Москва, ул. Примерная, д. 1
    </p>
  </div>
</div>




      <footer style={{ backgroundColor: "#333", color: "#fff", padding: "20px 0", textAlign: "center" }}>
  <div style={{ maxWidth: "1200px", margin: "0 auto", padding: "0 20px" }}>
    <div style={{ marginBottom: "20px" }}>
      <h3 style={{ fontSize: "24px", margin: "0" }}>Контакты</h3>
      <p style={{ fontSize: "18px" }}>Телефон: 8(800)-999-99-90</p>
      <p style={{ fontSize: "18px" }}>Электронная почта: info@stroydom.ru</p>
    </div>

    <div style={{ marginBottom: "20px" }}>
      <h3 style={{ fontSize: "24px", margin: "0" }}>Навигация</h3>
      <div style={{ display: "flex", justifyContent: "center", gap: "40px", marginTop: "10px" }}>
        <a href="#about" style={{ color: "#fff", textDecoration: "none", fontSize: "18px" }}>О нас</a>
        <a href="#services" style={{ color: "#fff", textDecoration: "none", fontSize: "18px" }}>Услуги</a>
        <a href="#contacts" style={{ color: "#fff", textDecoration: "none", fontSize: "18px" }}>Контакты</a>
        <a href="#reviews" style={{ color: "#fff", textDecoration: "none", fontSize: "18px" }}>Отзывы</a>
        <a href="#calculator" style={{ color: "#fff", textDecoration: "none", fontSize: "18px" }}>Калькулятор</a>
      </div>
    </div>

    <div style={{ marginBottom: "20px" }}>
      <h3 style={{ fontSize: "24px", margin: "0" }}>Социальные сети</h3>
      <div style={{ display: "flex", justifyContent: "center", gap: "20px", marginTop: "10px" }}>
        <a href="https://facebook.com" target="_blank" rel="noopener noreferrer" style={{ color: "#fff", fontSize: "20px" }}>Facebook</a>
        <a href="https://twitter.com" target="_blank" rel="noopener noreferrer" style={{ color: "#fff", fontSize: "20px" }}>Twitter</a>
        <a href="https://instagram.com" target="_blank" rel="noopener noreferrer" style={{ color: "#fff", fontSize: "20px" }}>Instagram</a>
      </div>
    </div>

    <p style={{ fontSize: "16px", marginTop: "20px" }}>© 2024 Строительство домов. Все права защищены.</p>
  </div>
</footer>

    </div>
    
    
  );
};

export default Main;
