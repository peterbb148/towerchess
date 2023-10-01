// Initialize game
function initGame() {
  // You can set initial game settings or preload assets here
  // For now, it's empty
}

// Event listeners for user actions
function setupEventListeners() {
  // Example: listen for clicks to place defender pieces
  document.addEventListener("click", function(event) {
    // Your click handling logic here
  });
}

// Start the game
initGame();
setupEventListeners();

// Link to setup and game loop
const script1 = document.createElement('script');
script1.src = 'https://peterbb148.github.io/towerchess/setup.js';
document.body.appendChild(script1);

const script2 = document.createElement('script');
script2.src = 'https://peterbb148.github.io/towerchess/gameLoop.js';
document.body.appendChild(script2);