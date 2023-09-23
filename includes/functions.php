<?php
    function dbdateToDisplay($dbDate) {       
        $timestamp = strtotime($dbDate);
        $displayDate = date("d F Y", $timestamp);
        return $displayDate;
    }
?>