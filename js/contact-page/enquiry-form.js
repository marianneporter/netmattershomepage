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
            alert('Form successfully submitted.');
            let data = JSON.parse(response);
            console.log(data);

            if (data.statusMessage == "OK") {
                displaySuccessMessage();
            } else {
                console.log(data.errors);
                displayErrorMessages(data.errors);
            }
        },
        error:  function(error)
        { 
            alert('Form not submitted.')
        }
    }); 
});

function displaySuccessMessage() {
    // clear any existing messages
    messageArea.innerHTML = '';
   
    let successMessage = "Thank you for your enquiry - we will be in touch soon";
    createStatusMessage(successMessage, "success");
    clearEnquiryFormInputs();
}

function displayErrorMessages(errorList) {
  // console.log(errorList);
   console.log('in display error messages');
   let errors = Object.keys(errorList).map(e => errorList[e]);
   errors.forEach(e => createStatusMessage(e));
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
        statusMsg.style.color = "#254637";
    } else {
        statusMsgContainer.style.backgroundColor = "#F8D7DA";
        statusMsgContainer.style.color = "#4d0d13";
    }
    console.log(statusMsg);
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
    closeBtn.style.textContent = "X";
    return closeBtn;
}
