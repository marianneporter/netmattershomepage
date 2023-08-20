const headerGroup = document.querySelector('.header-group');
const header      = document.querySelector('.header');
const overlay     = document.querySelector('.overlay');
const body        = document.querySelector('body');

// store current scroll position  as last scroll position so you can
// keep track of whether user is scrolling up or down
let lastScrollY = window.scrollY;
let stickyNavActive = false;

window.addEventListener("scroll", () => {

    
    
    /*****************************************************************/
    /* test scroll direction and initiate sticky header if this is   */
    /* down                                                          */
    /*****************************************************************/

    //going up
    if (lastScrollY > window.scrollY) { 
   

        if (!stickyNavActive) {
        
            headerGroup.style.opacity = "0";
            headerGroup.style.position = "fixed";
           
            headerGroup.style.left=0;
            headerGroup.style.right=0;
            console.log('setting header style top to -20');
            headerGroup.style.top="-20rem";

     
            setTimeout(()=> {
                headerGroup.style.opacity="1";
                headerGroup.style.top = "0";
            }, 300);

         
            headerGroup.style.zIndex = 999;   
            stickyNavActive = true;  
        }   
    }   

    //at the  top
    if (window.scrollY === 0 ) {
        headerGroup.style.position = "static";  
        stickyNavActive = false;
    }

    if (window.scrollY > lastScrollY) {
        stickyNavActive = false;
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
    //    disableScroll();
       
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
  //      enableScroll();    
        let currentHeaderDropdown 
                   = e.target.querySelector('.main-nav-lg-dropdown');
        currentHeaderDropdown.style.top = "-40rem";
        currentHeaderDropdown.style.zIndex = "-1";  
        body.style.position = "static";  

    });
})



  