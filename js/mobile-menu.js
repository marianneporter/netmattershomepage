const mainContent    = document.querySelector('.all-content');
const mobileMenu     = document.querySelector('.mobile-menu');
const menuButton     = document.querySelector('.menu-icon');
const contentOverlay = document.querySelector('.content-overlay');


menuButton.addEventListener('click', () => {
    console.log('menu button clicked');
    if (mainContent.classList.contains('mobile-nav-active')) {
        mainContent.classList.remove('mobile-nav-active');
        contentOverlay.classList.add('content-overlay-active');
    } else {
        mainContent.classList.add('mobile-nav-active');
        contentOverlay.classList.add('content-overlay-active');
    }
})



