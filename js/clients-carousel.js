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
        console.log('in mmouseenter event');
        //get reference for tooltip to display
        let tooltipNum = img.dataset.tooltip;   
        tooltipClassName = `tooltip-${tooltipNum}-wrapper`;  
        displayedTooltip = document.querySelector(`.${tooltipClassName}`);  
        
        // get left position of image so tooltip can be displayed above it
        let imgRect = img.getBoundingClientRect();     
        let tooltipLeftPos = `${imgRect.x}px`;
        displayedTooltip.style.left = tooltipLeftPos;



        displayedTooltip.classList.add('tooltip-active');
    });

    img.addEventListener('mouseleave', () => {
      //  console.log('in mouseleave event');
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