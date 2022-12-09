/* fetch('./data.xml')
.then(function(res) {
    return res.text();
})
.then(function(data) {
    console.log(data);
}) */

$.ajax({
    url: './data.xml',
    beforeSend: function () {
        console.log('준비')
    },
    complete: function () {
        console.log('완료')
    },
    error: function () {
        console.log('데이럴실패')
    },
    success: function (data) {
        console.log('데이터 성공')
        /* $(data).find('item').eq(0).find('detail').text() */
        /*         let url = $(data).find('url').eq(0).html()
                let title = $(data).find('title').eq(0).text()
                let detail = $(data).find('detail').eq(0).text()
                        //eq() == nth() 같은 느낌
        
                console.log(detail);
                console.log(url);
                console.log(title);
            } */
        let tag = '', url, title;

        $(data).find('item').each(function (key, value) {

            url = $(value).find('url').text();
            title = $(value).find('title').text();


            tag += `<figure>
                <img src=${url}>
                <figcaption> ${title} </figcaption>    
            </figure>`;

            //const gal = document.querySelector('.gallery > div');
            //gal.innerHTML = tag;

        });

        $('.gallery > div').html(tag);



        $('.gallery figure').click(function () {
            let key = $(this).index();
            let detail = $(data).find('item').eq(key).find('detail').html()

            console.log(key);
            alert(detail);
        });

        /* 
        append = 앞에서 뒤로
        prepend = 뒤에서 앞으로
        */

    }
});

//$('선택자').method();
//$('.about:nth-of-type(2)');
//$('.about > div')

