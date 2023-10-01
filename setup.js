// Initialize game variables
const rows = 16;
const cols = 9;
let board = Array.from(Array(rows), () => new Array(cols).fill(0));
let path = [];
let score = 0;
let lives = 10;

// Function to set up the game board
function setupBoard() {
  const gameBoard = document.getElementById("gameBoard");
  for (let i = 0; i < rows; i++) {
    for (let j = 0; j < cols; j++) {
      const cell = document.createElement("div");
      cell.classList.add("cell");
      cell.id = `cell-${i}-${j}`;
      gameBoard.appendChild(cell);
    }
  }
}

// Initialize the board setup
setupBoard();