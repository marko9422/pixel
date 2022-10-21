<?php
$server = 'localhost';
$username = 'root';
$password = '';
$db = 'drawedPixelData';

$link = mysqli_connect($server,$username,$password,$db);

if(!$link){
    die('Connection Failed: '.mysqli_connect_error());
}
?>