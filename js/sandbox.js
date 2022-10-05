// Tic-Tac-Console
// by Roger Mullins

console.log("Tic-Tac-Console");

let gameState = {
    playerName1: "X",
    playerName2: "O",

    boardState: {
        {
            squareIndex: 0,
            active: true,
            hasX: false,
            hasO: false
        }
    },

    function checkForWin() {
        console.log("This is the function inside the gameState object to check for a win.");
    },

    function updateBoardState(player, square) {
        console.log("This updates the game board object.");
        console.log("Player is: ", player);
        console.log("Selected square is:" , square);
    }
};

function updateState() {
    console.log("This updates the state.");
}

function updateDisplay() {
    console.log("This updates the display");
}

console.log("Player Name 1: ", gameState.playerName1);
console.log("Player Name 2: ", gameState.playerName2);

gameState.updateBoardState(gameState.playerName1, 3);
