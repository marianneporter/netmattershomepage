const headerGroup = document.querySelector('.header-group');
const header      = document.querySelector('.header');
const overlay     = document.querySelector('.overlay');
const body        = document.querySelector('body');

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
 
    if (   (lastScrollTop > mainContent.scrollTop) 
        && (!stickyNavActive))
    {   
        if (mainContent.scrollTop > mainContent.offsetHeight ) {
            console.log('doing animation!!!!!');    

            headerGroup.style.position = "fixed";
            headerGroup.style.paddingRight = paddingRightForFixedPosHeader;
            headerGroup.style.transition = "none";
            headerGroup.style.top = "-20rem";
            headerGroup.style.transition = "";
            headerGroup.style.left=0;
            headerGroup.style.right=0;   
            headerGroup.style.top = 0;
             
            headerGroup.style.zIndex = 999;   
            stickyNavActive = true;  
        }   

    }  else if (mainContent.scrollTop === 0 ) {
        // at the top of mainContent
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



  