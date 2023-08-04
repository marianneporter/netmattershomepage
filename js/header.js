const headerGroup = document.querySelector('.header-group');
const header      = document.querySelector('.header');
const overlay     = document.querySelector('.overlay');
const body        = document.querySelector('body');

// store currebt scroll position as as last scroll position so you can
// keep track of whether user is scrolling up or down
let lastScrollY = window.scrollY;

window.addEventListener("scroll", () => {
    
    /*****************************************************************/
    /* test scroll direction and initiate sticky header if this is   */
    /* down                                                          */
    /*****************************************************************/
    if (lastScrollY > window.scrollY) { 
        
        headerGroup.style.position = "fixed";
        headerGroup.style.left=0;
        headerGroup.style.right=0;
        headerGroup.style.top=window.screenTop; 
        headerGroup.style.zIndex = 999;     
    }

    if (window.scrollY === 0) {
        headerGroup.style.position = "static";
        headerGroup.style.maxHeight ="none";
        headerGroup.style.overflowY = "visible";
    }

    lastScrollY = window.scrollY;
})


/*****************************************************************/
/*   add event listeners to items of main nav to enable display  */
/*   of sticky menu and to control the dropdown menu             */
/*************************************************************** */

const navItems = document.querySelectorAll('.main-nav-item');


navItems.forEach(el => {

    el.addEventListener("mouseenter", (e) => {   
        // display dropdown nav and prevent scrolling while dropdown nav is displayed
        disableScroll();
       
        let currentHeaderDropdown = 
                        e.target.querySelector('.main-nav-lg-dropdown');

                
        let currArrow = e.target.querySelector('.arrow');
       
        currentHeaderDropdown.style.top = "13.1rem";
        currentHeaderDropdown.style.zIndex = "1";    
        
        let currentRect = e.target.getBoundingClientRect();
    
        currArrow.style.top = "0";
        currArrow.style.left = `${currentRect.x}px`;   
        currArrow.style.zIndex = "2";      
    });

    el.addEventListener("mouseleave", (e) => {     
       // hide dropdown nav and re-enable scrolling
        enableScroll();    
        let currentHeaderDropdown 
                   = e.target.querySelector('.main-nav-lg-dropdown');
        currentHeaderDropdown.style.top = "-40rem";
        currentHeaderDropdown.style.zIndex = "-1";  
        body.style.position = "static";  

    });
})



  