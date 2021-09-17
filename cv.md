## **Dmitry Krylsky**
![foto](https://avatars.githubusercontent.com/u/79040401?s=400&u=cd5389a2187a9cccc3fa7c5f7ca46db837a08c1a&v=4)
### Contacts for communication

* **Phone:** +7 985 248-14-18
* **Email:** krdvmail@mail.ru
* **VK:** id446183970
* **GitHub:** DmitryKr2021 
## Briefly About Myself 
My objective is to become a *demanded specialist in the front-end*. I set myself the task of mastering HTML, CSS, JS, as well as a number of technologies (Git, assemblers, preprocessors, frameworks, etc.) that allow to create modern effective sites, develop user interfaces, and in the future – to solve more complex and interesting tasks in the field of web development.

My work experience is 2 years, starting with self-study from level zero. During this time, I have mastered HTML and CSS in a volume sufficient for the layout of sites of medium complexity, as well as JS for solving simple tasks related to working with the DOM tree, servicing online stores, and animation.
My strengths include a *high level of motivation, interest in mastering new technologies, and fast learning ability.*
## Skills and Proficiency:
* HTML5, CSS3
* JavaScript Basics
* BEM
* Git, GitHub
* VS Code
* Adobe Photoshop, Figma
* Bootstrap, Gulp, SASS – initial level.
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

My experience is in the layout of adaptive sites based on PSD and Fig templates, adding functionality to them via JS.

### My projects

* **Pizza**. Description is [here](https://github.com/DmitryKr2021/Pizza). Direct link is [here](https://DmitryKr2021.github.io/Pizza/index.html)
* **Property**. Description is [here](https://github.com/DmitryKr2021/Property). Direct link is [here](https://DmitryKr2021.github.io/Property/index.html)
* **JS-clock**. Description is [here](https://github.com/DmitryKr2021/JS-Clock/tree/main). Direct link is [here](https://DmitryKr2021.github.io/JS-Clock/index.html)
* **Castom-video-player**. Description is [here](https://github.com/DmitryKr2021/Castom-video-player/tree/main). Direct link is [here](https://DmitryKr2021.github.io/Castom-video-player/index.html)

In addition, one site - [Otdih na Volge](http://otdih-na-volge.ru/) - I created it entirely from zero.


## Education 
### Higher education. 
* Voronezh State University, chemical department.

### Education in frontend. 
*  HTML, CSS and JS courses from [Mikhail Rusakov](https://srs.myrusakov.ru/list).
* Self-education, searching for information from various sources, analyzing master classes, copying other people's sites, etc.
* RSschool 2021Q3 «JavaScript/Front-end. Stage#0»

## English
intermediate
