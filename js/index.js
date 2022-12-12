$('body').prepend('<header>');

$('header').load('./inc.html header > div', head);

function head() {
    $('header a').click(function () {
        alert('명령');
    })
}