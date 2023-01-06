let menuBtn = document.querySelector('.menu-btn');
let menu = document.querySelector('.menu');

menuBtn.addEventListener('click', function(){
    menuBtn.classList.toggle('active');
    menu.classList.toggle('active');
})
//Bar-menu
let list_active = document.querySelector('.menu').querySelectorAll('a')

list_active.forEach(element =>{
    element.addEventListener('click',function (){
        list_active.forEach(nav=>nav.classList.remove('active'))
        this.classList.add('active');
        menu.classList.remove('active')
        menuBtn.classList.remove('active')
    })
})

const body = document.body;
const shadow = document.querySelector(".shadow-off");
const btnOn = document.querySelector(".menu-btn");

function ofScroll() {
  body.classList.toggle("off_scroll");
}
function onShadow() {
  shadow.classList.toggle("shadow-on");
}

btnOn.addEventListener("click", () => {
  ofScroll();
  onShadow();
});
