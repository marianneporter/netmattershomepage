const cookiesOverlay = document.querySelector('.cookies-overlay');
const cookiesConsentPopup = document.querySelector('.cookies-consent');
const acceptCookiesBtn = document.querySelector('.accept-cookies-btn');

const storageType = localStorage;
const consentPropertyName = "nm-consent";

const shouldShowPopup = () => !storageType.getItem(consentPropertyName);
const saveConsentToStorage = () => storageType.setItem(consentPropertyName, true);

if (shouldShowPopup()) {
    cookiesConsentPopup.styles.zIndex = 999;
    addOverlay();
}

//addOverlay();

acceptCookiesBtn.addEventListener('click', () => {
    console.log('accept cookies button clicked!');
    saveConsentToStorage();
    cookiesConsentPopup.style.zIndex = "-999";
    removeOverlay();
});

function addOverlay() {
    console.log('adding no transition class');
    cookiesOverlay.classList.add('no-transition');
    cookiesOverlay.classList.add('fullpage-overlay');
    cookiesOverlay.style.opacity ="0.6";
    cookiesOverlay.style.zIndex = "10";  
    cookiesOverlay.classList.remove('no-transition');
    console.log('notransition class removed');
}

function removeOverlay() {
  
    cookiesOverlay.classList.add('no-transition');
    cookiesOverlay.classList.remove('fullpage-overlay');
    cookiesOverlay.style.opacity ="0";
    cookiesOverlay.style.zIndex = "-999";  
    cookiesOverlay.classList.remove('no-transition');
}   