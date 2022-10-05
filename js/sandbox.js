// Tic-Tac-Console
// by Roger Mullins

console.log("Tic-Tac-Console");

let gameState = {
    playerName1: "X",
    playerName2: "O",
    gameBoard: ["", "", "", "", "", "", "", "", ""]


    // boardState = {
    //     squareIndex: 0,
    //     active: true,
    //     hasX: false,
    //     hasO: false
    // },

    // checkForWin() {
    //     console.log("This is the function inside the gameState object to check for a win.");
    // },

    // updateBoardState(player, square) {
    //     console.log("This updates the game board object.");
    //     console.log("Player is: ", player);
    //     console.log("Selected square is:" , square);
    // }
};

function updateState() {
    console.log("This updates the state.");
}

function updateDisplay() {
    console.log("This updates the display");
}

function updateBoard(player, square) {
    console.log("Board update function.");
    console.log("Player: ", player);
    console.log("Square: ", square);
    gameState.gameBoard[square] = player;
}

function renderBoard() {
    let b = gameState.gameBoard;
    console.log(` ${b[0]} | ${b[1]} | ${b[2]} `);
    console.log('---------');
    console.log(` ${b[3]} | ${b[4]} | ${b[5]} `);
    console.log('---------');
    console.log(` ${b[6]} | ${b[7]} | ${b[8]} `);
}

function checkSquare(square) {
    if (gameState.gameBoard[square] === "") {
        return true;
    } else {
        return false;
    }
}

console.log("Player Name 1: ", gameState.playerName1);
console.log("Player Name 2: ", gameState.playerName2);
console.log(gameState.gameBoard);
renderBoard();

for (let i=1; i<= 9; i++) {
    if (i%2 !== 0) {
        console.log("Player 1's Turn.");
        let square = prompt(gameState.playerName1, ", choose a square, 0 - 9.");
        if (checkSquare(square)) {
            updateBoard(gameState.playerName1, square-1);
            renderBoard();
        } else {
            square = prompt("Invalid selection. Please try again.");
            updateBoard(gameState.playerName1, square-1);
            renderBoard();
        }
    } else {
        console.log("Player 2's Turn.");
        let square = prompt(gameState.playerName2, ", choose a square, 0 - 9.");
        if (checkSquare(square)) {
            updateBoard(gameState.playerName2, square-1);
            renderBoard();
        } else {
            square = prompt("Invalid selection. Please try again.");
            updateBoard(gameState.playerName2, square-1);
            renderBoard();
        }

    }
    updateBoard();
}

// console.log("Player 1 chooses square number 4.");
// updateBoard(gameState.playerName1, 4);
// console.log("Game Board Now: ", gameState.gameBoard);
// renderBoard();
// gameState.updateBoardState(gameState.playerName1, 3);
// gameState.checkForWin();
