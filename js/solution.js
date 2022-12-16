

const a = document.querySelectorAll('.scroll');

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

