const container = document.querySelector("#gridcontainer");
const gridBtn = document.getElementById("gridbtn");
gridBtn.addEventListener("click", resizeGrid);
const drawingSquares = [];

gridInitialize(16);

function resizeGrid(){
  let size;
  do{
  size = Number(prompt("Enter grid size (100 max)"));
  }while(size <= 0 || size > 100 || Number.isNaN(size))
  gridInitialize(size);
}

function gridClear(){
  drawingSquares.forEach((elem) => elem.remove());
  return;
}


function gridInitialize(gridSize){
  if(drawingSquares)gridClear();
  width = (window.innerHeight - 200)/gridSize + "px";
  console.log(width)
  height = width;
  for(let i = 0; i < gridSize;i++){
    let row = document.createElement("div")
    container.appendChild(row);
    for(let j = 0; j < gridSize;j++){
      let part = document.createElement("div")
      part.classList.add("gridpart");
      part.style.width = width;
      part.style.height = height;
      row.appendChild(part);
      drawingSquares.push(part);
    }
  }
  drawingSquares.forEach(function(elem){
    elem.addEventListener("mouseover", colorSquare);
  })
}
function colorSquare(event){
  if(!event.target.style.backgroundColor){
  event.target.style.backgroundColor = getRandomRgb();
  }
  return;
}

function getRandomRgb(){
  let red = Math.floor(Math.random()*140);
  let green = Math.floor(Math.random()*140);
  let blue = Math.floor(Math.random()*140);
  return `rgb(${red},${green},${blue})`;
}