


const ani1 = document.querySelectorAll('.cont01');

window.addEventListener('scroll', function () {

    if (window.pageYOffset > 100) {
        console.log('aaa');
        ani1.classList.add('aniup');
    }
})