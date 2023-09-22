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
}