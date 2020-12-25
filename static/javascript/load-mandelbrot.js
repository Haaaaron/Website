let mandelbrot;
let box = null;
var ccanvas = $('#canvasControls');

function preload() {

  let url = "/data/-2_1_-1_1";
  mandelbrot = loadJSON(url);

}
console.log(mandelbrot)
function setup() {
  
  var myCanvas = createCanvas(mandelbrot.width, mandelbrot.height);
  myCanvas.parent("canvasContainer");
  myCanvas.style("z-index:0");
  console.log(myCanvas.position)

  var cccanvas = select('#canvasContainer');
  var ccanvas = select('#canvasControls');
  cccanvas.size(mandelbrot.width,mandelbrot.height)
  ccanvas.style("height: inherit");
  ccanvas.style("width: inherit");
  ccanvas.position(100,100);
  console.log(ccanvas.height);
  drawMandelbrot(mandelbrot);


}

function keyPressed() {

  url = "/data/-0.01_0.01_-1_-0.8"
  if (key == 'l') loadJSON(url, drawMandelbrot);

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
  $('#canvasControls').mousedown(function(e)
    {
      console.log(box)
      if ( box == null )
        box = [e.clientX, e.clientY, 0, 0];
    });

  $('#canvasControls').mousemove(function(e)
  {
    if ( box != null ) {
      var c = ccanvas[0].getContext('2d');
      console.log(c)
      c.lineWidth = 0.5;

      // clear out old box first
      c.clearRect(box[0], box[1], ccanvas.width, ccanvas.height);

      // draw new box
      c.strokeStyle = '#ED6410';
      box[2] = e.clientX;
      box[3] = e.clientY;
      c.strokeRect(box[0], box[1], box[2]-box[0], box[3]-box[1]);
    }
  });
}); 






