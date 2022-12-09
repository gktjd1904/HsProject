
fetch('./data.json')
    .then(function (res) { return res.json() })
    .then(function (gallery) {
        /*         console.log(gallery.data); */
        init(gallery.data)
    });



function init(data) {
    const elGallery = document.querySelector('.gallery div');

    data.forEach(function (v) {
        elGallery.innerHTML += `<img src=${v.url}>`;
    });

    const aaa = document.querySelectorAll('.img img');
    const pop = document.querySelector('.popup')

    aaa.forEach(function (btn, key) {
        btn.onclick = function () {
            pop.classList.add('action');
            dataChange(key);
            num = key;
            console.log(key);
        }
    })

    pop.onclick = function (e) {
        if (e.target.classList.contains('popup'))
            pop.classList.remove('action');
    }



    function dataChange(n) {
        const popcon = document.querySelector('.popup article');
        popcon.innerHTML = `<h2>${data[n].title}</h2>
                            <figure>
                                <img src=${data[n].url}>
                                <figcaption> ${data[n].detail} </figcaption>
                            </figure>`
    }

    const btn = document.querySelectorAll('.popup button');

    num = 0;
    btn.forEach(function (b, k) {
        b.onclick = function () {
            console.log(num)
            if (k == 0 && num > 0) {
                num--;
            } else if (k == 1 && num < 9) {
                num++;
            } else if (num == 9) {
                alert('마지막 사진입니다.');
            } else if (num == 0) {
                alert('첫번째 사진입니다.');
            }
            dataChange(num);
        }
    })
}