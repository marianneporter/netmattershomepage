const mobileMenu     = document.querySelector('.mobile-menu');
const hamburgerMenuButton = document.querySelector('.hamburger-menu-button');
const contentOverlay = document.getElementById('content-overlay');

// menu button has been clicked so main content slides over to reveal mobile menu
hamburgerMenuButton.addEventListener('click', () => {   
        mobileMenu.style.display = "block"; 

        if (window.innerWidth < 350) {
            mainContent.style.right = "13rem";
        } else if (window.innerWidth < 480) {
            mainContent.style.right = "17.5rem";
        } else {
            mainContent.style.right = "21rem";
        }       
     
        addContentOverlay();
        
//********** */        contentOverlay.classList.add('content-overlay');
        // contentOverlay.style.opacity ="0.6";
        // contentOverlay.style.zIndex = "10";  
        
        hamburgerMenuButton.classList.add("hamburger-menu-expanded");
})

//contentOverlay has been clicked so page slides back over the mobile menu
contentOverlay.addEventListener('click', (e) => {  
    
    mainContent.style.right = "0";

    removeContentOverlay();

    hamburgerMenuButton.classList.remove("hamburger-menu-expanded");
    
    // transition main content to the right and opacity of content 
    // overlay to zero via properties in the scss
 //  mainContent.style.right = "0";  
 //   contentOverlay.style.opacity = "0";
 //   setTimeout(() => {   
        //reset style of main content and opacity of overlay 
        // after the CSS transitions have taken place        
     //   contentOverlay.style.zIndex = "-1";
 //********** */       contentOverlay.classList.remove("content-overlay");  
 //       mobileMenu.style.display = "none";          
  //  } , 500);  
});



function addContentOverlay() {
    // get top and bottom values for where you want absolute position overlay to go
    console.log('in add content overlay');
    let mainContentScrollInfo = currentScroll();    
    let bottomScrollValue = mainContentScrollInfo.scrollTop + window.innerHeight;
    let bottomScrollPX = bottomScrollValue + "px";
    contentOverlay.style.display = "block";
    contentOverlay.style.position = "fixed";
    contentOverlay.style.top = "0";
    contentOverlay.style.bottom = "0";
    contentOverlay.style.right = "23rem";
    contentOverlay.style.left = "0";
    contentOverlay.style.opacity = "0.5";
    contentOverlay.style.backgroundColor = "cyan";    
    console.log(contentOverlay);
}

function removeContentOverlay() {
    contentOverlay.style.position = "fixed";
    contentOverlay.style.top = "0";
    contentOverlay.style.bottom = "0";
    contentOverlay.style.right = "23rem";
    contentOverlay.style.left = "0";
    contentOverlay.style.opacity = "0";
    contentOverlay.style.backgroundColor = "cyan";    
    contentOverlay.style.display = "none";
}

