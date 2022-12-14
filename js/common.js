window.onload = function () {
    let el = document.getElementById("title-div");
    el.onclick = sayHello;
}

function sayHello() {
    let ell = document.querySelector('.menu');
    let elll = document.querySelector('.hd__btn div:first-child');
    ell.classList.toggle('active');
    elll.classList.toggle('active');
}