// Page Banner
$('.article-carousel').slick({
    slidesToShow: 1,
    slidesToScroll: 1,
    prevArrow: '<button class="slide-arrow prev-arrow"></button>',
    nextArrow: '<button class="slide-arrow next-arrow"></button>',
    autoplay: true,
    autoplaySpeed: 2000,
    mobileFirst: true,
    responsive: [
        {
            breakpoint: 768,
            settings: {
                slidesToShow: 2
            }
        },
        {
            breakpoint: 992,
            settings: {
                slidesToShow: 3
            }
        }
    ]
});