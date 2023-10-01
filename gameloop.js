// Move enemies along the path
function moveEnemies() {
  // ...  
}

// Check for collisions between enemies and pawns
function checkCollisions() {
  // ...
}

// Update game logic
function gameLoop() {
  moveEnemies();
  checkCollisions();
  updateScoreboard();
  
  // Game Over condition
  if (lives <= 0) {
    alert("Game Over!");
    return;
  }

  requestAnimationFrame(gameLoop);
}
