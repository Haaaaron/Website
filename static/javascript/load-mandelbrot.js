let mandelbrot;
let box = null;

function preload() {

  let url = "/data/-2_1_-1_1";
  mandelbrot = loadJSON(url);
  console.log(mandelbrot.set)
}

function setup() {
  
  var myCanvas = createCanvas(mandelbrot.width, mandelbrot.height);
  myCanvas.parent("canvasContainer")
  drawMandelbrot(mandelbrot);
}

function keyPressed() {
  url = "/data/-0.01_0.01_-1_-0.8"
  if (key == 'l') loadJSON(url, drawMandelbrot);
}

function drawMandelbrot(data) {
  resizeCanvas(data.width,data.height)
  console.log(data.set)
  for (var i = 0; i< data.height; i++) {
    for (var j = 0; j<data.width; j++){
      stroke(data.set[i][j]);
      point(j,i);

    }
  }
  // for (i = 0; i < mandelbrot.set.length; i++) {
  //   pixels[i*4] = mandelbrot.set[i];
  //   pixels[i*4 + 1] = mandelbrot.set[i];
  //   pixels[i*4 + 2] = mandelbrot.set[i];
  //   pixels[i*4 + 3] = mandelbrot.set[i];
  // }

}

$('canvasControls').onmousedown = function(e)
    {
      if ( box == null )
        box = [e.clientX, e.clientY, 0, 0];
    }

$('canvasControls').onmousemove = function(e)
{
  if ( box != null ) {
    var c = ccanvas.getContext('2d');
    c.lineWidth = 1;

    // clear out old box first
    c.clearRect(0, 0, ccanvas.width, ccanvas.height);

    // draw new box
    c.strokeStyle = '#FF3B03';
    box[2] = e.clientX;
    box[3] = e.clientY;
    c.strokeRect(box[0], box[1], box[2]-box[0], box[3]-box[1]);
  }
}






