// header active link

document.addEventListener('DOMContentLoaded', function () {
  const links = document.querySelectorAll('.header-li a');

  links.forEach(link => {
    link.addEventListener('click', function () {
      // Убираем "active" у всех ссылок
      links.forEach(l => l.classList.remove('active'));
      // Добавляем "active" к нажатой ссылке
      this.classList.add('active');
    });
  });
});

// hero btn
document.addEventListener('DOMContentLoaded', function () {
  const buttons = document.querySelectorAll('.hero-btn');

  buttons.forEach(button => {
    button.addEventListener('click', function (e) {
      e.preventDefault();

      buttons.forEach(btn => btn.classList.remove('active'));

      this.classList.add('active');
    });
  });
});

// services Splide

import Splide from '@splidejs/splide';
import '@splidejs/splide/css';

document.addEventListener('DOMContentLoaded', function () {
  var splide = new Splide('.splide', {
    perPage: 3, // Показывать 3 элемента на странице
    focus: 0,
    omitEnd: true,
  });

  splide.mount();

  // Подключаем кастомные стрелки
  document.querySelector('.custom-arrow-prev').addEventListener('click', () => {
    splide.go('<'); // Переключение назад
  });

  document.querySelector('.custom-arrow-next').addEventListener('click', () => {
    splide.go('>'); // Переключение вперед
  });
});
