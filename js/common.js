

const MENU = document.querySelector(".menu");
const MENUBTN = document.querySelector(".hd__btn");
const BTN1 = document.querySelector(".hd__btn div:first-child");
const BTN2 = document.querySelector(".hd__btn div:last-child");

MENUBTN.addEventListener('click', function () {
    MENU.classList.toggle('sss');
    BTN1.classList.toggle('active');
    BTN2.classList.toggle('active');
})

console.log(BTN1)
console.log(BTN2)

