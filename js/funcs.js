/* jshint esversion: 6 */
let index = 0;
const comments = [
    'Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip',
    'The comments plugin lets people comment on content on your site using their Facebook account. People can choose to share their comment activity with their friends',
    'Copy and paste the URL into the code configurator below. You can adjust settings like the width of your comments plugin or how many posts you want to show by default',
    'This presidential primary campaign is showing not just the American Citizens, but people all over the world of the most corrupt people that we have in government! Such a Shame, in fact, they are all so disgusting and right no',
    'Jeanne i agree with you 100%..I and million of americans bear arms and we will take this country back and get rid of the people that obummer is brin'
]

$(document).ready(()=>{
    $('#comment_container').text(comments[index]);

    var offset = $(window).scrollTop();
    var windowsize = $(window).width();
    if (windowsize<=880) {
        $('#logo-image').attr("src", 'public/logo-white.png');
    }
    if (offset>100) {
        $('nav').addClass('nav-blue');
        $('#logo-image').attr("src", 'public/logo-white.png');
    }

    $(window).scroll((ev)=>{
        var offset = $(window).scrollTop();
        var windowsize = $(window).width();
        if (offset>100) {
            $('nav').addClass('nav-blue');
            $('#logo-image').attr("src", 'public/logo-white.png');
        }else {
            $('nav').removeClass('nav-blue');
            if (windowsize>880) {
                $('#logo-image').attr("src", 'public/logo.png');
            }
        }
    });

    $(window).resize(function() {
        var windowsize = $(window).width();
        if (windowsize>880) {
            $('.nav-item').css('display','inline-block');
            $('#logo-image').attr("src", 'public/logo.png');
        }else {
            $('.nav-item').css('display','none');
            $('#logo-image').attr("src", 'public/logo-white.png');
        }
    });

    $('#logo').click(()=>{
        if ($(window).width()<=880) {
            $('.nav-item').slideToggle('slow');
        }
    });

    $('#show_more').click(()=>{
        for (var i = 0; i < 3; i++) {
            $('#toTheEdge_container').append('<section class="fide-in-items"><img src="public/images/closedEyesImage.png" alt="" /><h2>Closed Eyes</h2><hr>Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut</section>');
        }
    });

    $('#scrow_forword').click((ev)=>{
        ev.preventDefault();
        $(window).scrollTo('#toTheEdge_container',1000);
    });

    $('#next_comment').click((ev)=>{
        ev.preventDefault();
        index++;
        if (index==comments.length) {
            index = 0;
        }
        $('#comment_container').text(comments[index]);

    });

    $('#prev_comment').click((ev)=>{
        ev.preventDefault();
        index--;
        if (index<0) {
            index= comments.length-1;
        }
        $('#comment_container').text(comments[index]);
    });
});
