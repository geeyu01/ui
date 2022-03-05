window.addEventListener('DOMContentLoaded', function () {



    /* scroll event section */
    container.addListener((e) => {

        let scrollTop = container.scrollTop;
        $('.posNum').html(scrollTop)


        if(scrollTop >= 800){
            $('#section02').addClass('on');
        }

        if(scrollTop >= 1900){
            $('#section03').addClass('on');
        }







    });


    $('#section01').addClass('on');




})