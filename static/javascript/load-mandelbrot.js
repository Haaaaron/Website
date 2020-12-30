let mandelbrotInitial;
let mandelbrot;
let mandelbrotPrevious;
let urlInitial = "/data/-2_1_-1_1_1500";
let box = null;
let n = 1500;
let url;

var ccanvas = document.getElementById("canvasControls")
ccanvas.width = window.innerWidth;
ccanvas.height = window.innerHeight;

function preload() {
  mandelbrotInitial = loadJSON(urlInitial);
  mandelbrot = mandelbrotInitial;

}
function setup() {

  var myCanvas = createCanvas(mandelbrot.width,mandelbrot.height);
  myCanvas.parent('mandelbrotSet');
  drawMandelbrot(mandelbrot);

}

function loadMouseCoordinates(coord) {

  url = "/data/" + coord.join("_") + "_" + n;
  mandelbrotPrevious = mandelbrot;
  mandelbrot = loadJSON(url, drawMandelbrot);
}

function drawMandelbrot(data) {
  console.log(url)
  resizeCanvas(data.width,data.height)
  for (var i = 0; i< data.height; i++) {
    for (var j = 0; j<data.width; j++) {
      stroke(data.set[i][j]);
      point(j,i);

    }
  }
}

$(window).ready(function()
{     
  var ccanvas = $('#canvasControls');
  var c = ccanvas[0].getContext('2d');


  ccanvas.mousedown(function(e) {

      if ( box == null && e.clientX <= mandelbrot.width && e.clientY <= mandelbrot.height)
        box = [e.clientX, e.clientY, 0, 0];
  });

  ccanvas.mousemove(function(e) {
    if ( box != null ) {
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

  ccanvas.mouseup(function() {
    if (box != null) {

      //coord=[min_x,max_x,min_y,max_y]
      let coord = mandelbrot.coord;
      let width = mandelbrot.width;
      let lenx = abs(coord[1]-coord[0]);
      let leny = abs(coord[3]-coord[2]);
      let height = mandelbrot.height;
      let Recoord=null;
      let Imcoord=null;

      // clear box
      c.clearRect(0, 0, ccanvas[0].width, ccanvas[0].height);

      //convert pixels to complex coordinates
      Recoord = [box[0]/width*lenx+coord[0],box[2]/width*lenx+coord[0]].sort(function(a, b){return a-b});
      Imcoord = [-box[1]/height*leny+coord[3],-box[3]/height*leny+coord[3]].sort(function(a, b){return a-b});
      box = null;

      loadMouseCoordinates(Recoord.concat(Imcoord))
    }
  });

  $('#reset').click(function() {
    mandelbrot=mandelbrotInitial;
    drawMandelbrot(mandelbrotInitial);
  })

  $('#undo').click(function() {
    mandelbrot=mandelbrotPrevious;
    drawMandelbrot(mandelbrot);
  })
}); 

$(window).resize(function() {
  var ccanvas = document.getElementById("canvasControls")
  ccanvas.width = window.innerWidth;
  ccanvas.height = window.innerHeight;
});






