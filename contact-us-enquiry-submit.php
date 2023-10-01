<?php

    require_once 'includes/utilities.php';
    require_once 'includes/constants.php';

    $enquiryFormData = new stdClass;

    $enquiryFormData->name        = sanitizeString($_POST['name']);
    $enquiryFormData->companyName = sanitizeString($_POST['company-name']);
    $enquiryFormData->email       = sanitizeEmail($_POST['email']);
    $enquiryFormData->phone       = sanitizeString($_POST['form-phone-number']);    
    $enquiryFormData->message     = sanitizeString($_POST['message']); 
    $enquiryFormData->marketingInfo = isset($_POST['marketing-info']) ? true : false;   

    $errors = new stdClass();

    if ($enquiryFormData->name == '') {
        $errors->name = "Please enter your name";  
    } else {
        if (strlen($enquiryFormData->name) < 2 ) {
            $errors->name = "Name must be at least 2 characters in length";
        }
    }

    if ($enquiryFormData->email == '') {
        $errors->email = 'Please enter your email';        
    } else if(!preg_match( EMAIL_REGEX, $enquiryFormData->email)) {
        $errors->email = "Please enter a valid email";
    }  
   
    if ($enquiryFormData->phone == '') {
        $errors->phone = 'Please enter your phone number';
    } else if (strlen($enquiryFormData->phone) < 10) {
        $errors->phone = "Phone number must have a minimum of 10 characters";
    } else if(!preg_match( PHONE_NUMBER_REGEX, $enquiryFormData->phone)) {
        $errors->email = "Please enter a valid phone number";
    }

    if ($enquiryFormData->message == '') {
        $errors->message = "Please enter a message";         
    } else if (strlen($enquiryFormData->message) < 10) {
        $errors->message = "Message must be at least 10 characters in length";
    }

    if (empty( (array) $errors ))  {  

        require_once('db/dbConnect.php');
        $dbConnection = new DB_Connect();
        $db = $dbConnection->CreateConnection();       
        if ($db) {        
            require_once('db/dbQueries.php');
            $dbQueries = new DB_Queries();
            $insertSuccess
                = $dbQueries->insertEnquiryFormData($db, $enquiryFormData );  
        } else {
            $insertSuccess = false;
        }  
        
        if ($insertSuccess) {
            $statusMessage = "OK";
        } else {
            $statusMessage = "DB_Error";
        }
   
    } else {
        $statusMessage = "Validation_Errors";
    }

    $returnValue = new StdClass();
    $returnValue->statusMessage = $statusMessage;
    $returnValue->errors = $errors;

    echo json_encode($returnValue);