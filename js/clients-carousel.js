$('.clients-carousel').slick({
    dots: false,
    arrows: false, 
    slidesToShow: 7,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 2000,  
    pauseOnHover: true           
});



const clientCarouselImages = document.querySelectorAll('.clients-carousel-image');
const halfTooltipWidth = 140; 
let displayedTooltip = null;

clientCarouselImages.forEach((img) => {
    img.addEventListener('mouseenter', () => {
        console.log('in mmouseenter event');
        let tooltipNum = img.dataset.tooltip;
        console.log(tooltipNum);
        tooltipClassName = `tooltip-${tooltipNum}-wrapper`;
        console.log(tooltipClassName);
        displayedTooltip = document.querySelector(`.${tooltipClassName}`);
        displayedTooltip.classList.add('tooltip-active');
        console.log(displayedTooltip);
      
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