
async function getJson() {
    let response = await fetch('/data');
    let data = await response.json()
    return data.result;
}

getJson()
  .then(data => let data); 
console.log(heatmap)
function setup() {
    createCanvas(720, 400);
    background(0);
    stroke(255);
    noLoop();
  }

