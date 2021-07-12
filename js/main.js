document.addEventListener('DOMContentLoaded', function () {
   let ps = document.querySelectorAll('.levels_up');

   function changeSkillsRate() {
      let style_ = document.head.appendChild(document.createElement('style'));

      for (let p of ps) {
         p.classList.add('skills__levels_up');
      }

      style_.innerHTML = "._HTML::before {animation: HTML-up 1s linear forwards;} ._CSS::before {animation: HTML-up 1s linear forwards;} ._JS::before {animation: JS-up 1s linear forwards;}";
   }
   function backSkillsRate() {
      const newStyle = document.querySelector('style');
      document.head.removeChild(newStyle);

      for (let p of ps) {
         p.classList.remove('skills__levels_up');
      }
   }
   
   let toggle_ = false;
   const checkbox = document.querySelector('.skills__input');
   checkbox.onclick = () => {
      toggle_ = !toggle_;
      if(toggle_) {changeSkillsRate();}
      else {backSkillsRate();}
   };
});