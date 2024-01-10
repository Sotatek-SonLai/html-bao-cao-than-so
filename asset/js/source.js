
// slide giải mã, đỉnh cao cuộc đời, dự báo thời vận
const $sliderMobileOnly = $(".slider-mobile-only");
$sliderMobileOnly.slick({
    slidesToShow: 1,
    slidesToScroll: 1,
    mobileFirst: true,
    dots: false,
    prevArrow: '<button class="slick-prev slick-arrow" aria-label="Previous" type="button" style=""><img src="asset/images/icon/arrow-left.svg" alt=""></button>',
    nextArrow: '<button class="slick-next slick-arrow" aria-label="Next" type="button" style=""><img src="asset/images/icon/arrow-right.svg" alt=""></button>',
    responsive: [
        {
            breakpoint: 768,
            settings: 'unslick'
        }
    ]
})
    .init(function() {
        var currentSlide = $sliderMobileOnly.slick('getSlick').getCurrent()
        var slideCount = $sliderMobileOnly.slick("getSlick").getDotCount()
        $sliderMobileOnly.append('<div class="slick-counter">'+ parseInt(currentSlide + 1, 10) +' / '+ (Number(slideCount) + 1) +'</div>')
    })

$sliderMobileOnly.on("afterChange", function(){
    var currentSlide = $sliderMobileOnly.slick('getSlick').getCurrent()
    var slideCount = $sliderMobileOnly.slick("getSlick").getDotCount()
    $sliderMobileOnly.find('.slick-counter').html(currentSlide + 1 +' / '+ (Number(slideCount) + 1));
});




// slide feedback
$('#slide-feedback').slick({
    centerMode: true,
    centerPadding: '60px',
    slidesToShow: 3,
    dots: true,
    responsive: [
        {
            breakpoint: 900,
            settings: {
                arrows: false,
                centerMode: true,
                centerPadding: '40px',
                slidesToShow: 3
            }
        },
        {
            breakpoint: 480,
            settings: {
                arrows: false,
                centerMode: true,
                centerPadding: '40px',
                slidesToShow: 1
            }
        }
    ]
});




// slide blog
$('.slide-blog').slick({
    centerPadding: '60px',
    slidesToShow: 1,
    dots: true
});


// scroll to top
$(window).scroll(function () {
    if ($(this).scrollTop() > 50) {
        $('#back-to-top').fadeIn();
    } else {
        $('#back-to-top').fadeOut();
    }
});
// scroll body to 0px on click
$('#back-to-top').click(function () {
    $('body,html').animate({
        scrollTop: 0
    }, 400);
    return false;
});

