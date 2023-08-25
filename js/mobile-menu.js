

// menu button has been clicked so main content slides over to reveal mobile menu
hamburgerMenuButton.addEventListener('click', () => {   
        console.log('hamburger event fired');
        mobileMenu.style.display = "block"; 

        if (window.innerWidth < 350) {
            mainContent.style.right = "13rem";
            headerGroup.style.left = "-13rem";
            headerGroup.style.right = "13rem";
        } else if (window.innerWidth < 480) {
            mainContent.style.right = "17.5rem";
            headerGroup.style.left = "-17.5rem";
            headerGroup.style.right = "17.5rem";
        } else {
            mainContent.style.right = "21rem";
            headerGroup.style.left = "-21rem";
            headerGroup.style.right = "21rem";
        }       
     
        addContentOverlay();
        
        hamburgerMenuButton.classList.add("hamburger-menu-expanded");
})

//contentOverlay has been clicked so page slides back over the mobile menu
contentOverlay.addEventListener('click', (e) => {   
    console.log('content overlay clicked!');   
    mainContent.style.right = "0";
    headerGroup.style.left = "0";
    headerGroup.style.right = "0";
    removeContentOverlay();
    hamburgerMenuButton.classList.remove("hamburger-menu-expanded");
});

function addContentOverlay() {  
    contentOverlay.style.display = "block";  
  
    setTimeout(() => {
        contentOverlay.style.opacity = "0.6";   
    }, 100);    
}

function removeContentOverlay() {
    contentOverlay.style.opacity = "0";  
    contentOverlay.style.display = "none";
}