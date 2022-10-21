<?php 
 include '../parts/connection.php';


$request_body = file_get_contents('php://input');
$data = json_decode($request_body, true);


$number = '###';
$pixelsData = $data['pixels']; 

mysqli_query($link,"INSERT INTO drawdata (number, pixelsData) VALUES ('$number', '$pixelsData')");