let game = new GameOfLifeObj(40, 40, 10);

game.canvas.addEventListener("click", function (event) {
	if (!game.work) {
		const clickX = event.clientX - game.canvas.getBoundingClientRect().left;
		const clickY = event.clientY - game.canvas.getBoundingClientRect().top;
		game.addPoint(clickX, clickY);
	}
});

const start = document.getElementById("start");
const random = document.getElementById("random");
const selectScale = document.getElementById("scale");
const resizeW = document.getElementById("resize_W");
const valueW = document.getElementById("value_W");
const resizeH = document.getElementById("resize_H");
const valueH = document.getElementById("value_H");
const reset = document.getElementById("reset");

start.addEventListener("click", (e) => {
	game.startGame();
});

random.addEventListener("click", () => {
	game.random();
});

resizeW.addEventListener("change", (e) => {
	const width = e.target.value;
	valueW.innerHTML = width;
	game.resizeW(width);
});

resizeH.addEventListener("change", (e) => {
	const height = e.target.value;
	valueH.innerHTML = height;
	game.resizeH(height);
});

reset.addEventListener("click", () => {
	game.reset();
});

selectScale.addEventListener("change", (e) => {
	const n = game.n;
	const m = game.m;
	const scale = parseInt(e.target.value, 10);

	game = new GameOfLifeObj(n, m, scale);
});
