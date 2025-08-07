let juncu;
let merda = [0, 0];
let jumento = 0;

function preload() {
  // Carregar imagem no preload (melhor prática)
  juncu = loadImage("da70793080916aa33d313bcc5b427d7e.png");
}

function setup() {
  createCanvas(windowWidth, windowHeight);
  noScroll(); // remove scroll
}

function draw() {
  jumento += 0.08;
  background(220);

  merda[0] = (windowWidth / 2 - 265 / 2) + 20 * Math.cos(jumento);
  merda[1] = (windowHeight / 2 - 257 / 2) + 20 * Math.sin(jumento);

  image(juncu, merda[0], merda[1]);
  text("jancu careca 😍", merda[0] + 100, merda[1] + 280);
}

function windowResized() {
  resizeCanvas(windowWidth, windowHeight);
}
