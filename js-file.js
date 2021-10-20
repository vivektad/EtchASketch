let D_BOXES = 50;
let D_COLOR = 'black';
let D_MODE = 'color';
let boxs = document.getElementById('boxes');
let grid = document.querySelector('.grid-container');
let range = document.getElementById('myRange');
let color = document.getElementById('#color');
let rainbow = document.getElementById('#rainbow');
let clear = document.getElementById('#clear');

function createGrid(x) {
    grid.style['grid-template-columns'] = `repeat(${x}, 1fr)`;
    grid.style['grid-template-rows'] = `repeat(${x}, 1fr)`
    for (let i = 0; i < x; i++) {
        let box = document.createElement('div');
        grid.appendChild(box);
    }
}
createGrid(50);

function updateBoxes(x) {
    boxs.innerHTML = x + ' x ' + x;
}

range.addEventListener("mousemove", (e) => {
    console.log(e.target.value);
    updateBoxes(e.target.value);
})
range.addEventListener('change', (e) => updateGrid(e.target.value));

