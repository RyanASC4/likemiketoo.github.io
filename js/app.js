$(document).ready(function(){												
   //Navigation Menu Slider
    $('#nav-expander').on('click',function(e){
        e.preventDefault();
        $('body').toggleClass('nav-expanded');
    });
    $('#nav-close').on('click',function(e){
        e.preventDefault();
        $('body').removeClass('nav-expanded');
    });

    // Initialize navgoco with default options
//    $(".main-menu").navgoco({
//        caret: '<span class="caret"></span>',
//        accordion: false,
//        openClass: 'open',
//        save: true,
//        cookie: {
//            name: 'navgoco',
//            expires: false,
//            path: '/'
//        },
//        slide: {
//            duration: 300,
//            easing: 'swing'
//        }
//    });
    
    var $root = $('html, body');
    $('a').click(function() {
        $root.animate({
            scrollTop: $( $.attr(this, 'href') ).offset().top
        }, 900);
        return false;
});

 });
