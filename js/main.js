window.addEventListener('DOMContentLoaded', function () {



    /* scroll event section */
    container.addListener((e) => {

        let scrollTop = container.scrollTop;
        $('.posNum').html(scrollTop)


        

        if( scrollTop >= 1000){

        }


        if(scrollTop >= 800){
            $('#section02').addClass('on');
        }

        if(scrollTop >= 2615){
            $('.fold').addClass('on');
        }

        if(scrollTop >= 2620){
            $('#section03').addClass('on');
        }


        if(scrollTop >= 4300){
            $('#section04').addClass('on');
        }


        if(scrollTop >= 8680){
            $('#section06').addClass('on');
        }






    });

    $('#section01').addClass('on');

    $('#section03 .click_button').click(function () {

        $('.fold').toggleClass('on');
    });

    /*  slide,click event section */





    var swiper = new Swiper('.drag_img_left', {
        slidesPerView: 2.8,
        centeredSlides: false,
        spaceBetween: 0,
        grabCursor: false,
        slidesOffsetBefore: 0,
        slidesOffsetAfter: 0,
        scrollbar: {
            el: '#section03 .drag_bar .long',
            draggable: true,
        },

    });

/*
    var swiper2 = new Swiper('.drag_img_left', {
        slidesPerView: 1.8,
        centeredSlides: false,
        spaceBetween: 0,
        grabCursor: false,
        slidesOffsetBefore: 0,
        slidesOffsetAfter: 0,
        scrollbar: {
            el: '#section03 .drag_bar .long',
            draggable: true,
        },

    });*/


    var swiper2 = new Swiper('.left_05', {
        slidesPerView: 1,
        centeredSlides: false,
        spaceBetween: 90,
        grabCursor: false,
        slidesOffsetBefore: 86,
        slidesOffsetAfter: 0,
        scrollbar: {
            el: '#section05 .auto_bar .long_2',
            draggable: true,
        },

    })




})


