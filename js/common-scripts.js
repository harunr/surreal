(function ($) {
    $(function () {

        // Phone nav click function
        // Phone nav click function
        $('.phone-nav').click(function () {
            $("body").toggleClass('nav-shown');
            $('.nav-wrap').fadeToggle();
        });


        //15-09-2021//
  
        $('.drop-down').each(function () {
            var $$this = $(this);
            $$this.find('> a').click(function (e) {
                e.preventDefault();
                $('.mega-menu').slideToggle();
                $$this.toggleClass('drop-down-active')
                
            })
        })
        
        $(window).on('scroll', function(){
            if($('.mega-menu:visible').length){
                $('.mega-menu').slideUp();
                $('.drop-down').removeClass('drop-down-active')
            }
        })
        
        //15-09-2021//



if($(window).width() < 769){
    $('.ingredients-accordion').click(function(){
        var Width = $(this).width()
        $(this).css({'width': Width})

    })
}

        
        $('.radio-item').click(function(){
            $(this).parent('.flavour-item-inner').toggleClass(' active ');
            $(this).parent('.flavour-item-inner').siblings().removeClass(' active '); 
            $('.flavour-item-accordion').stop().slideUp();
            $('.active .flavour-item-accordion').stop().slideDown();
                return false;
            
          
            });
        
        /*Initialize Headroom*/
        var header = new Headroom(document.querySelector("header"), {
            tolerance: 0,
            offset: 80,
            classes: {
                initial: "headroom",
                pinned: "slideDown",
                unpinned: "slideUp"
            }
        });
        header.init();


        if ($('.info-slider').length) {
            var infoSlider = $('.info-slider');
            
            $('.info-slider').slick({
                speed: 12000,
                autoplay: true,
                autoplaySpeed: 0,
                centerMode: true,
                cssEase: 'linear',
                slidesToShow: 1,
                slidesToScroll: 1,
                variableWidth: true,
                infinite: true,
                initialSlide: 1,
                arrows: false,
                buttons: false,
                
                useTransform: true,
                slidesToScroll: -1,
                responsive: [
                    {
                        breakpoint:992,
                        settings: {
                            speed: 8000,
                        }
                    }

                ]
            });

            $(window).on('resize', function () {
                $('.info-slider').slick('resize');
            });
        }

        var mac = 0;
        if (navigator.userAgent.indexOf('Mac') > 0) {
            mac = 1;
        } else {
            mac = 0;
        }

        if (1 == mac) {
            $('body').addClass('mac-os');
        } else {
            $("body").addClass('win-os');
        }


        if($(window).width() > 480){
            
            if ($('.variety-pack-item-wrap').length) {
                $('.variety-pack-item-wrap').slick({
                    arrows: true,
                    infinite: true,
                    autoplay: false,
                    navigation: false,
                    slidesToShow: 4,
                    slidesToScroll: 1,
                    dots: false,
                    centerMode: false,
                    focusOnSelect: true,
                    responsive: [
                        {
                            breakpoint: 1025,
                            settings: {
                                slidesToShow: 3,
                                slidesToScroll: 1,
                                swipe: true,
                            }
                        },
                        {
                            breakpoint: 992,
                            settings: {
                                slidesToShow: 2,
                                slidesToScroll: 1,
                                swipe: true,
                            }
                        },
                        {
                            breakpoint: 767,

                            settings: {
                                slidesToShow: 1,
                                slidesToScroll: 1,
                                swipe: true,
                                dots: true,
                            }
                        }


                    ]
                    
                });
                $(window).on('resize', function () {
                    $('.variety-pack-item-wrap').slick('resize');

                });
            }                                                                 
            
        }
        
        
        if($(window).width() < 481){
            if($('.variety-pack-item-wrap').length){
                window._ = new Glider(document.querySelector('.variety-pack-item-wrap'), {
                    slidesToShow: 1.2, //'auto',
                    slidesToScroll: 1,
                    itemWidth: 150,
                    draggable: true,
                    scrollLock: false,
                    dots: true,
                    rewind: true,
                    arrows: false,
                    dots: '.dots',

                    responsive: [
                        {
                            breakpoint: 800,
                            settings: {
                                slidesToScroll: 'auto',
                                itemWidth: 300,
                                slidesToShow: 'auto',
                                exactWidth: true
                            }
                        },
                        {
                            breakpoint: 600,
                            settings: {
                                slidesToScroll: 4,
                                slidesToShow: 4
                            }
                        }
                    ]
                });     
            }
           
           
        }
    
        
        

        if ($('.review-item-wrap').length) {
            /*Dot Progress Slider*/
            $(".review-item-wrap").slick({
                infinite: true,
                arrows: false,
                dots: false,
                autoplay: false,
                speed: 800,
                slidesToShow: 1,
                slidesToScroll: 1,
                fade: true,
            });

            //ticking machine
            var percentTime;
            var tick;
            var time = .1;
            var progressBarIndex = 0;

            $('.progressBarContainer .progressBar').each(function (index) {
                var progress = "<div class='inProgress inProgress" + index + "'></div>";
                $(this).html(progress);
            });

            function startProgressbar() {
                resetProgressbar();
                percentTime = 0;
                tick = setInterval(interval, 10);
            }

            function interval() {
                if (($('.review-item-wrap .slick-track div[data-slick-index="' + progressBarIndex + '"]').attr("aria-hidden")) === "true") {
                    progressBarIndex = $('.review-item-wrap .slick-track div[aria-hidden="false"]').data("slickIndex");
                    startProgressbar();
                } else {
                    percentTime += 1 / (time + 5);
                    $('.inProgress' + progressBarIndex).css({
                        width: percentTime + "%"
                    });
                    if (percentTime >= 100) {
                        $('.review-item-wrap').slick('slickNext');
                        progressBarIndex++;
                        if (progressBarIndex > 2) {
                            progressBarIndex = 0;
                        }
                        startProgressbar();
                    }
                }
            }

            function resetProgressbar() {
                $('.inProgress').css({
                    width: 0 + '%'
                });
                clearInterval(tick);
            }
            startProgressbar();
            // End ticking machine

            $('.item').click(function () {
                clearInterval(tick);
                var goToThisIndex = $(this).find("span").data("slickIndex");
                $('.review-item-wrap').slick('slickGoTo', goToThisIndex, false);
                startProgressbar();
            });
            /*Dot Progress Slider*/
        }

        if ($('.instragram-item-wrap').length) {
            $('.instragram-item-wrap').slick({
                arrows: false,
                infinite: true,
                autoplay: false,
                navigation: false,
                slidesToShow: 2,
                slidesToScroll: 1,
                dots: false,
                centerMode: false,
                focusOnSelect: true,
                fade: false,
                responsive: [
                    {
                        breakpoint: 992,
                        settings: {
                            slidesToShow: 1,
                            slidesToScroll: 1,
                            swipe: true,
                        }
                    },
                    {
                        breakpoint: 769,
                        settings: {
                            slidesToShow: 2,
                            slidesToScroll: 1,
                            swipe: true,
                        }
                    },

                ]

            });
            $(window).on('resize', function () {
                $('.instragram-item-wrap').slick('resize');

            });
        }


        // cart
        $('.cart').click(function () {
            $("body").addClass('cart-shown');
        });
        $('.cart a').click(function (e) {
            e.preventDefault();

        });
        $('.bag-cross').click(function () {
            $("body").removeClass('cart-shown');
        });

        $('.login').click(function () {
            $("body").toggleClass('login-shown');
            $('.login-account-wrap').fadeToggle();
        });





        // This function for scroll animation

        var $animation_elements = $('.animated-element');
        var $window = $(window);

        function check_if_in_view() {
            var window_height = $window.height();
            var window_top_position = $window.scrollTop();
            var window_bottom_position = (window_top_position + window_height);

            $.each($animation_elements, function () {
                var $element = $(this);
                var element_height = $element.outerHeight();
                var element_top_position = $element.offset().top;
                var element_bottom_position = (element_top_position + element_height);

                //check to see if this current container is within viewport
                if (element_top_position <= window_bottom_position) {
                    $element.addClass('in-view');
                } else {
                    $element.removeClass('in-view');
                }
            });
        }

        $window.on('scroll resize', check_if_in_view);
        $window.trigger('scroll');








        // Add smooth scrolling to all links
        $(".dibi-btn a, .right-content a").on('click', function (event) {
            if (this.hash !== "") {
                event.preventDefault();
                var hash = this.hash;
                $('html, body').animate({
                    scrollTop: $(hash).offset().top
                }, 800, function () {
                    window.location.hash = hash;
                });
            } // End if
        });


        if ($(window).width() > 1024) {

            $(".ingredients-accordion").each(function () {
                var $this = $(this);
                $this.on("mouseenter", function () {
                    $(".ingredients-accordion").removeClass("slideActive")
                    $(".ingredients-accordion-content").slideUp();
                    if ($this.find(".ingredients-accordion-content:visible").length) {
                        $(".ingredients-accordion").removeClass("slideActive")
                        $(".ingredients-accordion-content").slideUp();
                    } else {
                        $this.addClass("slideActive")
                        $(".ingredients-accordion-content").slideUp();
                        $this.find(".ingredients-accordion-content").slideDown();
                    }
                })
            })

            $('.ingredients-accordion').on('mouseleave', function () {

                $(".ingredients-accordion").removeClass("slideActive")



                $(".ingredients-accordion-content").slideUp();
            })

        }


        if ($(window).width() < 1025) {
            $(".ingredients-accordion").each(function () {
                var $this = $(this);
                $this.on("click", function () {
                    $(".ingredients-accordion").removeClass("slideActive")
                    $(".ingredients-accordion-content").slideUp();
                    if ($this.find(".ingredients-accordion-content:visible").length) {
                        $(".ingredients-accordion").removeClass("slideActive")
                        $(".ingredients-accordion-content").slideUp();
                    } else {
                        $this.addClass("slideActive")
                        $(".ingredients-accordion-content").slideUp();
                        $this.find(".ingredients-accordion-content").slideDown();
                    }
                })
            })
            
            $('.ingredients-accordion-content').click(function(e){
                
                e.stopPropagation()
                
                
            })

        }


        var $_width = $('.ingredients-accordion-heading').eq(4).outerWidth();
        console.log($_width)

        $('.ingredients-accordion-content').eq(4).css({
            'width': $_width
        })

        
      /*  $('.ingredients-accordion').each(function(i){
            var $$this = $(this),
                $$thisLength = $('.ingredients-accordion').length,
                ItemWidth = $$this.outerWidth(i)
            
            console.log($$thisLength)
            
        })*/

       
    
        
        
      
         



        /*Product Variety start*/

        $(".product-accordion-item").each(function () {
            var $this = $(this);
            $this.find(" .product-accordion-item-inner").on("click touch", function () {
                $(".product-accordion-item").removeClass("product-accordion-active")
                $(".accordion-content").slideUp();
                if ($this.find(".accordion-content:visible").length) {
                    $(".product-accordion-item").removeClass("product-accordion-active")
                    $(".accordion-content").slideUp();
                } else {
                    $this.addClass("product-accordion-active")
                    $(".accordion-content").slideUp();
                    $this.find(".accordion-content").slideDown();
                }
            })
        });

        // More Bowl Slider

        if ($('.more-bowl-item-wrap').length) {
            $('.more-bowl-item-wrap').slick({
                slidesToShow: 1,
                slidesToScroll: 1,
                mobileFirst: true,
                dots: false,
                arrows: true,
                infinite: false,
                responsive: [

                    {
                        breakpoint: 557,
                        settings: {
                            slidesToShow: 2,
                        }
                },
                    {
                        breakpoint: 768,
                        settings: 'unslick'
                }

            ]
            })

            $(window).on('resize', function () {
                $('.more-bowl-item-wrap').slick('resize');
            });
        };


        if ($("select.styled-select").length) {
            $("select.styled-select").selectric({

            });
        }


        $('.variety-tab-triger ul li').click(function () {
            $('.variety-tab-triger ul li').removeClass('active');
            $(this).addClass('active');
            $('.variety-thumb-item-wrap .variety-thumb-item').hide();

            var activeTab = $(this).find('a').attr('href');
            $(activeTab).fadeIn();
            return false;
        });


        // $(".faq-accordion-item").each(function(){
        //     var $this = $(this);
        //     $this.find(" > h2").on("click touch", function(){
        //         $(".faq-accordion-item").removeClass("faq-accordion-active")
        //         $(".faq-accordion-item-content").slideUp();
        //         if($this.find(".faq-accordion-item-content:visible").length){
        //             $(".faq-accordion-item").removeClass("faq-accordion-active")
        //             $(".faq-accordion-item-content").slideUp();
        //         }
        //         else{
        //             $this.addClass("faq-accordion-active")
        //             $(".faq-accordion-item-content").slideUp();
        //             $this.find(" > .faq-accordion-item-content").slideDown();
        //         }
        //     })
        // })

        $('.faq-accordion-item').each(function (i) {
            var $_this = $(this)
            $_this.on("touch mouseenter", function () {
                $('.faq-accordion-item').removeClass('faq-accordion-active')
                $(".faq-accordion-item-content").slideUp();
                $_this.find(".faq-accordion-item-content").slideDown();

            });
            $_this.on("touch mouseleave", function () {
                $(".faq-accordion-item-content").slideUp();

            });

        });
        /*Product Variety end*/

        $('.radio-item').eq(1).addClass('active')
        $('.radio-item').each(function () {
            var $this = $(this);
            $this.click(function () {
                $('.radio-item').removeClass('active')
                $this.addClass('active')
            })
        })
        $('.flavour-item').each(function () {
            var $$this = $(this),
                showText = $('.flavour-select-wrap em');
            $('.flavour-select-wrap em').click(function () {
                $('.flavour-select-wrap ul').slideDown();
            })
            $('.flavour-select-wrap ul li').click(function () {
                var valueText = $(this).text()
                $('.flavour-select-wrap ul').slideUp();
                showText.text(valueText)
            })
        })




    })

    /*area map*/
    if ($('map').length) {
        $('img[usemap]').rwdImageMaps();
    }

    $('.round-hover-area-thumb-inner-wrap area').each(function (i) {
        var $_this = $(this)
        $_this.on("touch mouseenter", function () {
            $('.hovered-thumb').removeClass('graph-hovered');
            $('.hovered-thumb').eq(i).addClass('graph-hovered');
            $('.round-hover-default').addClass('hovered-thumb-hide')

        });
        $_this.on("touch mouseleave", function () {
            $('.hovered-thumb').removeClass('graph-hovered');
            $('.round-hover-default').removeClass('hovered-thumb-hide');
        });

    });




    if($(window).width() < 991){
        if($('.surreal-products-item-info').length){
        window._ = new Glider(document.querySelector('.surreal-products-item-info'), {
            slidesToShow: 2, //'auto',
            slidesToScroll: 1,
            itemWidth: 150,
            draggable: true,
            scrollLock: false,
            dots: true,
            rewind: true,
            arrows: false,
            dots: '#dots',
            
            responsive: [
                {
                    breakpoint: 800,
                    settings: {
                        slidesToScroll: 'auto',
                        itemWidth: 300,
                        slidesToShow: 'auto',
                        exactWidth: true
                    }
                },
                {
                    breakpoint: 600,
                    settings: {
                        slidesToScroll: 4,
                        slidesToShow: 4
                    }
                }
            ]
        });
        }
    }





    
    if ($('.variety-pack-content').length) {
        var infoSlider = $('.variety-pack-content');

        infoSlider.slick({
            speed: 12000,
            autoplay: true,
            autoplaySpeed: 0,
            centerMode: true,
            cssEase: 'linear',
            slidesToShow: 1,
            slidesToScroll: 1,
            variableWidth: true,
            infinite: true,
            initialSlide: 1,
            arrows: false,
            buttons: false,

            useTransform: true,
            slidesToScroll: -1,
            responsive: [
                {
                    breakpoint:992,
                    settings: {
                        speed: 8000,
                    }
                }

            ]
            
            
        });

        $(window).on('resize', function () {
            $('.variety-pack-content').slick('resize');
        });
    }

    if ($('.variety-thumb-item-wrap').length) {
        $('.variety-thumb-item-wrap').slick({
            slidesToShow: 1,
            slidesToScroll: 1,
            dots: true,
            arrows: false,
            infinite: false,
            fade: true,
            responsive: [
                {
                    breakpoint: 557,
                    settings: {
                        slidesToShow: 1,
                    }
                }

            ]
        })

        $(window).on('resize', function () {
            $('.variety-thumb-item-wrap').slick('resize');
        });
    };

    
    
    if ($('.section-scroll').length) {
        $('.faq-tab-triger ul li a').bind('click', function (e) {
            e.preventDefault();
            var target = $(this).attr("href");
            $('html, body').stop().animate({
                scrollTop: $(target).offset().top
            }, 600, function () {
                location.hash = target;
            });
            return false;
        });
        $(window).scroll(function () {
            var scrollDistance = $(window).scrollTop() + 50;
            $('.section-scroll').each(function (i) {
                if ($(this).position().top <= scrollDistance) {
                    $('.faq-tab-triger ul li a.nav-active').removeClass('nav-active');
                    $('.faq-tab-triger ul li a').eq(i).addClass('nav-active');
                }
            });
        }).scroll();
    }
    
    
    // Swiper Configuration
/*
   
*/


})(jQuery)


function increaseCount(e, el) {
    var input = el.previousElementSibling;
    var value = parseInt(input.value, 10);
    value = isNaN(value) ? 0 : value;
    value++;
    input.value = value;
}

function decreaseCount(e, el) {
    var input = el.nextElementSibling;
    var value = parseInt(input.value, 10);
    if (value > 1) {
        value = isNaN(value) ? 0  : value;
        value--;
        input.value = value;
    }
}

// Start Product

const minus = $('.quantity__minus');
const plus = $('.quantity__plus');
const input = $('.quantity__input');
minus.click(function (e) {
    e.preventDefault();
    var value = input.val();
    if (value > 1) {
        value--;
    }
    input.val(value);
});

plus.click(function (e) {
    e.preventDefault();
    var value = input.val();
    value++;
    input.val(value);
})
