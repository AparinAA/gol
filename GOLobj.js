function GameOfLifeObj(n = 40, m = 40, scale = 10) {
	if (new.target === undefined) {
		return new GameOfLifeObj(n, m, scale);
	}

	this.n = n;
	this.m = m;
	this.scale = scale;

	this.canvas = document.getElementById("board");
	this.ctx = this.canvas.getContext("2d");

	this.canvas.height = n * scale;
	this.canvas.width = m * scale;

	this.matrix = new Array(n).fill().map(() => new Array(m).fill(0));

	this.work = false;
	this.id = undefined;
	this.timeG = 0;
	this.counting = false;

	this.drawMatrix();
}

GameOfLifeObj.prototype.drawSquare = function (x, y, size, color) {
	this.ctx.fillStyle = color;
	this.ctx.fillRect(x, y, size - 1, size - 1);
};

GameOfLifeObj.prototype.drawBoard = function (x, y, size, color) {
	this.ctx.strokeStyle = color;
	this.ctx.strokeRect(x, y, size, size);
};

GameOfLifeObj.prototype.drawMatrix = function () {
	const s = this.scale;
	const n = this.n;
	const m = this.m;

	for (let i = 0; i < n; i++) {
		for (let j = 0; j < m; j++) {
			if (this.matrix[i][j]) {
				this.drawSquare(s * j, s * i, s, "black");
			} else {
				this.drawSquare(s * j, s * i, s, "grey");
			}
		}
	}
};

GameOfLifeObj.prototype.calculateNextStep = gameOfLife;

GameOfLifeObj.prototype.startGame = function () {
	let delay = 0.04 * 1000;

	let that = this;

	function drawAndCount() {
		that.id = setTimeout(() => {
			if (that.id && !that.counting) {
				that.drawMatrix();
				startTimeG = performance.now();
				that.counting = true;
				that.calculateNextStep(that.matrix);
				that.counting = false;
				endTimeG = performance.now();
				// delay = Math.min(delay, 100 * (endTimeG - startTimeG));
				// delay = endTimeG - startTimeG;
				that.printTime(endTimeG - startTimeG);

				drawAndCount();
			}
		}, delay);
	}

	if (!this.work) {
		this.work = !this.work;

		let startTimeG = performance.now();
		this.calculateNextStep(this.matrix);
		let endTimeG = performance.now();

		this.printTime(endTimeG - startTimeG);

		drawAndCount();
	} else {
		this.work = !this.work;
		clearInterval(that.id);
	}
};

GameOfLifeObj.prototype.random = function () {
	for (let i = 0; i < this.n; i++) {
		for (let j = 0; j < this.m; j++) {
			this.matrix[i][j] = Math.floor(Math.random() * 2);
		}
	}

	this.drawMatrix();
};

GameOfLifeObj.prototype.reset = function () {
	clearInterval(this.id);

	for (let i = 0; i < this.n; i++) {
		this.matrix[i].fill(0);
	}

	this.work = false;
	this.drawMatrix();
	this.printTime(0);
};

GameOfLifeObj.prototype.resizeW = function (width) {
	this.m = parseInt(width, 10);
	this.canvas.width = this.m * this.scale;

	this.matrix = new Array(this.n).fill().map(() => new Array(this.m).fill(0));
	this.reset();
};

GameOfLifeObj.prototype.resizeH = function (height) {
	this.n = parseInt(height, 10);
	this.canvas.height = height * this.scale;

	this.matrix = new Array(this.n).fill().map(() => new Array(this.m).fill(0));

	this.reset();
};

GameOfLifeObj.prototype.addPoint = function (x, y) {
	this.matrix[Math.floor(y / this.scale)][Math.floor(x / this.scale)] = 1;
	this.drawMatrix();
};

GameOfLifeObj.prototype.printTime = function (time) {
	if (time !== this.timeG) {
		this.timeG = time;
		document.getElementById("time").innerHTML = `${time.toFixed(0)}`;
	}
};
