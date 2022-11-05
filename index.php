<?php include 'parts/header.php' ?>


<div class="touchGrid">
    <div class="grid"></div>
</div>


<div class="colours">
    <ul>
        <li onclick="colorPick()" id="black" class="color">BLACK</li>
        <li onclick="colorPick()" id="blue" class="color">BLUE</li>
        <li onclick="colorPick()" id="red" class="color">RED</li>
        <li onclick="colorPick()" id="green" class="color">GREEN</li>
        <li onclick="colorPick()" id="rgb(225, 225, 225)" class="color">ERASE</li>
    </ul>
</div>

<button onclick="saveData()">Save Data</button>
<button onclick="clearData()">clear</button>

<div class="slidecontainer">
    <input type="range" min="0" max="58" value="0" class="slider upDown" id="rangeUpDown">
    <input type="range" min="0" max="58" value="0" class="slider leftRight" id="rangeLeftRight">
</div>

<script src="script.js"></script>

<?php include 'parts/footer.php' ?>