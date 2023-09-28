$("#enquiry-form").on("submit", function(e){
    e.preventDefault();
    dataString = jQuery('#enquiry-form').serialize();
    jQuery.ajax({
        type: "POST",
        url: "contact-us-enquiry-submit.php",
        data: dataString,
        success:  function(data)
        { 
            alert('Form successfully submitted.');
            console.log(data);
        },
        error:  function(data)
        { 
            alert('Form not submitted.')
        }
    }); 
});
