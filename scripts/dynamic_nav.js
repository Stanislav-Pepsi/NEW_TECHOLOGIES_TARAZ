const menuBtns = document.querySelectorAll(".menu-btn");
const menuPanel = document.getElementById("menu-panel");
const menuContent = document.getElementById("menu-panel-content");

// Данные меню
const menuData = {
  service: `
    <div class="menu-columns">
      <div class="line__decor_panel">
        <div class="line__decor_panel-item"></div>
        <div class="line__decor_panel-item"></div>
        <div class="line__decor_panel-item"></div>
        <div class="line__decor_panel-item"></div>
        <div class="line__decor_panel-item"></div>
      </div>
      <div class="column">
          <h3>Сервис</h3>
          <ul>
            <li>Установка</li>
            <li>Обслуживание</li>
            <li>Поддержка 24/7</li>
          </ul>
      </div>
      <div class="column">
          <h3>Гарантия</h3>
          <ul>
            <li>1 год бесплатно</li>
            <li>Расширенная гарантия</li>
          </ul>
      </div>
      <div class="column">
          <img src="service.jpg" alt="Сервис">
      </div>

    </div>
  `,
  production: `
    <div class="menu-columns">
      <div class="column">
        <h3>Производство</h3>
        <ul>
          <li>Системы видеонаблюдения</li>
          <li>Охранные комплексы</li>
          <li>СКУД</li>
        </ul>
      </div>
      <div class="column">
        <h3>Оборудование</h3>
        <ul>
          <li>Серверы</li>
          <li>Станции мониторинга</li>
        </ul>
      </div>
      <div class="column">
        <img src="production.jpg" alt="Производство">
      </div>
    </div>
  `,
  it: `
    <div class="menu-columns">
      <div class="column">
        <h3>IT-решения</h3>
        <ul>
          <li>Автоматизация</li>
          <li>Облачные сервисы</li>
          <li>Поддержка бизнеса</li>
        </ul>
      </div>
      <div class="column">
        <h3>ПО</h3>
        <ul>
          <li>CRM</li>
          <li>ERP</li>
        </ul>
      </div>
      <div class="column">
        <img src="it.jpg" alt="IT">
      </div>
    </div>
  `,
  about: `
    <div class="menu-columns">
      <div class="column">
        <h3>О компании</h3>
        <ul>
          <li>История</li>
          <li>Миссия</li>
          <li>Команда</li>
        </ul>
      </div>
      <div class="column">
        <h3>Почему мы?</h3>
        <ul>
          <li>15 лет опыта</li>
          <li>Более 500 клиентов</li>
        </ul>
      </div>
      <div class="column">
        <img src="about.jpg" alt="О нас">
      </div>
    </div>
  `,
  contacts: `
    <div class="menu-columns">
      <div class="column">
        <h3>Контакты</h3>
        <ul>
          <li>Телефон: +7 700 000 0000</li>
          <li>Email: info@site.kz</li>
        </ul>
      </div>
      <div class="column">
        <h3>Адрес</h3>
        <ul>
          <li>г. Алматы, ул. Абая, 15</li>
        </ul>
      </div>
      <div class="column">
        <img src="map.jpg" alt="Карта">
      </div>
    </div>
  `
};

// Открытие панели
menuBtns.forEach(btn => {
  btn.addEventListener("click", () => {
    const menuKey = btn.getAttribute("data-menu");
    menuContent.innerHTML = menuData[menuKey] || "<p>Нет данных</p>";
    menuPanel.classList.add("active");
  });
});

// Закрытие при клике вне блока
menuPanel.addEventListener("click", (e) => {
  if (!menuContent.contains(e.target)) {
    menuPanel.classList.remove("active");
  }
});
