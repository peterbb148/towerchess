// Create enemy
function createEnemy(x, y) {
  const enemy = document.createElement('div');
  enemy.classList.add('enemy');
  enemy.style.left = `${x * 40}px`;
  enemy.style.top = `${y * 40}px`;
  board.appendChild(enemy);
  return enemy;
}

// Move enemies
function moveEnemies() {
  enemies.forEach(enemy => {
    if (enemy.index < path.length - 1) {
      enemy.index++;
      const point = path[enemy.index];
      enemy.el.style.left = `${point.x * 40}px`;
      enemy.el.style.top = `${point.y * 40}px`;
    } else {
      board.removeChild(enemy.el);
    }
  });
  enemies = enemies.filter(enemy => enemy.index < path.length - 1);
}

// Spawn enemy
function spawnEnemy() {
  const enemy = { el: createEnemy(path[0].x, path[0].y), index: 0 };
  enemies.push(enemy);
}

// Place pawn
function placePawn(x, y) {
  if (pawns <= 0) return;
  const pawn = document.createElement('div');
  pawn.classList.add('pawn');
  pawn.style.left = `${x * 40}px`;
  pawn.style.top = `${y * 40}px`;
  board.appendChild(pawn);
  pawns--;
}

spawnEnemy();
setInterval(() => {
  spawnEnemy();
  moveEnemies();
}, 1000);