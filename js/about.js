



const a = document.querySelectorAll('.scroll');
const aa = document.querySelectorAll('.sss');
const ccc = document.querySelectorAll('.ddd');
let strPosition = ['fixed', 'absolute', 'relative', 'stickey'];
let activeArray = [];
let s;

a.forEach(function (el, key) {
    let pos = 0;
    let parent = el.parentElement;
    for (; parent != null && parent.tagName != 'BODY'; parent = parent.parentElement) {
        let str = getComputedStyle(parent).getPropertyValue('position');
        if (strPosition.includes(str)) {
            pos = parent.offsetTop;

        }
    }
    pos += el.offsetTop;
    activeArray.push(pos);
})


window.addEventListener('scroll', function () {

    a.forEach(function (p, k) {
        if (activeArray[k] - window.innerHeight * 0.5 < window.pageYOffset) {
            a[k].classList.add('aaaa');
        }
    })

    aa.forEach(function (p, k) {
        if (activeArray[k] - window.innerHeight * 0.1 < window.pageYOffset) {
            aa[k].classList.add('aaa');
        }
    })

    clearTimeout(s);
    s = setTimeout(function () {
        ccc.forEach(function (p, k) {
            //settimeout
            if (activeArray[k] - window.innerHeight * 0.1 < window.pageYOffset) {
                ccc[k].classList.add('aaa');
            }
        })
    }, 150)


    const rightSlideT = document.querySelectorAll('.rt');
    const rightSlideB = document.querySelectorAll('.rb');


    rightSlideT.forEach(function (val, key) {
        if (activeArray[key] - window.innerHeight * 0.1 < window.pageYOffset) {
            rightSlideT[key].classList.add('rightSlide')
        }
    })



    rightSlideB.forEach(function (val, key) {
        if (activeArray[key] - window.innerHeight * 0.1 < window.pageYOffset) {
            rightSlideB[key].classList.add('rightSlide')
        }
    })



}) 
