<?php

    require_once 'includes/utilities.php';

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
    };

    if ($enquiryFormData->email == '') {
        $errors->email = 'Please enter your email';
    };

    if ($enquiryFormData->phone == '') {
        $errors->phone = 'Please enter your phone number';
    }; 

    if ($enquiryFormData->message == '') {
        $errors->message = "Please enter a message";
    }

    if (empty( (array) $errors ))  {
        //do db insert
        //pretend db insert worked
        $statusMessage = "OK";
    } else {
        $statusMessage = "Errors";
    }

    $returnValue = new StdClass();
    $returnValue->statusMessage = $statusMessage;
    $returnValue->errors = $errors;

    echo json_encode($returnValue);