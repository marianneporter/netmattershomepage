const mainContent = document.querySelector('.all-content');

function disableScrolling(element){
    const x=element.scrollX;
    const y=element.scrollY;
    element.onscroll=function(){element.scrollTo(x, y);};
}

function enableScrolling(element){
    element.onscroll=function(){};
}