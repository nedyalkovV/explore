/* jshint esversion: 6 */

$(document).ready(()=>{
    var offset = $(window).scrollTop();
    if (offset>100) {
        $('nav').addClass('nav-blue');
    }

    $(window).scroll((ev)=>{
        var offset = $(window).scrollTop();
        if (offset>100) {
            $('nav').addClass('nav-blue');
        }else {
            $('nav').removeClass('nav-blue');
        }
    });

    $(window).resize(function() {
        var windowsize = $(window).width();
        if (windowsize>880) {
            $('.nav-item').css('display','inline-block');
        }else {
            $('.nav-item').css('display','none');
        }
    });

    $('#logo').click(()=>{
        if ($(window).width()<=880) {
            $('.nav-item').slideToggle('slow');
        }
    });

    $('#show_more').click(()=>{
        for (var i = 0; i < 3; i++) {
            $('#toTheEdge_container').append('<section><img src="public/images/closedEyesImage.png" alt="" /><h2>Closed Eyes</h2><hr>Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut</section>');
        }
    });
});
