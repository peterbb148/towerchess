let score = 0;
let lives = 10; // Start with 10 lives

// Update the scoreboard
function updateScoreboard() {
  scoreElement.innerHTML = score;
  livesElement.innerHTML = lives;
}

// Add pawns to the board
function addPawn(row, col) {
  // ...
}

// Event listener for adding pawns
gameBoard.addEventListener('click', function(event) {
  // ...
});

// Initial call to set up the game
(function init() {
  generatePath(1);
  spawnEnemy();
  updateScoreboard();
})();

// Kick off the game loop
gameLoop();
