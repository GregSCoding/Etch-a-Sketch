const container = document.querySelector("#gridcontainer");
const gridBtn = document.getElementById("gridbtn");
gridBtn.addEventListener("click", resizeGrid);
const drawingSquares = [];
const rows = [];
let drawingMode;

const menuBtns = document.getElementsByName("option");
menuBtns.forEach((elem) =>{
  elem.addEventListener("click", getMenuValue);
})

gridInitialize(16);
getMenuValue();


function getMenuValue(){
  menuBtns.forEach(function(elem){
    if(elem.checked)drawingMode = elem.value;
  })
}

function resizeGrid(){
  let size;
  do{
  size = Number(prompt("Enter grid size (100 max)"));
  }while(size <= 0 || size > 100 || Number.isNaN(size))
  gridInitialize(size);
}

function gridClear(){
  drawingSquares.forEach((elem) => elem.remove());
  rows.forEach((elem) => elem.remove());
  return;
}

function gridInitialize(gridSize){
  if(drawingSquares)gridClear();
  for(let i = 0; i < gridSize;i++){
    let row = document.createElement("div");
    rows.push(row);
    row.classList.add("row");;
    for(let j = 0; j < gridSize;j++){
      let part = document.createElement("div")
      part.classList.add("gridpart");
      part.colored = false;
      row.appendChild(part);
      drawingSquares.push(part);
    }
    container.appendChild(row)
  }
  drawingSquares.forEach(function(elem){
    elem.addEventListener("mouseover", actOnSquare);
  })
}

function actOnSquare(event){
  if(drawingMode === "DRAW" && !event.target.colored){
    event.target.style.backgroundColor = "black";
    event.target.colored = true;
  }
  if(drawingMode === "ERASE"){
    event.target.style.backgroundColor = "white";
    event.target.colored = false;
  }
  if(drawingMode ==="RAINBOW" && !event.target.colored){
    event.target.style.backgroundColor = getRandomRgb();
    event.target.colored = true;
  }
  return;
}

function getRandomRgb(){
  let red = Math.floor(Math.random()*200);
  let green = Math.floor(Math.random()*200);
  let blue = Math.floor(Math.random()*200);
  return `rgb(${red},${green},${blue})`;
}