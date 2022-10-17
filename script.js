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
    grid.appendChild(div);
}

// Create width of grid , depends of size sizeOfSite.
let pixels = Array.from(document.getElementsByClassName('pixel'))
let sizeOfPixel = 20;
grid.style.width = sizeOfPixel * sizeOfside + 'px'; 

// On click change colour of that div. 
function colorChangeOnClick(){
    this.style.backgroundColor = color;
}

let color = 'red'
let click = false

window.addEventListener('mousedown',function(){
    click = true
})
window.addEventListener('mouseup',function(){
    click = false
})

function colorChange(){
    if(click == false){

    } else {
        this.style.backgroundColor = color;
// iiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiii
    }
}


