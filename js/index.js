$('body').prepend('<header>');

$('header').load('./inc.html header > div', head);

let idx = sessionStorage.idx || 5;

function head() {
   /*  console.log(sessionStorage.idx); */

    /* $(this).addClass('aaa'); */
    $('header .menu a').eq(idx).addClass('aaa');


    $('header .menu li').click(function () {

        let idx = $(this).index();

        sessionStorage.idx = idx;
        /*         alert('ddd'); */
        /*         $(this).addClass('aaa'); */
    })

    $('.hd__logo').click(function () {
        idx = 5;
        sessionStorage.idx = idx;
    })
}
