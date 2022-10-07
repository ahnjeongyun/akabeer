$('.center').slick({
    autoplay: true,
    centerMode: true,
    centerPadding: '60px',
    slidesToShow: 5,
    draggable : true, 
    responsive: [
    {
    breakpoint: 1319,
        settings: {
            arrows: false,
            centerMode: true,
            centerPadding: '40px',
            slidesToShow: 1
        }
    },
        {
        breakpoint: 699,
        settings: {
            arrows: false,
            centerMode: false,
            centerPadding: '0px',
            slidesToShow: 1
        }
}
    ]
});