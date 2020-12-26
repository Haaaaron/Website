let mandelbrot;
let box = null;

var ccanvas = document.getElementById("canvasControls")
ccanvas.width = window.innerWidth;
ccanvas.height = window.innerHeight;

function preload() {

  let url = "/data/-2_1_-1_1";
  mandelbrot = loadJSON(url);

}
function setup() {

  createCanvas(mandelbrot.width,mandelbrot.height)
  drawMandelbrot(mandelbrot);

}

function keyPressed() {

  url = "/data/-0.01_0.01_-1_-0.8"
  if (key == 'l') loadJSON(url, drawMandelbrot);

}

function mouseClicked() {

  console.log(mouseX,mouseY)
}

function drawMandelbrot(data) {

  resizeCanvas(data.width,data.height)
  for (var i = 0; i< data.height; i++) {
    for (var j = 0; j<data.width; j++) {
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

$(document).ready(function()
{     
  
  var ccanvas = $('#canvasControls');
  var c = ccanvas[0].getContext('2d');

  ccanvas.mousedown(function(e) {
      console.log(box)
      if ( box == null )
        box = [e.clientX, e.clientY, 0, 0];
  });

  ccanvas.mousemove(function(e) {
    if ( box != null ) {
      console.log(ccanvas.height)
      c.lineWidth = 1;

      // clear out old box first
      c.clearRect(0, 0, ccanvas[0].width, ccanvas[0].height);
      // draw new box
      c.strokeStyle = '#ED6410';
      box[2] = e.clientX;
      box[3] = e.clientY;
      c.strokeRect(box[0], box[1], box[2]-box[0], box[3]-box[1]);
    }
  });

  ccanvas.mouseup(function(e) {
    if (box != null) {
      c.clearRect(0, 0, ccanvas[0].width, ccanvas[0].height);
      box = null;
    }
  });
}); 






