let D_BOXES = 12;
let D_COLOR = 'gold';
let D_MODE = 'color';

let mode = D_MODE;
let color = D_COLOR;
let numOfBoxes = D_BOXES;

let boxs = document.getElementById('boxes');
let grid = document.querySelector('.grid-container');
let range = document.getElementById('myRange');
let colorMode = document.getElementById('color');
let rainbowMode = document.getElementById('rainbow');
let clear = document.getElementById('clear');
let rgb = document.getElementById('colorPicker');

function createGrid(x) {
    grid.style['grid-template-columns'] = `repeat(${x}, 1fr)`;
    grid.style['grid-template-rows'] = `repeat(${x}, 1fr)`
    for (let i = 0; i < x*x; i++) {
        let box = document.createElement('div');
        box.addEventListener('mouseover', changeBoxColor)
        grid.appendChild(box);
    }
}
createGrid(D_BOXES);

function changeBoxColor() {
    if (mode != 'rainbow') {
        this.style['background-color'] = color;
    } else {
        this.style['background-color'] = '#' + Math.floor(Math.random()*16777215).toString(16);
    }
}

function updateBoxes(x) {
    numOfBoxes = x;
    boxs.innerHTML = x + ' x ' + x;
}

function updateGrid(x) {
    numOfBoxes = x;
    grid.innerHTML = '';
    createGrid(x);
}

function changeColor(colorSelected) {
    color = colorSelected;
    rgb.style.value = colorSelected;
}

function clearAll() {
    color = D_COLOR;
    mode = D_MODE;
    updateGrid(numOfBoxes);
}

// range.addEventListener('mousemove', (e) => {  
// })
range.addEventListener('change', (e) => {
    updateBoxes(e.target.value);
    updateGrid(e.target.value);
})

rgb.addEventListener('click', (e) => changeColor(e.target.value))

clear.addEventListener('click', () => clearAll())

colorMode.addEventListener('click', () => mode = 'color')

rainbowMode.addEventListener('click', () => mode = 'rainbow')
