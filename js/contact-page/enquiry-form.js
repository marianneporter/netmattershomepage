const messageArea = document.querySelector("#enquiry .messages");

$("#enquiry-form").on("submit", function(e){
    e.preventDefault();
    dataString = jQuery('#enquiry-form').serialize();
    jQuery.ajax({
        type: "POST",
        url: "contact-us-enquiry-submit.php",
        data: dataString,
        success:  function(response)
        {  
            let data = JSON.parse(response);
            messageArea.innerHTML = '';
            if (data.statusMessage == "OK") {
                displaySuccessMessage();
            } else if (data.statusMessage == "Validation_Errors") {              
                displayErrorMessages(data.errors);
            } else {
                displaySomethingWentWrong();
            }
        },
        error:  function(error)
        {      
            displaySomethingWentWrong();
        }
    }); 
});

function displaySuccessMessage() {
    // clear any existing messages     
    let successMessage = "Thank you for your enquiry - we will be in touch soon";
    createStatusMessage(successMessage, "success");
    clearEnquiryFormInputs();
}

function displayErrorMessages(errorList) {
    let errors = Object.keys(errorList).map(e => errorList[e]);
    errors.forEach(e => createStatusMessage(e, "error"));
}

function displaySomethingWentWrong() {
    let message = "Sorry we are unable to process your enquiry at present. Please email us on sales@netmatters.com."
    createStatusMessage(message, "warning");
}


/**************************************************************/
/* create a message div consisting of a message and a button  */
/* that removes that message                                  */
/**************************************************************/
function createStatusMessage(message, messageType) {    

    // create flex container
    let statusMsgContainer =  document.createElement('div');
    statusMsgContainer.classList.add("status-message-container");

    //create flex items, message and the cancel button
    let statusMsg = document.createElement('div');
    let closeBtn = createCloseBtn();    

    // set up status message 
    statusMsg.classList.add('status-message');
    statusMsg.textContent = message;  
    if (messageType == "success") {
        statusMsgContainer.style.backgroundColor = "#D1E7DD";
        statusMsgContainer.style.color = "#254637";
    } else if (messageType == "error") {
        statusMsgContainer.style.backgroundColor = "#F8D7DA";
        statusMsgContainer.style.color = "#4d0d13";
    } else {
        statusMsgContainer.style.backgroundColor = "#ffdacc";
        statusMsgContainer.style.color = "#ff4500";        
    }
  
    // append both message and close button to container div
    // and then to DOM area messageArea.
    statusMsgContainer.appendChild(statusMsg);
    statusMsgContainer.appendChild(closeBtn);
    messageArea.appendChild(statusMsgContainer);  

}

function clearEnquiryFormInputs() {
    let elementsToClear = '#enquiry-form input[type=text], #enquiry-form textarea';
    let inputs = document.querySelectorAll(elementsToClear);   
    inputs.forEach(i => i.value = "");
    document.getElementById("marketing-info-check").checked = false;
   
}

function createCloseBtn() {
    let closeBtn = document.createElement("button");
    closeBtn.classList.add("close-button");
    closeBtn.innerHTML = "X";

    closeBtn.addEventListener('click', (e) => {
        e.target.parentNode.remove();        
    })
    
    return closeBtn;
}
