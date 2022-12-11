let isPlayerOne = true,
	playerScore = 0,
	cpuScore = 0;

let gameBoard = [
	[{ value: "1" }, { value: "2" }, { value: "3" }],
	[{ value: "4" }, { value: "5" }, { value: "6" }],
	[{ value: "7" }, { value: "8" }, { value: "9" }],
];
function resetGame() {
	document.getElementById("player").innerHTML = `Player: ${playerScore}`;
	document.getElementById("computer").innerHTML = `Computer: ${cpuScore}`;
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
	// Check rows
	for (i = 0; i < 3; i++) {
		if (
			gameBoard[i][0].value == gameBoard[i][1].value &&
			gameBoard[i][1].value == gameBoard[i][2].value
		) {
			if (isPlayerOne) {
				alert("Player Wins the Round!");
				playerScore++;
			} else {
				alert("Computer Wins the Round!");
				cpuScore++;
			}

			resetGame();
			console.log("Game Over");
		}
	}
}
