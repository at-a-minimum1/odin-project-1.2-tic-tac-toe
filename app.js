// Game is the only global variable
const game = createGame();

function createGame() {
	let isPlayerOne = true,
		playerScore = 0,
		cpuScore = 0;

	let gameBoard = [
		[{ value: "1" }, { value: "2" }, { value: "3" }],
		[{ value: "4" }, { value: "5" }, { value: "6" }],
		[{ value: "7" }, { value: "8" }, { value: "9" }],
	];
	return {
		isPlayerOne,
		playerScore,
		cpuScore,
		gameBoard,
	};
}
function resetGame() {
	game.gameBoard = [
		[{ value: "1" }, { value: "2" }, { value: "3" }],
		[{ value: "4" }, { value: "5" }, { value: "6" }],
		[{ value: "7" }, { value: "8" }, { value: "9" }],
	];

	document.getElementById(
		"player"
	).innerHTML = `Player One: ${game.playerScore}`;
	document.getElementById(
		"computer"
	).innerHTML = `Player Two: ${game.cpuScore}`;
	let gameBoardDOM = document.getElementsByClassName("tile");
	Array.from(gameBoardDOM).forEach((tile) => {
		tile.innerHTML = "";
		tile.classList.remove("active");
	});
}
function tilePress(row, col, tile) {
	if (tile.innerHTML == "") {
		if (game.isPlayerOne) {
			tile.innerHTML = "X";
			game.gameBoard[row][col].value = "X";
		} else {
			tile.innerHTML = "O";
			game.gameBoard[row][col].value = "O";
		}
		tile.classList.add("active");
		isGameOver();
		switchPlayer();
	}
}
function isGameOver() {
	for (i = 0; i < 3; i++) {
		// Check rows for winner
		if (
			game.gameBoard[i][0].value == game.gameBoard[i][1].value &&
			game.gameBoard[i][1].value == game.gameBoard[i][2].value
		) {
			updateScore();
		}
		// Check columns for winner
		if (
			game.gameBoard[0][i].value == game.gameBoard[1][i].value &&
			game.gameBoard[1][i].value == game.gameBoard[2][i].value
		) {
			updateScore();
		}
	}
	// Check diagonals for winner
	if (
		game.gameBoard[0][0].value == game.gameBoard[1][1].value &&
		game.gameBoard[1][1].value == game.gameBoard[2][2].value
	) {
		updateScore();
	}
	if (
		game.gameBoard[0][2].value == game.gameBoard[1][1].value &&
		game.gameBoard[1][1].value == game.gameBoard[2][0].value
	) {
		updateScore();
	}
	// Check to see if it is a draw
	if (Array.from(document.getElementsByClassName("active")).length == 9) {
		alert("It's a draw!");
		resetGame();
	}
}
function updateScore() {
	if (game.isPlayerOne) {
		game.playerScore++;
		if (game.playerScore == 3) {
			game.playerScore = 0;
			game.cpuScore = 0;
			alert("Player One Wins the Game!");
		} else {
			alert("Player One Wins the Round!");
		}
	} else {
		game.cpuScore++;
		if (game.cpuScore == 3) {
			game.playerScore = 0;
			game.cpuScore = 0;
			alert("Player Two Wins the Game!");
		} else {
			alert("Player Two Wins the Round!");
		}
	}

	resetGame();
}
function switchPlayer() {
	if (game.isPlayerOne) {
		game.isPlayerOne = false;
	} else {
		game.isPlayerOne = true;
	}
}
