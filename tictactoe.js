// Get elements from HTML
const board = document.getElementById("board");
const status = document.getElementById("status");
let currentPlayer = "X";  // X starts first
let cells = Array(9).fill(null);  // Empty board

// Function to create the board
function createBoard() {
    board.innerHTML = "";  // Clear the board
    cells = Array(9).fill(null);  // Reset cell values
    for (let i = 0; i < 9; i++) {
        const cell = document.createElement("div");
        cell.classList.add("cell");
        cell.dataset.index = i; // Give each cell a number (0-8)
        cell.addEventListener("click", handleClick);
        board.appendChild(cell);
    }
}

// Function to handle when a player clicks on a cell
function handleClick(event) {
    const index = event.target.dataset.index;
    if (!cells[index]) {  // If the cell is empty
        cells[index] = currentPlayer;  // Mark cell as X or O
        event.target.textContent = currentPlayer;  // Show X or O in UI
        event.target.classList.add("taken");  // Disable further clicks

        if (checkWin()) {  // Check if the player won
            status.textContent = `Player ${currentPlayer} wins!`;
            disableBoard();
            return;
        }

        if (!cells.includes(null)) {  // If all cells are filled, it's a draw
            status.textContent = "It's a draw!";
            return;
        }

        // Switch player turns
        currentPlayer = currentPlayer === "X" ? "O" : "X";
        status.textContent = `Player ${currentPlayer}'s turn`;
    }
}

// Function to check if someone won
function checkWin() {
    const winPatterns = [
        [0, 1, 2], [3, 4, 5], [6, 7, 8], // Rows
        [0, 3, 6], [1, 4, 7], [2, 5, 8], // Columns
        [0, 4, 8], [2, 4, 6] // Diagonals
    ];
    return winPatterns.some(pattern => {
        const [a, b, c] = pattern;
        return cells[a] && cells[a] === cells[b] && cells[a] === cells[c]; // If all three match
    });
}

// Function to disable the board after winning
function disableBoard() {
    document.querySelectorAll(".cell").forEach(cell => cell.removeEventListener("click", handleClick));
}

// Function to reset the game
function resetGame() {
    currentPlayer = "X";
    status.textContent = "Player X's turn";
    createBoard();
}

// Initialize the board when the page loads
createBoard();
