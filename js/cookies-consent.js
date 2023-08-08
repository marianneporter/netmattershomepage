const cookiesOverlay = document.querySelector('.cookies-overlay');
const cookiesConsentPopup = document.getElementById('cookies-consent');
const acceptCookiesBtn = document.querySelector('.accept-cookies-btn');

const daysConsent = 30;
const consentPropertyName = "nm-expiry-date";

if (shouldShowConsentPopup()) {
    console.log('should show popup is true');
        
    cookiesConsentPopup.style.zIndex = "999";
    if (window.innerWidth < 350) {
        cookiesConsentPopup.style.overflowY = "scroll";
    }
    
    addCookiesConsentOverlay();
} 


acceptCookiesBtn.addEventListener('click', () => {   
    saveConsentToStorage();
    cookiesConsentPopup.style.zIndex = "-999";
    removeCookiesConsentOverlay();
});

function shouldShowConsentPopup() {
    const expiryDate = localStorage.getItem(consentPropertyName);
    if (expiryDate === null) {
        return true;
    } 
    const today = new Date();
    const expiryDateJS = new Date(expiryDate);
    if (today.getTime() > expiryDateJS.getTime()) {
        localStorage.removeItem(consentPropertyName);
        return true;
    } else {
        return false;
    }    
}

function saveConsentToStorage() {
    let expiryDateJS = new Date(Date.now() + daysConsent * 24 * 60 * 60 * 1000);
    let expiryDate =  expiryDateJS.getFullYear().toString() + '-'
                    + ( expiryDateJS.getMonth() + 1).toString().padStart(2, "0") + "-"
                    + ( expiryDateJS.getDate()).toString().padStart(2, "0");

    localStorage.setItem(consentPropertyName, expiryDate);
}

function addCookiesConsentOverlay() { 
    cookiesOverlay.classList.add('no-transition');
    console.log('in add cookies consent overlay');
    console.log(mainContent);
 
    mainContent.style.position = "fixed";
    cookiesOverlay.classList.add('fullpage-overlay');
    cookiesOverlay.style.opacity ="0.6";
    cookiesOverlay.style.zIndex = "10";  
    cookiesOverlay.classList.remove('no-transition');   
}

function removeCookiesConsentOverlay() {    
 
    cookiesOverlay.classList.remove('fullpage-overlay');
    cookiesOverlay.style.opacity ="0";
    cookiesOverlay.style.zIndex = "-999";  
    mainContent.style.position = "static";
   
}   
