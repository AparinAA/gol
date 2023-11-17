function countLifeNeight(curr, i, j, m, n) {
	let liveNeighbours = 0;

	if (i > 0 || i === 0) {
		//проверяем верхнего соседа
		if (i === 0) {
			if (curr[m - 1][j] === 1 || curr[m - 1][j] === 3) {
				liveNeighbours++;
			}
		} else if (curr[i - 1][j] === 1 || curr[i - 1][j] === 3) {
			liveNeighbours++;
		}
	}

	if (i < m - 1 || i === m - 1) {
		//проверяем нижнего соседа
		if (i === m - 1) {
			if (curr[0][j] === 1 || curr[0][j] === 3) {
				liveNeighbours++;
			}
		} else if (curr[i + 1][j] === 1 || curr[i + 1][j] === 3) {
			liveNeighbours++;
		}
	}

	if (j > 0 || j === 0) {
		//проверяем левого соседа
		if (j === 0) {
			if (curr[i][n - 1] === 1 || curr[i][n - 1] === 3) {
				liveNeighbours++;
			}
		} else if (curr[i][j - 1] === 1 || curr[i][j - 1] === 3) {
			liveNeighbours++;
		}
	}

	if (j < n - 1 || j === n - 1) {
		//проверяем правого соседа
		if (j === n - 1) {
			if (curr[i][0] === 1 || curr[i][0] === 3) {
				liveNeighbours++;
			}
		} else if (curr[i][j + 1] === 1 || curr[i][j + 1] === 3) {
			liveNeighbours++;
		}
	}

	if (i > 0 && j > 0) {
		if (curr[i - 1][j - 1] === 1 || curr[i - 1][j - 1] === 3) {
			liveNeighbours++;
		}
	}

	if (i > 0 && j < n - 1) {
		if (curr[i - 1][j + 1] === 1 || curr[i - 1][j + 1] === 3) {
			liveNeighbours++;
		}
	}
	if (i < m - 1 && j > 0) {
		if (curr[i + 1][j - 1] === 1 || curr[i + 1][j - 1] === 3) {
			liveNeighbours++;
		}
	}

	if (i < m - 1 && j < n - 1) {
		if (curr[i + 1][j + 1] === 1 || curr[i + 1][j + 1] === 3) {
			liveNeighbours++;
		}
	}

	return liveNeighbours;
}

function gameOfLife(board) {
	let m = board.length;
	let n = board[0].length;
	for (let i = 0; i < m; i++) {
		for (let j = 0; j < n; j++) {
			let ln = countLifeNeight(board, i, j, m, n);
			if (board[i][j] == 0) {
				if (ln == 3) {
					board[i][j] = 2;
				}
			} else if (board[i][j] == 1) {
				//<2 -> умер
				//==2 || ==3 выжил
				//>3 -> умер
				if (ln < 2 || ln > 3) {
					board[i][j] = 3;
				}
			}
		}
	}

	//2->1, 3->0
	for (let i = 0; i < m; i++) {
		for (let j = 0; j < n; j++) {
			if (board[i][j] == 2) board[i][j] = 1;
			else if (board[i][j] == 3) board[i][j] = 0;
		}
	}
}
