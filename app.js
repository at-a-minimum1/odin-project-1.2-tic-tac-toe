let isPlayerOne = true,
	playerScore = 0,
	cpuScore = 0;

let gameBoard = [
	[{ value: "1" }, { value: "2" }, { value: "3" }],
	[{ value: "4" }, { value: "5" }, { value: "6" }],
	[{ value: "7" }, { value: "8" }, { value: "9" }],
];
function resetGame() {
	document.getElementById("player").innerHTML = `Player One: ${playerScore}`;
	document.getElementById("computer").innerHTML = `Player Two: ${cpuScore}`;
	gameBoard = [
		[{ value: "1" }, { value: "2" }, { value: "3" }],
		[{ value: "4" }, { value: "5" }, { value: "6" }],
		[{ value: "7" }, { value: "8" }, { value: "9" }],
	];
	let gameBoardDOM = document.getElementsByClassName("tile");
	Array.from(gameBoardDOM).forEach((tile) => {
		tile.innerHTML = "";
		tile.classList.remove("active");
	});
}
function tilePress(row, col, tile) {
	if (tile.innerHTML == "") {
		if (isPlayerOne) {
			tile.innerHTML = "X";
			gameBoard[row][col].value = "X";
		} else {
			tile.innerHTML = "O";
			gameBoard[row][col].value = "O";
		}
		tile.classList.add("active");
		if (isGameOver()) {
			console.log("Game Over");
		}
		switchPlayer();
	}
}
function switchPlayer() {
	if (isPlayerOne) {
		isPlayerOne = false;
	} else {
		isPlayerOne = true;
	}
}
function isGameOver() {
	for (i = 0; i < 3; i++) {
		// Check rows for winner
		if (
			gameBoard[i][0].value == gameBoard[i][1].value &&
			gameBoard[i][1].value == gameBoard[i][2].value
		) {
			updateScore();
		}
		// Check columns for winner
		if (
			gameBoard[0][i].value == gameBoard[1][i].value &&
			gameBoard[1][i].value == gameBoard[2][i].value
		) {
			updateScore();
		}
		// Check diagonals for winner
		if (
			gameBoard[0][0].value == gameBoard[1][1].value &&
			gameBoard[1][1].value == gameBoard[2][2].value
		) {
			updateScore();
		}
		if (
			gameBoard[0][2].value == gameBoard[1][1].value &&
			gameBoard[1][1].value == gameBoard[2][0].value
		) {
			updateScore();
		}
		// Check to see if it is a draw
		if (Array.from(document.getElementsByClassName("active")).length == 9) {
			alert("It's a draw!");
			resetGame();
		}
	}
}

function updateScore() {
	if (isPlayerOne) {
		playerScore++;
		if (playerScore == 3) {
			playerScore = 0;
			cpuScore = 0;
			alert("Player One Wins the Game!");
		} else {
			alert("Player One Wins the Round!");
		}
	} else {
		cpuScore++;
		if (cpuScore == 3) {
			playerScore = 0;
			cpuScore = 0;
			alert("Player Two Wins the Game!");
		} else {
			alert("Player Two Wins the Round!");
		}
	}

	resetGame();
}
