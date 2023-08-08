//const mainContent    = document.querySelector('.all-content');
const mobileMenu     = document.querySelector('.mobile-menu');

const hamburgerMenuButton = document.querySelector('.hamburger-menu-button');

const contentOverlay = document.querySelector('.content-overlay');
console.log(contentOverlay);


// menu button has been clicked so main content slides over to reveal mobile menu
hamburgerMenuButton.addEventListener('click', () => {       
        mainContent.style.right = "21rem";
        mainContent.style.position = "fixed";

        contentOverlay.classList.add('content-overlay');
        contentOverlay.style.opacity ="0.6";
        contentOverlay.style.zIndex = "10";  
        
        hamburgerMenuButton.classList.add("hamburger-menu-expanded");
})

//contentOverlay has been clicked so page slides back over the mobile menu
contentOverlay.addEventListener('click', (e) => {  
    console.log('content overlay clicked');
    mainContent.style.right = "1rem";

    hamburgerMenuButton.classList.remove("hamburger-menu-expanded");
    setTimeout(() => {    

        mainContent.style.right = "0";
        
        mainContent.style.position ="relative";        
    } , 2000);  

    contentOverlay.style.opacity = "0";
    setTimeout(() => {
        contentOverlay.style.zIndex = "-1";
        contentOverlay.classList.remove("content-overlay")
    }
    , 2000);

});

