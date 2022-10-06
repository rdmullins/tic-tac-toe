// Tic-Tac-Toe
// by Roger Mullins

let gameState = {
  playerName1: "X",
  playerSymbol1: "X",
  playerName2: "O",
  playerSymbol2: "O",
  gameBoard: ["", "", "", "", "", "", "", "", ""],
  clickedID: "";
  turn: 1,
  gameOver: false,
  whoseTurn: 1
};

function tileClick(address) {
  console.log("You clicked a button! ", address, ", to be specific.");
}

function newGame() {
  console.log("This is the new game function.");

}

// show	Manually opens a modal. Returns to the caller before the modal has actually been shown (i.e. before the shown.bs.modal event occurs). Also, you can pass a DOM element as an argument that can be received in the modal events (as the relatedTarget property). (i.e. const modalToggle = document.getElementById('toggleMyModal'); myModal.show(modalToggle).

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

    // Footer (Attribution of FavIcon and API)
    createElement("app", "footer", [], "footer-info");
    createElement("footer-info", "h6", ["text-center", "fixed-bottom"], "favicon-attribution", "FavIcon provided by https://www.flaticon.com/free-icons/toy\nToy icons created by Freepik - Flaticon");
  
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
    createElement("appContainer", "div", ["modal", "fade"], "invalid-move-modal");
    createElement("invalid-move-modal", "div", ["modal-dialog"], "invalidMoveDialog");
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
    createElement("newGameContent", "div", ["modal-footer"], "newGameFooter");
    createElement("newGameFooter", "button", ["btn", "btn-secondary"], "newGameFooterCloseButton", "Dismiss");
    addModalCloseButton("newGameFooterCloseButton");
};

  buildUI();