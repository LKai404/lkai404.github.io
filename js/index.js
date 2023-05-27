$(window).on('load', () => { 
    $('.load').animate({
        opacity: 0
    }, 500);
    setInterval(() => {
        $('.load').remove();
    }, 500);
})


var play = false;

$('.link li:nth-of-type(3) svg').on('click', (e) => {
    if (!play) {
        $('audio')[0].play();
        $('.link li:nth-of-type(3) svg').css('animation', 'rotate 5s linear infinite');
        play = !play;
    } else {
        $('audio')[0].pause();
        $('.link li:nth-of-type(3) svg').css('animation', 'none');
        play = !play;
    }
})

