const sketchArea = document.querySelector("#sketch-area");
const eraserBtn = document.getElementById("eraser-btn");
const changeColor = document.getElementById("change-color");
const clearCanvas = document.getElementById("clear-canvas");
const rainbowPen = document.getElementById("rainbow-pen");

const GRIDSIDE = 400;
let rows = 16;
let cols = 16;
let currentColor = "#000000";



sketchArea.style.width = `${GRIDSIDE}px`;
sketchArea.style.height = `${GRIDSIDE}px`;


eraserBtn.addEventListener("click", () => {
   currentColor = "#fff";
});



changeColor.addEventListener("input", (e) => {
   currentColor = e.target.value;
});




clearCanvas.addEventListener("click", () => {
   location.reload()
});



rainbowPen.addEventListener("click", () => {
   const colors = ["blue", "red", "green", "purple", "yellow"];
   let randomIndex = Math.floor(Math.random() * colors.length);
   currentColor = colors[randomIndex];
   console.log(`Rainbow pen activated. Current color: ${currentColor}`);
});


function getRandomColor(){
   const colors = ["blue", "red", "green", "purple" , "yellow"];
   let randomIndex = Math.floor(Math.random() * colors.length);
   console.log(currentColor);
   return colors[randomIndex];
}


function createCells(){
   sketchArea.innerHTML = "";
   sketchArea.style.gridTemplateRows = `repeat(${rows}, 1fr)`;
   sketchArea.style.gridTemplateColumns = `repeat(${cols}, 1fr)`;
   for(let i = 0; i < (rows * cols); i++){
      const gridCell = document.createElement("div");
      gridCell.setAttribute("class", "grid");

      gridCell.style.width = `${(GRIDSIDE / cols) - 2}px`
      gridCell.style.height = `${(GRIDSIDE / rows) - 2}px`
      
      gridCell.addEventListener("click", () => {
         gridCell.style.backgroundColor = currentColor;
      })

      sketchArea.appendChild(gridCell);
   }
}
createCells();


function resizeGrid(event){
   const resize = document.querySelector("#resize-btn");
   const size = event.target.value;
   rows = size;
   cols = size;
   createCells(rows, cols);
}
resize.addEventListener("input", resizeGrid);



