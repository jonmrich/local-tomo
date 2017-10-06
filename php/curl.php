<?php

if ($callParam){
$callType = $callParam[0];
$endpoint = $callParam[1];
$callId = $callParam[2];
$returned = $callParam[3];
}
if ($callType=='GET'){
    $data_json='';
}
elseif ($callType =="GET/POST"){
    $callType = 'GET';
}
$s = hash_hmac('sha256', '/api/v2/'.$endpoint . $callId . '-' . $data_json, $SECRET_KEY, false);
$headers   = array();
$headers[] = 'Accept: application/json';
$headers[] = 'Content-Type: application/json';
$headers[] = "RT-ORG-APP-CLIENT-ID: ".$client_id;
$headers[] = "RT-ORG-APP-HMAC: " . $s;

curl_setopt_array($curl, array(
    CURLOPT_URL => $api_url.$endpoint.$callId,
    CURLOPT_HTTP_VERSION   => CURL_HTTP_VERSION_1_1,
    CURLOPT_CUSTOMREQUEST  => $callType,
    CURLOPT_RETURNTRANSFER => true,
    CURLOPT_HTTPHEADER     => $headers,
    CURLOPT_POSTFIELDS     => $data_json,
));

$response = curl_exec($curl);
$httpcode = curl_getinfo($curl, CURLINFO_HTTP_CODE);
$finalUrl = curl_getinfo($curl, CURLINFO_EFFECTIVE_URL); //for debugging endpoint/target URL


$err      = curl_error($curl);

curl_close($curl);
//select and send the proper response
if ($returned=='httpcode'){
	if ($err) {
    echo "cURL Error #:" . $err;
} else {
    echo $httpcode; 
}
}
elseif ($returned=='full'){
		if ($err) {
    echo "cURL Error #:" . $err;
} else {
    echo $response; 
}
	}
  elseif ($returned=='none'){
        if ($err) {
    echo "cURL Error #:" . $err;
} 
    }  
else {
	if ($err) {
    echo "cURL Error #:" . $err;
} else {
    echo $response; 
}

}