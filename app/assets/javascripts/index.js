$(document).ready( function() {
    
    /* Check width on page load*/
    if ( $(window).width() < 768) {
     $('nav').addClass('navbar-default navbar-fixed-top');
     $('nav').removeClass('navbar-custom');
    }else{
        /*If browser resized, check width again */
         $(window).resize(function() {
            if ($(window).width() < 768) {
            $('nav').addClass('navbar-default navbar-fixed-top');
            $('nav').removeClass('navbar-custom');
            }
            else {
                $('nav').removeClass('navbar-default');
                 $('nav').addClass('navbar-custom');
                }
        }); 
    }
        // Adds class when user scrolls down
        $(window).scroll(function() {    
                var scroll = $(window).scrollTop();
                if (scroll > 480) {
                    $('nav').addClass('navbar-default');  
                }
                else if (scroll<480 && $(window).width() > 768){
                    $('nav').removeClass('navbar-default');
                }});   
                // var MQL = 1170;
                // if ($(window).width() > MQL) {
                var headerHeight = $('.navbar-custom').height();
                $(window).on('scroll', {
                previousTop: 0
                },
                function() {
                var currentTop = $(window).scrollTop();
                //check if user is scrolling up
                if (currentTop < this.previousTop) {
                    //if scrolling up...
                    if (currentTop > 0 && $('.navbar-custom').hasClass('is-fixed')) {
                        $('.navbar-custom').addClass('is-visible');
                    } else {
                        $('.navbar-custom').removeClass('is-visible is-fixed');
                    }
                } else {
                    //if scrolling down...
                    $('.navbar-custom').removeClass('is-visible');
                    if (currentTop > headerHeight && !$('.navbar-custom').hasClass('is-fixed')) $('.navbar-custom').addClass('is-fixed');
                }
                this.previousTop = currentTop;
                })
                // };
                // $(document).on('click','.navbar-collapse.in',function(e) {
                //     if( $(e.target).is('a') && $(e.target).attr('class') != 'dropdown-toggle' ) {
                //         $(this).collapse('hide');
                //     }
                //     });
                    $("body").click(function(event) {
                        $(".navbar-collapse").collapse('hide');
                    });
                    
});

 
 