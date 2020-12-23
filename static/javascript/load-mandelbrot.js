let mandelbrot;

function preload() {

  let url = "/data/-2_1_-1_1";
  mandelbrot = loadJSON(url);
}

function setup() {

  createCanvas(mandelbrot.width, mandelbrot.height);
  background(0);
  stroke(255);
  noLoop();
  drawMandelbrot(mandelbrot);
}

function keyPressed() {
  url = "/data/-1_1_-1_1"
  if (key == 'l') loadJSON(url, drawMandelbrot);
}

function drawMandelbrot(mandelbrot) {
  resizeCanvas(mandelbrot.width,mandelbrot.height)
  loadPixels();
  for (i = 0; i < mandelbrot.set.length; i++) {
    pixels[i*4] = mandelbrot.set[i];
    pixels[i*4 + 1] = mandelbrot.set[i];
    pixels[i*4 + 2] = mandelbrot.set[i];
    pixels[i*4 + 3] = mandelbrot.set[i];
  }
  updatePixels();
}






