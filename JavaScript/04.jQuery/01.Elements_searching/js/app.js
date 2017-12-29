$(function(){

    // exercise 1

    var lis = $('section.main').find('li');
    lis.addClass('borderClass');

    $('.showMore').eq(0).css('color', 'red');

    // exercise 2

    lis.addClass('colorText');
    lis.addClass('backgroundElement');

    lis.fadeOut('slow').fadeIn('slow');
    
    // exercise 3

    var links = $('.menu').find('a');
    //links.css('color', 'red'); // dziala

    links.addClass('redLinks');
    //links.eq(0).css('font-size', '40px');
    links.eq(0).addClass('biggerFont');

    // exercise 4

    var h1 = $('H1');
    var check = ($('H1').hasClass('creepyHeader'));
    if(check == false) {
        h1.addClass('creepyHeader');
    }
    if(check == false) {
        console.log('Naglowek ma już taką klasę');
    }
});
