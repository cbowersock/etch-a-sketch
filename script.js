const container = document.querySelector('#container');
const button = document.querySelector('button');

let length = 16;
let width = 16;

createGrid(length, width);

button.addEventListener('click', () => {
    clearGrid();
    let input = prompt('What size Etch-A-Sketch would you like to use?');
    length = parseInt(input);
    width = length;
    createGrid(length, width);
})

function createGrid(l, w) {
    container.style.display = 'grid';
    container.style.gridTemplateRows = `repeat(${l}, 1fr)`;
    container.style.gridTemplateColumns = `repeat(${w}, 1fr)`;
    container.style.borderStyle = 'inset';
    container.style.height = '800px';
    container.style.width = '800px';
    container.style.margin = '0 auto';

    for (let i = 0; i < (l * w); i++) {
        let square = document.createElement('div');
        square.classList.add('square');
        square.addEventListener('mouseenter', () => {
            square.style.backgroundColor = 'black';
        })
        container.appendChild(square);
    }
}

function clearGrid() {
    let squares = document.querySelectorAll('.square');
    squares.forEach((square) => {
        square.style.backgroundColor = 'white';
    })
}