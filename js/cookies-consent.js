const cookiesOverlay = document.querySelector('.overlay');
console.log(cookiesOverlay);
console.log('hello from cookies consent');

cookiesOverlay.classList.add('no-transition');
cookiesOverlay.classList.add('fullpage-overlay');
cookiesOverlay.style.opacity ="0.6";
cookiesOverlay.style.zIndex = "10";  
cookiesOverlay.classList.remove('no-transition');
// body.style.position = "fixed";
// body.style.marginRight = "1rem";

