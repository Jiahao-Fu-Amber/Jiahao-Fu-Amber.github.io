const R = 155;
const r = 5;
let x;
let y;

let t = -8;
const num = 4;

let pg;

let theta = 0,
	A, B, C, D;

function setup() {
	console.log("yaya!")
	createCanvas(windowWidth, windowHeight);

	pg = createGraphics(width, height);
	pg.background(255);
	pg.noStroke();
	// pg.colorMode(HSB, 360, 100, 100, 255);

	pg.erase();
	for (let j = 0; j < num; j++) {
		pg.push();
		pg.translate(pg.width / 2, pg.height / 2);

		pg.push();
		pg.translate(R * cos(TWO_PI * j / num), R * sin(TWO_PI * j / num));
		pg.rotate(TWO_PI * j / num);
		for (let i = 0; i < 5000; i++) {
			x = R * sin(9.234 * t) * round(sqrt(cos(cos(5.12 * t))));
			y = R * pow(cos(9.234 * t), 4) * sin(sin(5.12 * t));

			// pg.fill(i % 360, 100, 100, 80);
			pg.ellipse(x, y, r, r);

			t += 0.005;
			if (t > 8) {
				t = -8;
			}
		}
		pg.pop();
		pg.pop();
	}
	pg.noErase();

	colorMode(HSB, 9);
}

function draw() {
	background(255);

	noStroke();
	push();
	translate(width / 2, height / 2);
	for (let i = 0; i < 2000; i++) {
		A = i * 50;
		B = pg.width * 0.15 * abs(sin(A));
		C = cos(A + theta) + 1;
		D = cos(A * 3) - cos(A * 5 + theta);
		fill(9 * abs(sin(i)), 5, 9, 1);
		circle(pg.width * C * sin(i + D), pg.width * C * cos(i + D), B);
	}
	pop();

	image(pg, 0, 0);

	theta += .01;
}
