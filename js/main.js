// Tic-Tac-Toe
// by Roger Mullins

let gameState = {
  playerName1: "Justin",
  playerSymbol1: "X",
  playerName2: "Jonathan",
  playerSymbol2: "O",
  gameBoard: ["", "", "", "", "", "", "", "", ""],
  clickedID: "",
  turn: 1,
  gameOver: false,
  whoseTurn: "X"
};

function updateDisplay() {
  let currentPlayer = "";
  if (gameState.turn % 2 != 0) {
    currentPlayer = gameState.playerName1;
  } else {
    currentPlayer = gameState.playerName2;
  };
  let e = document.getElementById("whose-turn-text");
  e.innerText = `Turn number ${gameState.turn}.\nIt's ${currentPlayer}'s turn.\nChoose an unoccupied square.`;
  for (let i=1; i<=3; i++) {
    for (let j=1; j<=3; j++) {
      e = document.getElementById(`game-board-square-${i}-${j}`);
      e.innerText = gameState.gameBoard[convertTileAddressToArrayIndex(`game-board-square-${i}-${j}`)];
    }
  }
};

function tileClick(address) {
  console.log("Tile click. Incoming address is ", address);
  let gameSquareIndex = convertTileAddressToArrayIndex(address);
  console.log("That's array element ", gameSquareIndex);

  if (checkSquare(gameSquareIndex)) { 
    //gameState.clickedID = gameSquareIndex;
    gamePlay(gameSquareIndex);    
  } else {
    invalidMove();
  }
};

function convertTileAddressToArrayIndex(address) {
  //console.log("You clicked a button! ", address, ", to be specific.");
  let gameSquareIndex = 0;

  switch (address) {
    case "game-board-square-1-1":
      //console.log("That translates to array index 0.);
      gameSquareIndex = 0;
      break;
    case "game-board-square-1-2":
      gameSquareIndex = 1;
      break;
    case "game-board-square-1-3":
      gameSquareIndex = 2;
      break;
    case "game-board-square-2-1":
      gameSquareIndex = 3;
      break;
    case "game-board-square-2-2":
      gameSquareIndex = 4;
      break;
    case "game-board-square-2-3":
      gameSquareIndex = 5;
      break;
    case "game-board-square-3-1":
      gameSquareIndex = 6;
      break;
    case "game-board-square-3-2":
      gameSquareIndex = 7;
      break;
    case "game-board-square-3-3":
      gameSquareIndex = 8;
      break;
  }; // end case-switch

  return(gameSquareIndex);
  // console.log("Square clicked was ", address);
  // console.log("That translates to game board array element ", gameSquareIndex);
};

function invalidMove() {
  console.log("That's an invalid move.");
  const showInvalidMove = new bootstrap.Modal("#invalidMoveModal");
  showInvalidMove.show("invalidMoveModalTrigger");
  // this will work the same as the newGame function as far as the modal is concerned.
}

function gameOver() {
  console.log("Game over!");
  const showGameOver = new bootstrap.Modal("#gameOverModal");
  showGameOver.show("gameOverModalTrigger");
}

function checkSquare(square) {
  console.log("Welcome to the checkSquare function!");
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
          gameOver();
      }        
  };

function newGame() {
  //console.log("This is the new game function.");
  gameState.playerName1 = "X";
  gameState.playerName2 = "O";
  gameState.gameBoard = ["", "", "", "", "", "", "", "", ""];
  gameState.gameOver = false;
  gameState.turn = 1;
  gameState.whoseTurn = "X";

  const showNewGame = new bootstrap.Modal("#newGameModal");
  showNewGame.show("newGameModalTrigger");
  updateDisplay();
};

function gamePlay(address) {
  console.log("Incoming address is ", address);
  if (gameState.gameOver !== true) {
    gameState.gameBoard[address] = gameState.whoseTurn;
    gameState.turn++;
    checkForWin(gameState.whoseTurn);
    if (gameState.whoseTurn == "X") {
        gameState.whoseTurn = "O";
    } else {
        gameState.whoseTurn = "X";
    };
  };
  updateDisplay();
};

function buildUI() {
    // Creates HTML elements
  
    function createElement(parentID, typeOfElement, bootstrapClasses, idString, innerText = "") {
      let target = document.getElementById(parentID);
      let newElement = document.createElement(typeOfElement);
      newElement.classList.add(...bootstrapClasses);
      newElement.setAttribute("id", idString);
      if (innerText != "") {
        newElement.innerText = innerText;
      }
      target.appendChild(newElement);
    };
  
    function createNavToggle() {
      let target = document.getElementById('nav-bar-container');
      let newButton = document.createElement('button');
      newButton.classList.add('navbar-toggler');
      newButton.setAttribute('type', 'button');
      newButton.setAttribute('data-bs-toggle', 'collapse');
      newButton.setAttribute('data-bs-target', '#nav-menu');
      newButton.setAttribute('id', 'hamburger');
      target.appendChild(newButton);
    }

    // function genericModalToggle(incomingID) {

    // };
  
    function addModalTrigger(elementID, destination) {
      let e = document.getElementById(elementID);
      e.classList.add("btn");
      //e.classList.add("btn-primary");
      e.setAttribute("data-bs-toggle", "modal");
      e.setAttribute("data-bs-target", ("#"+destination));
    };
  
    function addModalCloseButton(divIn) {
      let e = document.getElementById(divIn);
      e.setAttribute("type", "button");
      e.setAttribute("data-bs-dismiss", "modal");
      e.setAttribute("aria-label", "Close");
    };
  
    // Main Application Container
    createElement("app", "div", ["container"], "appContainer");
  
    // Navigation Bar
    createElement("appContainer", "nav", ['navbar', 'navbar-expand-sm', 'py-3'], "navbar");
    createElement("navbar", "div", ["container"], "nav-bar-container");
    createElement("nav-bar-container", "h1", ["navbar-brand", "display-5"], "navbarBrand", "Roger's Tic-Tac-Toe");
    createNavToggle();
    createElement("hamburger", "span", ["navbar-toggler-icon"], "hamburger-icon");
    createElement("nav-bar-container", "div", ["collapse", "navbar-collapse"], "nav-menu");
    createElement("nav-menu", "ul", ["navbar-nav", "ms-auto"], "nav-list");
    createElement("nav-list", "li", ["nav-item"], "nav-list-item-1");
    createElement("nav-list-item-1", "button", ["btn", "btn-outline-dark"], "about-link", "About");
    addModalTrigger("about-link", "aboutModal");
    createElement("nav-list", "li", ["nav-item"], "nav-list-item-2");
    createElement("nav-list-item-2", "button", ["btn", "btn-outline-dark"], "contact-link", "Contact");
    addModalTrigger("contact-link", "contactModal");
  
    // Title Box
    createElement("appContainer", "div", ["row"], "title-box");
    createElement("title-box", "div", ["row", "d-block", "align-items-center", "display-6"], "title-box-row");
    createElement("title-box-row", "p", ["text-center"], "title-text", "Tic-Tac-Toe");

    // Whose Turn?
    createElement("appContainer", "div", ["row"], "whose-turn-row");
    createElement("whose-turn-row", "div", ["col"], "whose-turn-col");
    createElement("whose-turn-col", "p", ["text-center"], "whose-turn-text");     // whose-turn-text
  
    // Game Board
    createElement("appContainer", "div", ["row"], "main-game-board-container");

    for (let i=1; i<=3; i++) {
    createElement("main-game-board-container", "div", ["row"], `game-board-row-${i}`);
    let tile = document.getElementById(`game-board-row-${i}`);
    tile.setAttribute("style", "height: 20vh");
      for (let j=1; j<=3; j++) {
        createElement(`game-board-row-${i}`, "div", ["col-4", "border", "border-dark"], `game-board-square-${i}-${j}`);
        let gameSquare = document.getElementById(`game-board-square-${i}-${j}`);
        let eventHandler = "tileClick(" + `'game-board-square-${i}-${j}')`;
        gameSquare.setAttribute("onclick", eventHandler);
      };
    };

    // Reset Button
    createElement("appContainer", "div", ["row", "align-items-center"], "reset-button-row");
    let resetRow = document.getElementById("reset-button-row");
    resetRow.setAttribute("style", "height: 20vh");
    createElement("reset-button-row", "div", ["col", "text-center"], "reset-button-col");
    createElement("reset-button-col", "button", ["btn", "btn-primary"], "reset-button", "Reset Game");
    let resetButton = document.getElementById("reset-button");
    resetButton.setAttribute("onclick", "newGame()");

    // Footer (Attribution of FavIcon and API)
    createElement("app", "footer", [], "footer-info");
    createElement("footer-info", "h6", ["text-center", "fixed-bottom"], "favicon-attribution", "FavIcon provided by https://www.flaticon.com/free-icons/toy\nToy icons created by Freepik - Flaticon");
  
    // Non-Button-Activated Modals
    createElement("appContainer", "div", [], "invalidMoveTrigger");
    addModalTrigger("invalidMoveTrigger", "invalidMoveModal");
    createElement("appContainer", "div", [], "newGameModalTrigger");
    addModalTrigger("newGameModalTrigger", "newGameModal");

    // About Modal
    createElement("appContainer", "div", ["modal", "fade"], "aboutModal");
    createElement("aboutModal", "div", ["modal-dialog"], "aboutDialog");
    createElement("aboutDialog", "div", ["modal-content"], "aboutContent");
    createElement("aboutContent", "div", ["modal-header"], "aboutHeader");
    createElement("aboutHeader", "h5", ["modal-title"], "aboutTitle", "About Roger's Tic-Tac-Toe");
    createElement("aboutHeader", "button", ["btn-close"], "aboutHeaderBtn");
    addModalCloseButton("aboutHeaderBtn");
    createElement("aboutContent", "div", ["modal-body"], "aboutBody", "Roger's Tic-Tac-Toe\nAwesome Inc. Web Developer Bootcamp\nFall 2022\nMIT License");
    createElement("aboutContent", "div", ["modal-footer"], "aboutFooter");
    createElement("aboutFooter", "button", ["btn", "btn-secondary"], "aboutFooterCloseButton", "Dismiss");
    addModalCloseButton("aboutFooterCloseButton");
  
    // Contact Modal
    createElement("appContainer", "div", ["modal", "fade"], "contactModal");
    createElement("contactModal", "div", ["modal-dialog"], "contactDialog");
    createElement("contactDialog", "div", ["modal-content"], "contactContent");
    createElement("contactContent", "div", ["modal-header"], "contactHeader");
    createElement("contactHeader", "h5", ["modal-title"], "contactTitle", "Contact the Developer");
    createElement("contactHeader", "button", ["btn-close"], "contactHeaderBtn");
    addModalCloseButton("contactHeaderBtn");
    createElement("contactContent", "div", ["modal-body"], "contactBody", "Roger Mullins\nrogermullins.mba@gmail.com");
    createElement("contactContent", "div", ["modal-footer"], "contactFooter");
    createElement("contactFooter", "button", ["btn", "btn-secondary"], "contactFooterCloseButton", "Dismiss");
    addModalCloseButton("contactFooterCloseButton");
    
    // Invalid Move Modal
    createElement("appContainer", "div", ["modal", "fade"], "invalidMoveModal");
    createElement("invalidMoveModal", "div", ["modal-dialog"], "invalidMoveDialog");
    createElement("invalidMoveDialog", "div", ["modal-content"], "invalidMoveContent");
    createElement("invalidMoveContent", "div", ["modal-header"], "invalidMoveHeader");
    createElement("invalidMoveHeader", "h5", ["modal-title"], "invalidMoveTitle", "Error");
    createElement("invalidMoveHeader", "button", ["btn-close"], "invalidMoveHeaderBtn");
    addModalCloseButton("invalidMoveHeaderBtn");
    createElement("invalidMoveContent", "div", ["modal-body"], "invalidMoveBody", "Invalid move. Please select again.");
    createElement("invalidMoveContent", "div", ["modal-footer"], "invalidMoveFooter");
    createElement("invalidMoveFooter", "button", ["btn", "btn-secondary"], "invalidMoveFooterCloseButton", "Dismiss");
    addModalCloseButton("invalidMoveFooterCloseButton");
    // addModalTrigger("invalidMove", "contactModal"); THIS IS BROKEN

    // New Game Modal
    createElement("appContainer", "div", ["modal", "fade"], "newGameModal");
    createElement("newGameModal", "div", ["modal-dialog"], "newGameDialog");
    createElement("newGameDialog", "div", ["modal-content"], "newGameContent");
    createElement("newGameContent", "div", ["modal-header"], "newGameHeader");
    createElement("newGameHeader", "h5", ["modal-title"], "aboutTitle", "Tic-Tac-Toe: New Game");
    createElement("newGameHeader", "button", ["btn-close"], "newGameHeaderBtn");
    addModalCloseButton("newGameHeaderBtn");
    createElement("newGameContent", "div", ["modal-body"], "newGameBody", "This is the new game modal!");

    /* Man I really wanted to use this. Apparently there's no good way to retrieve form data.

    // Player Names Input
    createElement("newGameContent", "form", ["p-2"], "player-names-form");
    createElement("player-names-form", "div", ["mb-3"], "player-names-1-label-div");
    createElement("player-names-form", "input", ["form-control"], "player-name-1-input-box");
    let playerName1InputBox = document.getElementById("player-name-1-input-box");
    playerName1InputBox.setAttribute("aria-describedby", "Player Name One");
    createElement("player-names-1-label-div", "label", ["form-label"], "player-name-1-label", "Player 1 Name");
    let playerName1Label = document.getElementById("player-name-1-label");
    playerName1Label.setAttribute("for", "player-name-1-input-box");
    createElement("player-names-1-label-div", "div", ["form-text"], "player-1-helper-text", "Leave blank to accept default (X)");
    createElement("player-names-form", "div", ["mb-3"], "player-names-2-input-box-div");
    createElement("player-names-form", "input", ["form-control"], "player-name-2-input-box");
    createElement("player-names-2-input-box-div", "label", ["form-label"], "player-name-2-label", "Player 2 Name");
    let playerName2Label = document.getElementById("player-name-2-label");
    playerName2Label.setAttribute("for", "player-names-2-input-div");
    createElement("player-names-2-input-box-div", "div", ["form-text"], "player-2-helper-text", "Leave blank to accept default (O)");
    createElement("player-names-form", "button", ["btn", "btn-primary"], "player-names-form-button", "Let's Play!");
    let playerNamesFormButton = document.getElementById("player-names-form-button");
    //let eventHandler = "tileClick(" + `'game-board-square-${i}-${j}')`;
    let player1Parameter = document.getElementById("player-name-1-input-box");
    let player2Parameter = document.getElementById("player-name-2-input-box");
    let player1ParameterValue = player1Parameter.value;
    let player2ParameterValue = player2Parameter.value;
    let changeNamesParameters = "updateNames(" + player1ParameterValue + ", " + player2ParameterValue +")";
    playerNamesFormButton.setAttribute("onclick", changeNamesParameters);
    playerNamesFormButton.setAttribute("type", "submit");

    */
    createElement("newGameContent", "div", ["modal-footer"], "newGameFooter");
    createElement("newGameFooter", "button", ["btn", "btn-secondary"], "newGameFooterCloseButton", "Dismiss");
    addModalCloseButton("newGameFooterCloseButton");

    // Invalid Move Modal
    createElement("appContainer", "div", ["modal", "fade"], "gameOverModal");
    createElement("gameOverModal", "div", ["modal-dialog"], "gameOverDialog");
    createElement("gameOverDialog", "div", ["modal-content"], "gameOverContent");
    createElement("gameOverContent", "div", ["modal-header"], "gameOverHeader");
    createElement("gameOverHeader", "h5", ["modal-title"], "gameOverTitle", "Error");
    createElement("gameOverHeader", "button", ["btn-close"], "gameOverHeaderBtn");
    addModalCloseButton("gameOverHeaderBtn");
    createElement("gameOverContent", "div", ["modal-body"], "gameOverBody", "Game Over!");
    createElement("gameOverContent", "div", ["modal-footer"], "gameOverFooter");
    createElement("gameOverFooter", "button", ["btn", "btn-secondary"], "gameOverFooterCloseButton", "Dismiss");
    addModalCloseButton("gameOverFooterCloseButton");
};

function updateNames(player1, player2) {
  console.log("This is the updateNames function.");
  console.log("Player 1: ", player1);
  console.log("Player 2: ", player2);
  //updateDisplay();
};

  buildUI();
  newGame();
  updateDisplay();
  //const myModalAlternative = new bootstrap.Modal('#myModal', options)
