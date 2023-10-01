<?php

class DB_Queries {

    public function getLatestNewsArticles($db) {   
        
        try {                  
            $stmt  = $db->prepare("SELECT * FROM `latest_news`
            ORDER BY posted_by_date DESC
            LIMIT 3" );   

            $stmt->execute();         
            $articles = $stmt->fetchAll(PDO::FETCH_ASSOC); 
            return $articles;
        }
        catch(Exception $e) {
            return [];
        }         
    } 
    
    public function insertEnquiryFormData($db, $enquiryFormData) {

        try {
            $sql = "INSERT INTO enquiry_form (name, company_name, email, phone_number, message, marketing_info_check)
                    VALUES (:name, :companyName, :email, :phoneNumber, :message, :marketingInfoCheck )";
                       $stmt = $db->prepare($sql);
                       $stmt->bindparam(':name',        $enquiryFormData->name);
                       $stmt->bindparam(':companyName', $enquiryFormData->companyName);
                       $stmt->bindparam(':email',       $enquiryFormData->email);
                       $stmt->bindparam(':phoneNumber', $enquiryFormData->phone);
                       $stmt->bindparam(':message',     $enquiryFormData->message);  
                       $stmt->bindparam(':marketingInfoCheck', $enquiryFormData->marketingInfo);  
                       $stmt->execute();  
            return true;            
        }
        catch(Exception $e) {     
            return false;
        }
    }
}