<?php
    function sanitizeString($input) {
        return isset($input) ? stripslashes(strip_tags($input)) : '';
    }

    function sanitizeEmail($input) {
        return isset($input) ? filter_var($input, FILTER_SANITIZE_EMAIL) : '' ;
    }

?>