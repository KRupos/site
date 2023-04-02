$(document).ready(function() {
    $('.header_menu_btm').click(function(){
        $('.header_burger, .header_menu, .header_menu_btm').toggleClass('active');
    });


    $('.close').click(function(){
    $('.header_burger, .header_menu, .header_menu_btm').removeClass('active');
    });

    $('a[href^="#"]').click(function () {
        $('.header_burger, .header_menu, .header_menu_btm').removeClass('active');
    });

    $('a[href^="#"]').click(function () {
        //Сохраняем значение атрибута href в переменной:
        var target = $(this).attr('href');
        $('html, body').animate({
            scrollTop: $(target).offset().top-0
        }, 500);
        return false;
    });

});