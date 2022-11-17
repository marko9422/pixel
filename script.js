const grid = document.querySelector('.grid');

////////////creating grid/////////////
// Create grid with class and ID. ////
//////////////////////////////////////

let sizeOfside = 35;
let gridWidht = sizeOfside * sizeOfside;

for (let i = 0; i < gridWidht; i++) {
    let div = document.createElement('div');
    div.classList = 'pixel';
    div.id = `pixel${i}`;
    // pc listeners
    div.addEventListener('mouseover',colorChange)
    div.addEventListener('dblclick',erase)
    grid.appendChild(div);

    // mobile device listeners
    div.addEventListener('pointerdown',colorChangeOnClick)

    div.addEventListener('touchmove',function(e){
        x = e.touches[0].clientX
        y = e.touches[0].clientY
        event.preventDefault();
    // Drawing with touch and drag
    function click(x, y){
        var ev = new MouseEvent('click', {
            'view': window,
            'bubbles': true,
            'cancelable': true,
            'screenX': x,
            'screenY': y
        });
    
        var el = document.elementFromPoint(x, y);
        el.dispatchEvent(ev);
        return el.id
    }
    document.getElementById(click(x, y)).style.backgroundColor = color;
    })
}

// Create width of grid , depends of size sizeOfSite.
let pixels = Array.from(document.getElementsByClassName('pixel'))
let sizeOfPixel = parseInt(getComputedStyle(document.querySelector('.pixel')).height) // [violation]
grid.style.width = sizeOfPixel * sizeOfside + 'px'; 

///////////////drawing///////////////////////////
// On click or drag change colour. //////////////
/////////////////////////////////////////////////

let color = 'red'
let click = false

function colorChangeOnClick(){
    this.style.backgroundColor = color;
}

document.addEventListener('mousedown',function(event){
    event.preventDefault();
    click = true
})

document.addEventListener('mouseup',function(){
    click = false
})

function colorChange(){
    if(click == false){
    } else {
        this.style.backgroundColor = color;
    }
}

//On double click background colour default.
function erase(){
    this.style.backgroundColor = 'rgb(225, 225, 225)';
}
// color picker
function colorPick(){
    color = this.event.target.id
}
// Clear grid func
function clearData(){
    pixels.forEach(pixel => {
        pixel.style.backgroundColor = 'rgb(225, 225, 225)';
    });
}

// ///////// saving data ///////////
// Save data into sql. /////////////
// /////////////////////////////////

let bg_colors = []

function saveData(){
    let name = 'name of array'
    bg_colors.push(name)
    pixels.forEach(pixel => {
        let backgroundColor = (window.getComputedStyle( pixel ,null).getPropertyValue('background-color'));
        bg_colors.push(backgroundColor)   
    });  
    let link = window.location.href
    bg_colors.push(link)
    
    // Unique ID
    const uniqueId = () => {
        const dateString = Date.now().toString(36);
        const randomness = Math.random().toString(36).substr(2);
        return dateString + randomness;
    };
    let number = uniqueId();
    let JSONbg_colors = JSON.stringify(bg_colors)

    // Send a POST request
    axios({
        method: 'post',
        url: 'show.php',
        data: {
            pixels: JSONbg_colors,
            number: number,
        }
    });
    
    // clear array after post.
    bg_colors = []
    // On click change url into show.php with uniqu number.
    location.href = `http://localhost/pixel/show.php?number=${number}`;
}

///////////////////////////////////
////// Range on mobile device /////
///////////////////////////////////

upDown = document.querySelector('#rangeUpDown');
leftRight = document.querySelector('#rangeLeftRight');

upDown.addEventListener('input',function(){
    leftRightValue = leftRight.value
    grid.style.transform = `translate(-${leftRightValue}%,-${this.value}%)`
})
leftRight.addEventListener('input',function(){
    upDownValue = upDown.value
    grid.style.transform = `translate(-${this.value}%,-${upDownValue}%)`
})

// Is this device TOUCH or MOUSE
let result = document.querySelector(".touchGrid");
const isTouchDevice = () => {
  try {
    document.createEvent("TouchEvent");
  } catch (e) {
  }
};
isTouchDevice();









///////////////////////////////
////// responsivity ///////////
///////////////////////////////






