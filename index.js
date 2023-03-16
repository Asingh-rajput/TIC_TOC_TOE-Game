
// .............................Initialize variables............................
let currentPlayer = "X";
let gameEnded = false;
let board = ["", "", "", "", "", "", "", "", ""];


//..............................Initialize elements...............................

const cells = document.querySelectorAll("td");
const message = document.querySelector("#message");
const restartButton = document.querySelector("#restartButton");


//............................... function to check for a winner.......................................
function checkForWinner() {
    // Check rows
    for (let i = 0; i < 9; i += 3) {
        if (board[i] === currentPlayer && board[i+1] === currentPlayer && board[i+2] === currentPlayer) {
            return true;
        }
    }
    // Check columns
    for (let i = 0; i < 3; i++) {
        if (board[i] === currentPlayer && board[i+3] === currentPlayer && board[i+6] === currentPlayer) {
            return true;
        }
    }
    // Check diagonals
    if (board[0] === currentPlayer && board[4] === currentPlayer && board[8] === currentPlayer) {
        return true;
    }
    if (board[2] === currentPlayer && board[4] === currentPlayer && board[6] === currentPlayer) {
        return true;
    }
    return false;
}


//.....................................function to check for a draw..............................................

function checkForDraw() {
    for (let i = 0; i < 9; i++) {
        if (board[i] === "") {
            return false;
        }
    }
    return true;
}


//.....................................Add event listeners to cells.................................................


cells.forEach(cell => {
    cell.addEventListener("click", () => {
        if (gameEnded || cell.textContent !== "") {
            return;
        }
        board[cell.id] = currentPlayer;
        cell.textContent = currentPlayer;
        if (checkForWinner()) {
            message.textContent = currentPlayer + " wins!";
            gameEnded = true;
        } else if (checkForDraw()) {
            message.textContent = "Draw!";
            gameEnded = true;
        } else {
            currentPlayer = currentPlayer === "X" ? "O" : "X";
            message.textContent = "It's " + currentPlayer + "'s turn";
        }
    });
});

//..................................Add event listener to restart button........................................


restartButton.addEventListener("click", () => {
  
    currentPlayer = "X";
    gameEnded = false;
    board = ["", "", "", "", "", "", "", "", ""];
    cells.forEach(cell => {
        cell.textContent = "";
    });
    message.textContent = "It's " + currentPlayer + "'s turn";
});
 