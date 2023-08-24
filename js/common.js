const headerGroup = document.querySelector('.header-group');
const header      = document.querySelector('.header');
const overlay     = document.querySelector('.overlay');
const body        = document.querySelector('body');
const mainContent = document.querySelector('.all-content');


let headerPaddingRight  = window.getComputedStyle(headerGroup, null)
                                .getPropertyValue('padding-right');
let paddingRightNumeric = parseInt(headerPaddingRight);
let mcScrollbarWidth    = mainContent.offsetWidth - mainContent.clientWidth;
let paddingRightForFixedPosHeader = `${paddingRightNumeric + mcScrollbarWidth}px`;