
fetch('./data.json')
    .then(function (res) { return res.json() })
    .then(function (gallery) {
        /*         console.log(gallery.data); */
        init(gallery.data)
    });

num = 0;

function init(data) {
    const elGallery = document.querySelector('.gallery div');

    data.forEach(function (v) {
        elGallery.innerHTML += `<img src=${v.url}>`;
    });

    const img = document.querySelectorAll('.img');
    const pop = document.querySelector('.popup')

    img.forEach(function (btn, key) {
        btn.onclick = function () {
            num =key;
            pop.classList.add('action');
            dataChange(key);
            console.log(num);
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
                                <img src="${data[n].url}">
                                <figcaption> ${data[n].detail} </figcaption>
                            </figure>`;
    }



}