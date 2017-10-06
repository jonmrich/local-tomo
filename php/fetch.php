<?php
$callParam = $_POST["callParam"];
require_once 'functions.php';
$callType = $callParam[0];
$endpoint = $callParam[1];
$callId = $callParam[2];
$returned = $callParam[3];
$curl     = curl_init();
require_once 'curl.php';

