window.addEventListener('DOMContentLoaded', function () {



    /* scroll event section */
    container.addListener((e) => {

        let scrollTop = container.scrollTop;
        $('.posNum').html(scrollTop)


        if(scrollTop >= 380){
            $('#section02').addClass('on');
        }


        if(scrollTop >= 2145){
            $('#section04').addClass('on');
        }

        if(scrollTop >= 6100){
            $('#section06').addClass('on');
        }






    });
    $('#section01').addClass('on');


    $("#section03 .left").slick({
        dots: false, //navigation
        arrows: true, //arrow
        prevArrow: $('.prev'), //prev
        nextArrow: $('.next'), //next
        autoplay:true, // autoplay mode
        autoplaySpeed: 2300, // auto speed
        pauseOnHover:false, // pause on mouse hover
        fade: false, //fade mode only one slider
        speed: 1300, // speed
        infinite: true, // infinite mode
        // asNavFor: '.slider2', // another slider
        centerMode: false, // center move
        centerPadding: '0%', // center move padding
        slidesToShow: 1, // show slider number
        slidesToScroll: 1, // next slider number
        swipe: true, // swiper
        focusOnSelect: true, // click to slider
        draggable:true,
        vertical: false, // vertical slider
        verticalSwiping: false, // vertical swiper
        initialSlide:0,// slider number
        cssEase: 'cubic-bezier(0.7, 0, 0.3, 1)', //css transition∑
        variableWidth: false,

    });




    $("#section03 .center").slick({
        dots: false, //navigation
        arrows: true, //arrow
        prevArrow: $('.prev'), //prev
        nextArrow: $('.next'), //next
        autoplay:true, // autoplay mode
        autoplaySpeed: 2300, // auto speed
        pauseOnHover:false, // pause on mouse hover
        fade: false, //fade mode only one slider
        speed: 1300, // speed
        infinite: true, // infinite mode
        // asNavFor: '.slider2', // another slider
        centerMode: false, // center move
        centerPadding: '0%', // center move padding
        slidesToShow: 1, // show slider number
        slidesToScroll: 1, // next slider number
        swipe: true, // swiper
        focusOnSelect: true, // click to slider
        draggable:true,
        vertical: false, // vertical slider
        verticalSwiping: false, // vertical swiper
        initialSlide:0,// slider number
        cssEase: 'cubic-bezier(0.7, 0, 0.3, 1)', //css transition∑
        variableWidth: false,

    });




    $("#section03 .right").slick({
        dots: false, //navigation
        arrows: true, //arrow
        prevArrow: $('.prev'), //prev
        nextArrow: $('.next'), //next
        autoplay:true, // autoplay mode
        autoplaySpeed: 2300, // auto speed
        pauseOnHover:false, // pause on mouse hover
        fade: false, //fade mode only one slider
        speed: 1300, // speed
        infinite: true, // infinite mode
        // asNavFor: '.slider2', // another slider
        centerMode: false, // center move
        centerPadding: '0%', // center move padding
        slidesToShow: 1, // show slider number
        slidesToScroll: 1, // next slider number
        swipe: true, // swiper
        focusOnSelect: true, // click to slider
        draggable:true,
        vertical: false, // vertical slider
        verticalSwiping: false, // vertical swiper
        initialSlide:0,// slider number
        cssEase: 'cubic-bezier(0.7, 0, 0.3, 1)', //css transition∑
        variableWidth: false,

    });






})


