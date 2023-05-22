document.addEventListener("DOMContentLoaded", function () {
    // Game variables
    var board = [];
    var currentPlayer = "X";
    var gameOver = false;
  
    // Create the board
    var boardContainer = document.querySelector(".board");
    for (var i = 0; i < 9; i++) {
      var cell = document.createElement("div");
      cell.classList.add("cell");
      cell.dataset.index = i;
      cell.addEventListener("click", handleCellClick);
      boardContainer.appendChild(cell);
      board.push("");
    }
  
    // Handle cell click
    function handleCellClick(event) {
      if (gameOver) return;
      var cell = event.target;
      var index = parseInt(cell.dataset.index);
      if (board[index] === "") {
        board[index] = currentPlayer;
        cell.textContent = currentPlayer;
        cell.style.cursor = "not-allowed";
        cell.classList.add("selected");
        checkWin();
        switchPlayer();
        if (currentPlayer === "O" && !gameOver) {
          setTimeout(makeComputerMove, 500);
        }
      }
    }
  
    // Switch the current player
    function switchPlayer() {
      currentPlayer = currentPlayer === "X" ? "O" : "X";
    }
  
    // Check for a win
    function checkWin() {
      var winningCombinations = [
        [0, 1, 2],
        [3, 4, 5],
        [6, 7, 8],
        [0, 3, 6],
        [1, 4, 7],
        [2, 5, 8],
        [0, 4, 8],
        [2, 4, 6],
      ];
  
      for (var i = 0; i < winningCombinations.length; i++) {
        var [a, b, c] = winningCombinations[i];
        if (
          board[a] !== "" &&
          board[a] === board[b] &&
          board[a] === board[c]
        ) {
          gameOver = true;
          highlightWinningCells([a, b, c]);
          setTimeout(function () {
            alert(currentPlayer + " wins!");
          }, 100);
          return;
        }
      }
  
      if (board.every((cell) => cell !== "")) {
        gameOver = true;
        setTimeout(function () {
          alert("It's a tie!");
        }, 100);
      }
    }
  
    // Highlight the winning cells
    function highlightWinningCells(cells) {
      cells.forEach(function (cellIndex) {
        boardContainer.children[cellIndex].classList.add("win");
      });
    }
  
    // Make a random computer move
    function makeComputerMove() {
      var emptyCells = [];
      board.forEach(function (cell, index) {
        if (cell === "") {
          emptyCells.push(index);
        }
      });
      var randomIndex = Math.floor(Math.random() * emptyCells.length);
      var cellIndex = emptyCells[randomIndex];
      var cell = boardContainer.children[cellIndex];
      cell.click();
    }
  });
  