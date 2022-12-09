let isPlayerOne = true;
function tilePress(tile) {
	if (tile.innerHTML == "") {
		if (isPlayerOne) {
			tile.innerHTML = "X";
		} else {
			tile.innerHTML = "O";
		}
		tile.classList.add("active");
		console.log("Button works");
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
