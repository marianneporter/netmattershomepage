// Calculate amount of right padding needed when header switches to fixed positioning
// when it becomes sticky

let headerPaddingRight  = window.getComputedStyle(headerGroup, null)
                                .getPropertyValue('padding-right');
let paddingRightNumeric = parseInt(headerPaddingRight);
let mcScrollbarWidth    = mainContent.offsetWidth - mainContent.clientWidth;
let paddingRightForFixedPosHeader = `${paddingRightNumeric + mcScrollbarWidth}px`;


// store current scroll position  as last scroll position so you can
// keep track of whether user is scrolling up or down
let lastScrollTop = mainContent.scrollTop;
let stickyNavActive = false;

mainContent.addEventListener("scroll", () => {    
    
    /*****************************************************************/
    /* test scroll direction and initiate sticky header if this is   */
    /* down                                                          */
    /*****************************************************************/
 

    // scrolling was going down but has now changed position to up
    // change position to fixed and go up to -20rem, then transition down
    // to top of screen
    if (   (lastScrollTop > mainContent.scrollTop) 
    
        && (!stickyNavActive))
    {   
        if (mainContent.scrollTop > mainContent.offsetHeight ) {

            headerGroup.style.position = "fixed";  
            headerGroup.style.top = "-20rem";
            headerGroup.style.zIndex = 100;  
            headerGroup.style.left=0;
            headerGroup.style.right=paddingRightForFixedPosHeader;
            headerGroup.style.top = 0;        
          
            stickyNavActive = true;  
        }   

    }  else if (mainContent.scrollTop === 0 ) {
        // arrived at the top of mainContent
        stickyNavActive = false;
        headerGroup.style.position="static";
        headerGroup.style.paddingRight = headerPaddingRight;

    }  else if ( mainContent.scrollTop > lastScrollTop
                 && stickyNavActive )
        // scrolling down       
    {       
        stickyNavActive = false;
        headerGroup.style.top = "-20rem";

        setTimeout(() => {
            headerGroup.style.position ="static";
            headerGroup.style.paddingRight = headerPaddingRight;
        }, 300);           
    }   

    lastScrollTop = mainContent.scrollTop;
})


/*****************************************************************/
/*   add event listeners to items of main nav to enable display  */
/*   of sticky menu and to control the dropdown menu             */
/*************************************************************** */

const navItems = document.querySelectorAll('.main-nav-item');

navItems.forEach(el => {

    el.addEventListener("mouseenter", (e) => {   
        // display dropdown nav and prevent scrolling while dropdown nav is displayed  

        if (mobileMenuInUse) {         
            return
        }
         
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
  
        let currentHeaderDropdown 
                   = e.target.querySelector('.main-nav-lg-dropdown');
        currentHeaderDropdown.style.top = "-40rem";
        currentHeaderDropdown.style.zIndex = "-1";  
        body.style.position = "static";  

    });
})



  