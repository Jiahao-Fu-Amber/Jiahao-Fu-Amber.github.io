let pg;
let pgSize;
let fontSize;
let particles = [];
let particlesNum = 500;
const palette = ["#236e96", "#15b2d3", "#ffd700", "#f3872f", "#ff598f"];

function setup() {
	createCanvas(windowWidth, windowHeight);

	pg = createGraphics(width, height);
	pg.textAlign(CENTER, CENTER);

	fontSize = (width > height ? width : height) * 0.2;

	pg.fill(255);
	pg.noStroke();
	pg.rect(0, 0, pg.width, pg.height);

	pg.strokeJoin(ROUND);
	pg.textSize(fontSize);

	pg.stroke(0);
	pg.strokeWeight(10);

	pg.erase(40, 255);
	pg.text("I love eat", pg.width / 2, pg.height / 4);
	pg.noErase();

	pg.erase(255, 40);
	pg.text("Ilovesleep", pg.width / 2, pg.height * 3 / 4);
	pg.noErase();


	imageMode(CENTER);
	for (let i = 0; i < particlesNum; i++) {
		particles.push(new Particle());
	}
}

function draw() {
	background(255);

	for (let i = 0; i < particles.length; i++) {
		particles[i].move();
		particles[i].display();
	}

	image(pg, width / 2, height / 2);
}

class Particle {
	constructor() {
		this.s = random(5, 100);
		this.x = random(width / 2 - pg.width / 2, width / 2 + pg.width / 2 - this.s);
		this.y = random(height / 2 - pg.height / 2, height / 2 + pg.height / 2 - this.s);

		this.speed = random(1, 3);
		this.sign = random(1) >= 0.5 ? -1 : 1;

		this.N = floor(random(2));
		this.c = random(palette);
	}

	move() {
		if (this.N == 0) {
			this.x += this.sign * this.speed;
		} else {
			this.y += this.sign * this.speed;
		}

		if (this.x < width / 2 - pg.width / 2 || this.x > width / 2 + pg.width / 2 - this.s ||
			this.y < height / 2 - pg.height / 2 || this.y > height / 2 + pg.height / 2 - this.s) {
			this.speed *= -1;
		}
	}

	display() {
		fill(this.c);
		noStroke();
		rect(this.x, this.y, this.s, this.s);
	}
}
