const mainContent    = document.querySelector('.all-content');
const mobileMenu     = document.querySelector('.mobile-menu');
const menuButton     = document.querySelector('.menu-icon');
const contentOverlay = document.querySelector('.content-overlay');


// menu button has been clicked so main content slides over to reveal mobile menu
menuButton.addEventListener('click', () => {
        mainContent.classList.add('mobile-nav-active');
        mainContent.style.right = "21rem";
        contentOverlay.style.opacity ="0.5";
        contentOverlay.style.zIndex = "10";
 
})

//overlay has been clicked so page slides back over the mobile menu
contentOverlay.addEventListener('click', (e) => {  
    mainContent.style.right="0";
    contentOverlay.style.opacity = "0";
    setTimeout(() => contentOverlay.style.zIndex = "-1", 2000);
})