let juncu
function setup() {
  createCanvas(windowWidth, windowHeight);
  juncu = loadImage("da70793080916aa33d313bcc5b427d7e.png")
}
let merda = [0,0]
let jumento = 0
function draw() {
  jumento += 0.08;
  background(220);
  merda[0] = (windowWidth/2-(265/2)) + 20 * Math. cos(jumento);
  merda[1] = (windowHeight/2-(257/2)) + 20 * Math. sin(jumento);
  text("jancu careca 😍", merda[0] + 100, merda[1] + 280)
  image(juncu, merda[0], merda[1])
  
}