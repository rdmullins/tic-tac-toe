// Tic-Tac-Console
// by Roger Mullins

console.log("Tic-Tac-Console");

let gameState = {
    playerName1: "X",
    playerSymbol1: "X",
    playerName2: "O",
    playerSymbol2: "O",
    gameBoard: ["", "", "", "", "", "", "", "", ""],
    turn: 1,
    gameOver: false,
    whoseTurn: 1
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
    console.log('-----------');
    console.log(` ${b[3]} | ${b[4]} | ${b[5]} `);
    console.log('-----------');
    console.log(` ${b[6]} | ${b[7]} | ${b[8]} `);
}

function checkSquare(square) {
    if (gameState.gameBoard[square] === "") {
        return true;
    } else {
        return false;
    }
};

function checkForWin(playerSymbol) {
let b = gameState.gameBoard;
    if ((
        (b[0] === b[1]) &&
        (b[1] === b[2]) &&
        (b[0] !== "")
    ) || (
        (b[3] === b[4]) &&
        (b[4] === b[5]) &&
        (b[3] !== "")
    ) || (
        (b[6] === b[7]) &&
        (b[7] === b[8]) &&
        (b[6] !== "")
    ) || (
        (b[0] === b[3]) &&
        (b[3] === b[6]) &&
        (b[0] !== "")
    ) || (
        (b[1] === b[4]) &&
        (b[4] === b[7]) &&
        (b[1] !== "")
    ) || (
        (b[2] === b[5]) &&
        (b[5] === b[8]) &&
        (b[2] !== "")
    ) || (
        (b[0] === b[4]) &&
        (b[4] === b[8]) &&
        (b[0] !== "")
    ) || (
        (b[2] === b[4]) &&
        (b[4] === b[6]) &&
        (b[2] !== "")
    )) {
        console.log("Game Over!");
        console.log(playerSymbol, " wins!!!");
        gameState.gameOver = true;
    }        
};

console.log("Player Name 1: ", gameState.playerName1);
console.log("Player Name 2: ", gameState.playerName2);
console.log(gameState.gameBoard);

console.log("Start game.");

renderBoard();

while (gameState.gameOver !== true) {
    //console.log(clear());
    let playerName = "";
    let playerSymbol = "";
    console.log("Turn number ", gameState.turn);
    if (gameState.whoseTurn == 1) {
        playerName = gameState.playerName1;
        playerSymbol = gameState.playerSymbol1;
    } else {
        playerName = gameState.playerName2;
        playerSymbol = gameState.playerSymbol2;
    }
    console.log(`It is ${playerName}'s turn.`);
    let choice = prompt(`${playerName}, choose a game square 1-9.`);
    if (checkSquare(choice-1)) {
        console.log("Valid square selection.");
        console.log(playerName, " plays square number ", choice);
        updateBoard(playerSymbol, choice-1);
        console.log("Updated game board:");
        renderBoard();
    } else {
        console.log("Invalid selection.");
    };
    checkForWin(playerSymbol);
    gameState.turn++;
    if (gameState.whoseTurn == 1) {
        gameState.whoseTurn = 2;
    } else {
        gameState.whoseTurn = 1;
    }
}


// console.log("Turn number 1. ", gameState.playerName1, "'s turn.");
// let square = prompt("Player 1: Choose a square, 1-9.");
// if (checkSquare(square-1)) {
//     console.log("Valid square selection.");
//     console.log(gameState.playerName1, " plays square number ", square);
//     updateBoard(gameState.playerName1, square-1);
//     console.log("Updated game board, turn number 2:");
//     renderBoard();
// } else {
//     console.log("Invalid selection.");
// };

// console.log("Turn number 2. ", gameState.playerName2, "'s turn.");
// square = prompt("Player 2: Choose a square, 1-9.");
// if (checkSquare(square-1)) {
//     console.log("Valid square selection.");
//     console.log(gameState.playerName2, " plays square number ", square);
//     updateBoard(gameState.playerName2, square-1);
//     console.log("Updated game board, turn number 3:");
//     renderBoard();
// } else {
//     console.log("Invalid selection.");
// };

// console.log("Turn number 3. ", gameState.playerName1, "'s turn.");
// square = prompt("Player 1: Choose a square, 1-9.");
// if (checkSquare(square-1)) {
//     console.log("Valid square selection.");
//     console.log(gameState.playerName1, " plays square number ", square);
//     updateBoard(gameState.playerName1, square-1);
//     console.log("Updated game board, turn number 4:");
//     renderBoard();
// } else {
//     console.log("Invalid selection.");
// };

// console.log("Turn number 4. ", gameState.playerName2, "'s turn.");
// square = prompt("Player 2: Choose a square, 1-9.");
// if (checkSquare(square-1)) {
//     console.log("Valid square selection.");
//     console.log(gameState.playerName2, " plays square number ", square);
//     updateBoard(gameState.playerName2, square-1);
//     console.log("Updated game board, turn number 5:");
//     renderBoard();
// } else {
//     console.log("Invalid selection.");
// };

// console.log("Turn number 5. ", gameState.playerName2, "'s turn.");
// square = prompt("Player 1: Choose a square, 1-9.");
// if (checkSquare(square-1)) {
//     console.log("Valid square selection.");
//     console.log(gameState.playerName1, " plays square number ", square);
//     updateBoard(gameState.playerName1, square-1);
//     console.log("Updated game board, turn number 6:");
//     renderBoard();
// } else {
//     console.log("Invalid selection.");
// };

// checkForWin();

// console.log("Turn number 6. ", gameState.playerName2, "'s turn.");
// square = prompt("Player 2: Choose a square, 1-9.");
// if (checkSquare(square-1)) {
//     console.log("Valid square selection.");
//     console.log(gameState.playerName2, " plays square number ", square);
//     updateBoard(gameState.playerName2, square-1);
//     console.log("Updated game board, turn number 7:");
//     renderBoard();
// } else {
//     console.log("Invalid selection.");
// };

// checkForWin();

// console.log("Turn number 7. ", gameState.playerName1, "'s turn.");
// square = prompt("Player 1: Choose a square, 1-9.");
// if (checkSquare(square-1)) {
//     console.log("Valid square selection.");
//     console.log(gameState.playerName1, " plays square number ", square);
//     updateBoard(gameState.playerName1, square-1);
//     console.log("Updated game board, turn number 8:");
//     renderBoard();
// } else {
//     console.log("Invalid selection.");
// };

// checkForWin();

// console.log("Turn number 8. ", gameState.playerName2, "'s turn.");
// square = prompt("Player 2: Choose a square, 1-9.");
// if (checkSquare(square-1)) {
//     console.log("Valid square selection.");
//     console.log(gameState.playerName2, " plays square number ", square);
//     updateBoard(gameState.playerName2, square-1);
//     console.log("Updated game board, turn number 9:");
//     renderBoard();
// } else {
//     console.log("Invalid selection.");
// };

// checkForWin();

// console.log("Turn number 9. ", gameState.playerName1, "'s turn.");
// square = prompt("Player 1: Choose a square, 1-9.");
// if (checkSquare(square-1)) {
//     console.log("Valid square selection.");
//     console.log(gameState.playerName1, " plays square number ", square);
//     updateBoard(gameState.playerName1, square-1);
//     console.log("Updated game board, end of game.");
//     renderBoard();
// } else {
//     console.log("Invalid selection.");
// };

// checkForWin();
//console.log("Game over with a tie.");