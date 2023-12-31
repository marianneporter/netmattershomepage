<?php 
    require_once('db/dbConnect.php');
    $dbConnection = new DB_Connect();
    $db = $dbConnection->CreateConnection();
    $latestNewsArticles = [];
    if ($db) {        
        require_once('db/dbQueries.php');
        $dbQueries = new DB_Queries();
        $latestNewsArticles = $dbQueries->getLatestNewsArticles($db);  
    }

    require_once 'includes/constants.php';
    require_once 'includes/functions.php';

    require_once 'includes/header.php';  // all-content div starts here
    require_once 'includes/carousels/main_carousel.php';   
?> 

<main> 

    <?php
        require_once 'includes/services.php';
        require_once 'includes/carousels/partners_carousel.php';
        require_once 'includes/welcome_group.php';
        require_once 'includes/latest_news.php';
        require_once 'includes/carousels/clients_carousel.php';
        require_once 'includes/contact_form.php';
    ?>  

</main> 

    <?php 
        require_once 'includes/footer.php';
        require_once 'includes/mobile_menu.php';
        require_once 'includes/cookies_consent.php';
        require_once 'includes/js_scripts.php';
        require_once 'includes/page_end.php';
    ?>

