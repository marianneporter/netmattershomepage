$('.clients-carousel').slick({
        dots: false,
        arrows: false, 
        slidesToShow: 8,
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

const clientCarouselImages = document.querySelectorAll('.clients-carousel-image');

let displayedTooltip = null;

clientCarouselImages.forEach((img) => {
    img.addEventListener('mouseenter', () => {  

        //get reference for tooltip to display
        let tooltipNum = img.dataset.tooltip;   
        tooltipClassName = `tooltip-${tooltipNum}-wrapper`;  
        displayedTooltip = document.querySelector(`.${tooltipClassName}`);  
        
        // calculate center position of image so tooltip can be centered  above it
        let imgRect = img.getBoundingClientRect();     
        let imgCenter = imgRect.left + (imgRect.width / 2 );
    
        // add tooltip active class to selected tooltip and calculate it's left position
        // based on center of selected image.
        displayedTooltip.classList.add('tooltip-active');        
        let tooltipLeft = imgCenter - (displayedTooltip.offsetWidth / 2);
        displayedTooltip.style.left = `${tooltipLeft}px`;     
    });

    img.addEventListener('mouseleave', () => {
   
        displayedTooltip.classList.remove('tooltip-active');

    });


})

// function setUpClientSlickSlider() {
//     if (window.innerWidth > 1500) {
//         $('.clients-carousel').slick({    
//             dots: false,
//             arrows: false, 
//             slidesToShow: 8,
//             slidesToScroll: 1,
//             autoplay: true,
//             autoplaySpeed: 2000,  
//             pauseOnHover: true,          
//             centerPadding: '32px'  
//         });
//         return;
//     }   

//     if (window.innerWidth > 1200) {
//         $('.clients-carousel').slick({    
//             dots: false,
//             arrows: false, 
//             slidesToShow: 6,
//             slidesToScroll: 1,
//             autoplay: true,
//             autoplaySpeed: 2000,  
//             pauseOnHover: true,          
//             centerPadding: '32px'  
//         });
//         return;
//     }  

 
//     if (window.innerWidth > 992) {
//         $('.clients-carousel').slick({    
//             dots: false,
//             arrows: false, 
//             slidesToShow: 4,
//             slidesToScroll: 1,
//             autoplay: true,
//             autoplaySpeed: 2000,  
//             pauseOnHover: true,          
//             centerPadding: '32px'  
//         });
//         return;
//     }     
    
  
//     $('.clients-carousel').slick({    
//         dots: false,
//         arrows: false, 
//         slidesToShow: 1,
//         slidesToScroll: 1,
//         autoplay: true,
//         autoplaySpeed: 2000,  
//         pauseOnHover: true,          
//         centerPadding: '32px'  
//     });
   
// }