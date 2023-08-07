<?php

$imageUrl = $_GET['url'];
$response = file_get_contents($imageUrl);
header('Content-Type: image/jpeg');
header('Access-Control-Allow-Origin: *');
echo $response;

?>
