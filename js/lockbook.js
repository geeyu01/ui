window.addEventListener('DOMContentLoaded', function () {



    /* scroll event section */
    container.addListener((e) => {

        let scrollTop = container.scrollTop;
        $('.posNum').html(scrollTop)

        if(scrollTop >= 2){
            $('#section01').addClass('on');
        }

        if(scrollTop >= 800){
            $('#section02').addClass('on');
        }

        if(scrollTop >= 3850){
            $('#section03').addClass('on');
        }

        if(scrollTop >= 5800){
            $('#section04').addClass('on');
        }

        if(scrollTop >= 7000){
            $('#section05').addClass('on');
        }







    });


    $('#section01').addClass('on');



    $('.plus').click(function () {

        $(this).find('.circle').fadeToggle();

    });




})


