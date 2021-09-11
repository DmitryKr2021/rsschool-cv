## **Dmitry Krylsky**
![foto](https://avatars.githubusercontent.com/u/79040401?s=400&u=cd5389a2187a9cccc3fa7c5f7ca46db837a08c1a&v=4)
### Contacts for communication
<a href="mailto:krdvmail@mail.ru">![Send a message](https://github.com/DmitryKr2021/rsschool-cv/blob/gh-pages/mail.png)</a>
<a href="https://vk.com/id446183970">![Send a message](https://github.com/DmitryKr2021/rsschool-cv/blob/gh-pages/VK.png)</a>
<a href="tel:+7(985)2481418">![Call me](https://github.com/DmitryKr2021/rsschool-cv/blob/gh-pages/phone.png)</a>
<a href="tel:+7(985)2481418">+7&nbsp;(985)&nbsp;248-14-18</a>
## Brief information about myself 
My objective is to become a *demanded specialist in the front-end*. I set myself the task of mastering HTML, CSS, JS, as well as a number of technologies (Git, assemblers, preprocessors, frameworks, etc.) that allow to create modern effective sites, develop user interfaces, and in the future – to solve more complex and interesting tasks in the field of web development.

My work experience is 2 years, starting with self-study from level zero. During this time, I have mastered HTML and CSS in a volume sufficient for the layout of sites of medium complexity, as well as JS for solving simple tasks related to working with the DOM tree, servicing online stores, and animation.
My strengths include a *high level of motivation, interest in mastering new technologies, and fast learning ability.*
## Skills:
* HTML and CSS, middle level;
* JS, junior level;
* BEM, Git, middle level;
* Bootstrap,  Gulp, SASS – initial level.
## Code examples 
```
document.addEventListener('DOMContentLoaded', function () {

   //Показ меню
   const sendv = document.querySelector('.sendvich');
   const nav_ = document.querySelector('.header__nav');
   sendv.onclick = function () {
      nav_.classList.toggle('header__none');
      nav_.classList.toggle('header__nav_media');
   };
   //Скрытие меню при нажатии
   const items = document.querySelectorAll('.header__item');
   const menuBtn = document.querySelector('.menu-btn');
   for (let item of items) {
      item.onclick = function () {
         nav_.classList.toggle('header__none');
         nav_.classList.toggle('header__nav_media');
         menuBtn.checked = false;
      };
   }

   //Работа с карточками пиццы
   function pizzaNew(name, nameRus, size, price) {
      this.name = name;
      this.nameRus = nameRus;
      this.size = size;
      this.price = price;
   }

   const salyamy = new pizzaNew('salyamy', 'Салями', [35, 30, 25], [850, 800, 750]);
   const hit = new pizzaNew('hit', 'Хит', [35, 30, 25], [850, 800, 750]);
   const ham_mushrooms = new pizzaNew('ham_mushrooms', 'Ветчина-грибы', [35, 30, 25], [850, 800, 750]);
   const carbonara = new pizzaNew('carbonara', 'Карбонара', [35, 30, 25], [1250, 1100, 1000]);
   const firm = new pizzaNew('firm', 'Фирменная', [35, 30, 25], [950, 900, 850]);
   const assorty = new pizzaNew('assorty', 'Ассорти', [35, 30, 25], [850, 800, 750]);
   const L01 = new pizzaNew('L01', 'Л-01', [35, 30, 25], [920, 880, 800]);
   const three_cheese = new pizzaNew('three_cheese', 'Три сыра', [35, 30, 25], [990, 900, 850]);
   const meat = new pizzaNew('meat', 'Мясная', [35, 30, 25], [950, 800, 850]);

   const pizzaObjects = [salyamy, hit, ham_mushrooms, carbonara, firm, assorty, L01, three_cheese, meat]; //массив объектов-карточек пицц

   const pizzaNames = []; //массив англоимен пицц
   for (let i = 0; i < pizzaObjects.length; i++) {
      pizzaNames.push(pizzaObjects[i].name);
   }
   const cards = document.querySelectorAll('.menu__cards');
   let all = 0; //общее количество заказанных пицц
```
## Work experience.

My experience is in the layout of adaptive sites based on PSD and Fig templates, adding functionality to them via JS, for examples - [GreenMile](https://github.com/DmitryKr2021/GreenMile); [Pizza](https://github.com/DmitryKr2021/Pizza) 

In addition, one site - [Otdih na Volge](http://otdih-na-volge.ru/) - I created it entirely from zero.


## Education 
### Higher education. 
* Voronezh State University, chemical department.
### Education in frontend. 
* Initially, there were courses HTML, CSS, JS by [Mikhail Rusakov](https://srs.myrusakov.ru/list), but mainly self-education, searching for information from various sources, analyzing master classes, copying other people's sites, etc.

## English
intermediate
