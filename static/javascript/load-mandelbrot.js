let data;

function preload() {

  let url = "/data";
  data = loadJSON(url);
  console.log(data)
}

function setup() {

  createCanvas(data.width, data.height);
  background(0);
  stroke(255);
  noLoop();
}

function draw() {

  loadPixels();
  for (i = 1; i < data.set.length*4; i++) {
    pixels[i] = data.set[i];
    pixels[i + 1] = data.set[i];
    pixels[i + 2] = data.set[i];
    pixels[i + 3] = data.set[i];
  }
  updatePixels();
}






