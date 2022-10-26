<?php 
include 'parts/connection.php';
include 'parts/header.php';

// save data
$request_body = file_get_contents('php://input');
$data = json_decode($request_body, true);

$number = $data['number']; 
$pixelsData = ($data['pixels']); 

mysqli_query($link,"INSERT INTO drawdata (number, pixelsData) VALUES ('$number', '$pixelsData')");


// get data
$numberFromUrl = $_GET['number'];

$sql = "SELECT pixelsData FROM drawdata WHERE number = '$numberFromUrl' ";
$result = mysqli_query($link, $sql);

if (mysqli_num_rows($result) > 0) {
    while($row = mysqli_fetch_assoc($result)) {
        echo '<div id="arrayFromSQL">';
        echo $row["pixelsData"];
        echo '</div>';
    }
  } else {
        echo "!!!!THERE IS A PROBLEM!!!!";
  }
?>


<div class="grid"></div>
<a href='index.php'>Main web</a>




<script src="show.js"></script>
<?php include 'parts/footer.php' ?>