const mainContent    = document.querySelector('.all-content');

function disableScrolling(){
    var x=mainContent.scrollX;
    var y=mainContent.scrollY;
    mainContent.onscroll=function(){mainContent.scrollTo(x, y);};
}

function enableScrolling(){
    mainContent.onscroll=function(){};
}