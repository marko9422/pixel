const grid = document.querySelector('.grid');
// Create grid with class and ID. 
let sizeOfside = 35;
let gridWidht = sizeOfside * sizeOfside;

for (let i = 0; i < gridWidht; i++) {
    let div = document.createElement('div');
    div.classList = 'pixel';
    div.id = `pixel${i}`;
    div.addEventListener('mouseover',colorChange)
    div.addEventListener('mousedown',colorChangeOnClick)
    div.addEventListener('dblclick',erase)
    grid.appendChild(div);
}

// Create width of grid , depends of size sizeOfSite.
let pixels = Array.from(document.getElementsByClassName('pixel'))
let sizeOfPixel = 20;
grid.style.width = sizeOfPixel * sizeOfside + 'px'; 

// On click or drag change colour of that div. 
let color = 'red'
let click = false

function colorChangeOnClick(){
    this.style.backgroundColor = color;
}

document.addEventListener('mousedown',function(){
    event.preventDefault();
    click = true
})

document.addEventListener('mouseup',function(){
    event.preventDefault();
    click = false
})

function colorChange(){
    if(click == false){
        event.preventDefault();
    } else {
        event.preventDefault();
        this.style.backgroundColor = color;
    }
}

//On double click background colour default.
function erase(){
    this.style.backgroundColor = 'rgb(225, 225, 225)';
}
function colorPick(){
    color = this.event.target.id
}
