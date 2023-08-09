const mobileMenu     = document.querySelector('.mobile-menu');

const hamburgerMenuButton = document.querySelector('.hamburger-menu-button');

const contentOverlay = document.querySelector('.content-overlay');

// menu button has been clicked so main content slides over to reveal mobile menu
hamburgerMenuButton.addEventListener('click', () => {   
        if (window.innerWidth < 350) {
            mainContent.style.right = "13rem";
        } else if (window.innerWidth < 480) {
            mainContent.style.right = "17.5rem";
        } else {
            mainContent.style.right = "21rem";
        }

       
     
        mainContent.style.position = "fixed";

        mainContent.style.overflowY = "scroll";
        mobileMenu.style.overFlowY = "scroll";
        disableScrolling(mainContent);

        contentOverlay.classList.add('content-overlay');
        contentOverlay.style.opacity ="0.6";
        contentOverlay.style.zIndex = "10";  
        
        hamburgerMenuButton.classList.add("hamburger-menu-expanded");
})

//contentOverlay has been clicked so page slides back over the mobile menu
contentOverlay.addEventListener('click', (e) => {  
    
    mainContent.style.right = "0";

    hamburgerMenuButton.classList.remove("hamburger-menu-expanded");
  
    mobileMenu.style.overFlowY = "hidden";
    mainContent.style.overflowY = "auto";
    enableScrolling(mainContent);

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

