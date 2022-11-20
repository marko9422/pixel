<?php include 'parts/header.php' ?>

<div class="container">

    <div class="touchGrid">
        <div class="grid"></div>
    </div>
    
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


<button onclick="plusButton()">+</button>
<button onclick="minusButton()">-</button>

<button onclick="upButton()">Up</button>
<button onclick="downButton()">Down</button>

<button onclick="LeftButton()">Left</button>
<button onclick="RightButton()">Right</button>



<script src="script.js"></script>

<?php include 'parts/footer.php' ?>