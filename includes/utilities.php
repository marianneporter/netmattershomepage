<?php
    function sanitizeString($input) {
        return isset($input) ? trim(stripslashes(strip_tags($input))) : '';
    }

    function sanitizeEmail($input) {
        return isset($input) ? trim(filter_var($input, FILTER_SANITIZE_EMAIL)) : '' ;
    }

?>