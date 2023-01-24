const container = document.querySelector("#gridcontainer");
for(let i=0;i<16;i++){
  let row = document.createElement("div")
  container.appendChild(row);
  for(let j=0;j<16;j++){
  let part = document.createElement("div")
  part.classList.add("gridpart");
  row.appendChild(part);
  }
}