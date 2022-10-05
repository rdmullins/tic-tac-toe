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

# PSEUDOCODE

## Objects

### gameState
- playerTurn
- updateState()
- boardState (see below)
- playerName1 (initially "X")
- playerName2 (initially "Y")

### boardState
Generally each square has three possible states:
- Clear
- X
- O

Also need to track
- Active (boolean)

## Functions

### checkWin()
- Hard-code :-( all potential winning outcomes
- Run check on each update

### updateState()

### updateDisplay()



