document.addEventListener('DOMContentLoaded', function () {

  console.log(`
  •	вёрстка валидная +10
  •	вёрстка семантическая +20
  •	для оформления СV используются css-стили +10
  •	вёрстка адаптивная: ни на одном из разрешений экрана до 320px включительно не появляется горизонтальная полоса прокрутки, при этом всё содержание страницы сохраняется +10
  •	есть адаптивное бургер-меню. Ссылки в пунктах меню ведут на основные разделы CV. При кликах по пунктам меню реализована плавная прокрутка по якорям. При уменьшении ширины экрана меню становится адаптивным. Внешний вид адаптивного меню можно скопировать с макета музея +10
  •	на странице СV присутствует изображение - фото или аватарка автора CV, пропорции изображения не искажены, у изображения есть атрибут alt (может быть пустым) +10
  •	контакты для связи и перечень навыков оформлены в виде списка ul > li +10
  •	CV содержит контакты для связи, краткую информацию о себе, перечень навыков, информацию об образовании и уровне английского +10
  •	CV содержит пример вашего кода (например, решение задачи с сайта codewars) с подсветкой кода. Для подсветки кода может использоваться js-библиотека, например, highlight.js +10
  •	CV содержит изображения-ссылки на выполненные вами проекты. При клике по изображению страница проекта открывается в новой вкладке. У каждого проекта есть название, небольшое описание, указан перечень используемых технологий. +10
  •	CV выполнено на английском языке +10
  •	выполнены требования к Pull Request
  •	дизайн, оформление, качество выполнения CV не ниже чем в примерах CV, приведённых в материалах к заданию (это дополнительные 10 баллов, поэтому некоторый субъективизм в оценке может присутствовать) +10
  ИТОГО: 150
`);

  const skills = document.querySelectorAll('.skills__item');
  const a = 60; //сторона квадрата с иконкой

  for (let skill of skills) {

    for (let i = 0; i < 10; i++) {
      let circle = document.createElement('div');
      circle.classList.add('circle');
      skill.appendChild(circle);
      circle.style.transform = `translate(${a*Math.sin(Math.PI*(i+1)/5)+42}px, ${-a*Math.cos(Math.PI*(i+1)/5)+40}px)`;
    }
  }

  function fillCircle(numSkill, numSircle) {
    let oneCircle = skills[numSkill].querySelectorAll('.circle');
    for (let i = 0; i < numSircle; i++) {
      oneCircle[i].classList.add('fill');
    }
  }

  fillCircle(0, 7); //html
  fillCircle(1, 7); //css
  fillCircle(2, 4); //js
  fillCircle(3, 7); //vs code
  fillCircle(4, 6); //git
  fillCircle(5, 5); //bootstrap
  fillCircle(6, 6); //photoshop
  fillCircle(7, 6); //figma
  fillCircle(8, 4); //gulp
  fillCircle(9, 5); //sass

  const sendv = document.querySelector('.sendvich');
  const navItems = document.querySelector('.nav__items');
  sendv.onclick = function () {
    navItems.classList.toggle('nav__show');
  };
});