const headerGroup = document.querySelector('.header-group');
const header      = document.querySelector('.header');
//const nav         = document.querySelector('nav');


// let navRect       = header.getBoundingClientRect();
// console.log(headerRect);
// console.log(navRect);


let lastScrollY = window.scrollY;

window.addEventListener("scroll", () => {
   

    if (lastScrollY > window.scrollY) {
        console.log('going up!');
        let headerRect = header.getBoundingClientRect();

        console.log(headerRect);
        let leftPos = (window.innerWidth - headerRect.width) / 2;
        console.log(leftPos);
      
        console.log(leftPos);
        headerGroup.style.position = "fixed";
        headerGroup.style.left=0;
        headerGroup.style.right=0;
        headerGroup.style.top=0;
        headerGroup.style.maxHeight = "13.1rem"
        headerGroup.style.overflowY = "hidden";
       
     

        // headerGroup.style.top = 0;
        // headerGroup.style.left = `${leftPos}px`;
        // headerGroup.style.backgroundColor = "white";

        headerGroup.style.zIndex = 999;
    }

    if (window.scrollY === 0) {
        headerGroup.style.position = "static";
        headerGroup.style.maxHeight ="none";
        headerGroup.style.overflowY = "visible";
    }

    lastScrollY = window.scrollY;
})

