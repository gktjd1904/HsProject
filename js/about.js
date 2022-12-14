



const a = document.querySelectorAll('.about02__text p');


console.log(a);



window.addEventListener('scroll', function () {
    //console.log(window.pageYOffset)

    if (window.pageYOffset > 900 && window.pageYOffset < 1000) {
        console.log('a');
        a[0].classList.add('aaaa');
    } else if (window.pageYOffset > 1000 && this.window.pageYOffset < 1100) {
        console.log('b');
        a[1].classList.add('aaaa');
    } else if (this.window.pageYOffset > 1100) {
        a[2].classList.add('aaaa');
    }


}) 
