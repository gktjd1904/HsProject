window.onload = function () {
    let el = document.getElementById("title-div");
    el.onclick = sayHello;
}

function sayHello() {
    let ell = document.querySelector('.menu');
    let elll = document.querySelector('.hd__btn div');
    console.log("Hello");
    ell.classList.toggle('active');
    elll.classList.toggle('active');
}