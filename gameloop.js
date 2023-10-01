// Array to hold the enemy objects
let enemies = [];

// Function to create enemy object
function createEnemy() {
  let enemy = {
    type: "pawn",
    strength: 1,
    position: [0, 0] // Initialize at the top-left corner
  };
  enemies.push(enemy);
}

// Function to move enemies along the path
function moveEnemies() {
  for (let enemy of enemies) {
    // Your logic for moving enemies based on the path
  }
}

// Function to handle collisions between enemies and defenders
function handleCollisions() {
  // Your collision handling logic here
}

// Main game loop
function gameLoop() {
  createEnemy();
  moveEnemies();
  handleCollisions();
  requestAnimationFrame(gameLoop);
}

// Start the game loop
gameLoop();