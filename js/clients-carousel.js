$('.clients-carousel').slick({
    dots: false,
    arrows: false, 
    slidesToShow: 8,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 2000,  
    pauseOnHover: true           
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

// clientCarouselImages.forEach((img) => {
//     img.addEventListener('mouseenter', () => {
//         console.log('in mmouseenter event');
//         let currentParent = img.parentElement;
//         console.log('getting parent');
//         console.log(currentParent);
//         let parentRect = currentParent.getBoundingClientRect();
//         console.log(parentRect);

//         currentTooltipWrapper = currentParent.querySelector('.tooltip-wrapper');
//       //  let tooltipLeftpx = parentRect.x - 140;
//         let tooltipLeftPos = `${parentRect.x - halfTooltipWidth}px`;
//         console.log('tooltipLeftPos is ' + tooltipLeftPos);

//         currentTooltipWrapper.style.left = tooltipLeftPos;
//      //   console.log(currentTooltipWrapper);
//         currentTooltipWrapper.classList.add('tooltip-active');
//         console.log()
//     });

//     img.addEventListener('mouseleave', () => {
//         console.log('in mouseleave event');
//         currentTooltipWrapper.classList.remove('tooltip-active');
//    //     currentTooltipWrapper = null;

//     });


// })