const rows = 16;
const cols = 9;
const board = document.getElementById('gameBoard');
let path = [];
let enemies = [];
let pawns = 4;

// Create board
for (let y = 0; y < rows; y++) {
  for (let x = 0; x < cols; x++) {
    const cell = document.createElement('div');
    cell.classList.add('cell');
    cell.style.left = `${x * 40}px`;
    cell.style.top = `${y * 40}px`;
    cell.addEventListener('click', () => placePawn(x, y));
    board.appendChild(cell);
  }
}

// Create path
for (let i = 0; i < rows; i++) {
  path.push({ x: 4, y: i });
}

// Highlight path
path.forEach(point => {
  const idx = point.y * cols + point.x;
  board.children[idx].classList.add('path');
});

// Indicate start and end points
const start = document.createElement('div');
start.classList.add('start');
start.style.left = `${path[0].x * 40}px`;
start.style.top = `${path[0].y * 40}px`;
board.appendChild(start);

const end = document.createElement('div');
end.classList.add('end');
end.style.left = `${path[path.length - 1].x * 40}px`;
end.style.top = `${path[path.length - 1].y * 40}px`;
board.appendChild(end);