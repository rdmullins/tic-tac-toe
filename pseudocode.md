# Tic-Tac-Toe
## by Roger Mullins

### DESCRIPTION
- Create a webpage that recreates the childhood classic game, tic-tac-toe, using JavaScript, HTML, and the Bootstrap CSS framework (minimal custom CSS0
See https://en.wikipedia.org/wiki/Tic-tac-toe for more information.
- For this project, we will be using JavaScript to dynamically render elements, keep track of board status, display win conditions, and manage state.

### OBJECTIVES
- Learn how to use state and events, as well as dynamic rendering, to create a Javascript based TicTacToe game.

### WIREFRAMES
- Use the [wireframes](https://drive.google.com/file/d/1eHwwH_b9VLZCISCSn1M5zH8pfVtkQslz/view?usp=sharing) provided to recreate the User Interface.  Try to deliver the solution as close to the design as possible.

### REQUIREMENTS
To complete the assignment, you must complete the following:
1. The game should let the players know who's turn it is.
1. Game tiles should only be clickable once, and if the game is over they should not be clickable at all.
1. The game should display who wins the game if someone wins, otherwise, say that the game resulted in a tie.
1. There should be a Restart Game button that does not refresh the page (set state).
1. Use the symbols X and O.
1. On each player’s turn, that player places one of their symbols on an unoccupied space by clicking.
1. The game continues until one player places three symbols in a straight line (horizontal, vertical, or diagonal) and wins or there are no remaining available spaces and it is a draw.
1. Only have a single `<div id="app"></div>` in your index.HTML (try to code golf the HTML file)

---

# MoSCoW

|Must Have|Should Have|Could Have|Won't Have
|---|---|---|---|
|Players know whose turn it is|README.md |Use classes |AI? |
|Game tiles only clickable once|Players can enter names |Track wins/losses (local storage) |Connect 4 Variation |
|Notification on game end (win/tie)| |Link to rules in modal |Go Variation (see Alyssa's post) |
|'Restart Game' button (resets state)| | | |
|Uses X and O| | | |
|Players interact via clicks| | | | 
|Game continues until win state or tie| | | |
|Single `div` in HTML (dynamic element creation)| | | |


---

# PSEUDOCODE

## Objects

### gameState
- playerTurn
- updateState()
- boardState (see below)
- playerName1 (initially "X")
- playerName2 (initially "Y")

### boardState XX DID NOT USE XX
Generally each square has three possible states:
- Clear
- X
- O

Also need to track
- Active (boolean)~

## Functions

### checkWin()
- Hard-code :-( all potential winning outcomes
- Run check on each update

### updateState()

### updateBoardState()

### updateDisplay()

### handleClick()

### changeTurn()

### endGame()
---
# UX Walkthrough
1. BEGIN
1. CREATE navbar
1. SELECT game type (modal w/ radio buttons)
    1. BEGIN
    1. One player (vs computer)
    1. Two player
    1. UPDATE game state
    1. END
1. SET player information (modal with combination text input or radio button for default)
    1. BEGIN
    1. IF two-player game:
        1. BEGIN
        1. GET player1 OR keep default
        1. GET player2 OR keep default
        1. UPDATE gameState
        1. END
    1. IF one-player:
        1. BEGIN
        1. GET player1 or keep default
        1. END
    1. END
1. INITIALIZE the game
    1. BEGIN
    1. CREATE blank board
    1. CREATE turn indicator
    1. CREATE wins record (inside gameState)
    1. CREATE restart game button
    1. ADD event handlers
    1. INITIALIZE win states
    1. END
1. GAME PLAY
    1. BEGIN
    1. SET current player in gameState
    1. PLAYER turn
        1. BEGIN
        1. UPDATE 'whose turn' indicator
        1. -> Player clicks a square
            1. BEGIN
            1. CHECK if square is valid
                1. BEGIN
                1. IF square is occupied already, NOT valid
                1. END
            1. UPDATE game board
            1. CHECK for win
            1. UPDATE gameState
            1. INCREMENT turn count
            1. SWITCH current player
            1. END
        1. END (loop back until game over)
    1. UPDATE wins/loss information display
    1. DISPLAY 'new game?' modal
    1. END
1. END


Stretch - add CSS transition on block so it rotates

# AI?
Let the computer play by selecting one of the squares on the "O" turn.

Add a mode to the gameObject
X plays like normal
On O's turn:
check the gameBoard array and note empty squares
randomly pick one of those squares
tileClick() 
Set a timeout so it's more realistic?
