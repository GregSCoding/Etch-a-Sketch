const container = document.querySelector("#gridcontainer");

const drawingSquares = [];
for(let i=0;i<16;i++){
  let row = document.createElement("div")
  container.appendChild(row);
  for(let j=0;j<16;j++){
    let part = document.createElement("div")
    part.classList.add("gridpart");
    row.appendChild(part);
    drawingSquares.push(part);
  }
}
drawingSquares.forEach(function(elem){
  elem.addEventListener("mouseover", colorSquare);
})

function colorSquare(event){
  event.target.style.backgroundColor="rgb(100,100,100)";
  return;
}