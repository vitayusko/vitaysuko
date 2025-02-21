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
      e.preventDefault(); // Отменяем стандартный переход по ссылке

      // Удаляем класс "active" у всех кнопок
      buttons.forEach(btn => btn.classList.remove('active'));

      // Добавляем "active" к нажатой кнопке
      this.classList.add('active');
    });
  });
});
