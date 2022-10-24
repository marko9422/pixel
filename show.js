////////////creating grid/////////////
// Create grid with class and ID. ////
//////////////////////////////////////
const grid = document.querySelector('.grid');
let sizeOfside = 35;
let gridWidht = sizeOfside * sizeOfside;

for (let i = 0; i < gridWidht; i++) {
    let div = document.createElement('div');
    div.classList = 'pixel';
    div.id = `pixel${i}`;
    grid.appendChild(div);
}
// Create width of grid , depends of size sizeOfSite.
let pixels = Array.from(document.getElementsByClassName('pixel'))
let sizeOfPixel = 20;
grid.style.width = sizeOfPixel * sizeOfside + 'px'; 

///////////////////////////////////
// get array of pisels from SQL////
///////////////////////////////////
let arrayFromSql = document.querySelector('#arrayFromSQL')
let arrayFromSqlTextContent = arrayFromSql.textContent
let pixelsArray = arrayFromSqlTextContent.split('","')
// delete first and last array.
pixelsArray.shift()
pixelsArray.pop()
// Draw picture 
for (let i = 0; i < pixelsArray.length; i++) {
    pixels[i].style.backgroundColor = pixelsArray[i];
}


