const mainContent    = document.querySelector('.all-content');
const mobileMenu     = document.querySelector('.mobile-menu');

const menuButton     = document.querySelector('.menu-icon');
const menuButtonCheckbox = document.querySelector('.menu-icon input');
const menuCheckbox = document.getElementById('#menu-checkbox');

const contentOverlay = document.querySelector('.content-overlay');





// menu button has been clicked so main content slides over to reveal mobile menu
menuButton.addEventListener('click', () => {
        console.log('menu button clicked');
        menuButtonCheckbox.checked = "checked";
        console.log('just set checkbox to true');
        mainContent.style.right = "21rem";
        mainContent.style.position = "fixed";
        contentOverlay.style.opacity ="0.5";
        contentOverlay.style.zIndex = "10"; 
})

//overlay has been clicked so page slides back over the mobile menu
contentOverlay.addEventListener('click', (e) => {  
    mainContent.style.right = "1rem";

    setTimeout(() => {    

        mainContent.style.right = "0";
        
        mainContent.style.position ="relative";        
    } , 2000);  

    contentOverlay.style.opacity = "0";
    setTimeout(() => contentOverlay.style.zIndex = "-1", 2000);

    console.log('setting menu button icon checked to false');
  //  console.log(menuCheckbox);
    console.log(menuButtonCheckbox);
    menuButtonCheckbox.checked = "false";
    console.log(menuButtonCheckbox);
})

//********************************************************* */
// hamburger menu functionality                             */
//********************************************************* */

