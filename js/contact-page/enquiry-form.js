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
            //   displayErrorMessages(data.errors);
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
   let errors = Object.keys(errorList).map(e => errorList[e]);
   errors.forEach(e => createStatusMessage(e));
}

function createStatusMessage(message, messageType) {
    let statusMsg = document.createElement('div');

    statusMsg.classList.add('status-message');
    statusMsg.textContent = message;  
    if (messageType == "success") {
        statusMsg.style.backgroundColor = "#D1E7DD";
        statusMsg.style.color = "#254637";
    } else {
        statusMsg.style.backgroundColor = "#F8D7DA";
        statusMsg.style.color = "#4d0d13";
    }
    console.log(statusMsg);
    messageArea.appendChild(statusMsg);  

}

function clearEnquiryFormInputs() {
    let elementsToClear = '#enquiry-form input[type=text], #enquiry-form textarea';
    let inputs = document.querySelectorAll(elementsToClear);   
    inputs.forEach(i => i.value = "");
    document.getElementById("marketing-info-check").checked = false;
   
}
