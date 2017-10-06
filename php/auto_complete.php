<?php
 header("Access-Control-Allow-Origin: *");

$name       = $_POST["query"];
$latitude 	= (float)$_POST["latitude"];
$longitude  = (float)$_POST["longitude"];
$clean_name = addslashes($name);
require_once 'functions.php';
$callType = 'GET/POST';
$endpoint = 'autocomplete';
$returned = 'full';

$mydata = array(
    'input' => $name,
    'radius'=> 100000,
    'latitude'=>$latitude,
    'longitude' =>$longitude
);
$data_json = json_encode($mydata);

$curl = curl_init();
require 'curl.php';


