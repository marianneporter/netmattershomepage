const clientsCarouselItems = document.querySelectorAll('.clients-carousel-item');


 clientsCarouselItems.forEach(item => {
     let tooltipWrapper = item.querySelector('.tooltip-wrapper');
     item.addEventListener('mouseenter', () => {
         console.log('mouse entered');
         tooltipWrapper.classList.add('tooltip-active');
     });
     item.addEventListener('mouseleave', () => {
         console.log('mouse left');
         tooltipWrapper.classList.remove('tooltip-active');
     })
})