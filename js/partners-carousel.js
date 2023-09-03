$('.partners-carousel').slick({
    dots: false,
    arrows: false, 
    slidesToShow: 7,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 2500,  
    pauseOnHover: true,          
    centerPadding: '32px', 
    responsive: [
        {
            breakpoint: 1800,
            settings: {
                slidesToShow: 6,
                slidesToScroll: 1,            
            }
        },
        {
            breakpoint: 1600,
            settings: {
                slidesToShow: 5,
                slidesToScroll: 1,            
            }
        },    
        {
            breakpoint: 1300,
            settings: {
                slidesToShow: 4,
                slidesToScroll: 1,
                
            }
        },    
        {
            breakpoint: 1000,
            settings: {
                slidesToShow: 3,
                slidesToScroll: 1,
            
            }
        },
        {
            breakpoint: 768,
            settings: {
                slidesToShow: 2,
                slidesToScroll: 1,
            
            }
        },
        {
            breakpoint: 480,
            settings: {
                slidesToShow: 1,
                slidesToScroll: 1,
            
            }
        },
    ]
});
