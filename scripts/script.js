let side;
createGrid(16);

const button = document.querySelector(".sidesButton");
button.addEventListener("click", () => {
  side = 0;
  while (!(side >= 2 && side <= 100)) {
    side = prompt("Please enter the number of sides in the grid from 2 - 100:");
  }
    createGrid(side);
})

function createGrid(side) {
  // clear old grid
  const mainGrid = document.querySelector("#main-grid");
  const oldDivs = document.querySelectorAll(".row-setup");
  oldDivs.forEach((oldDiv) => {
    mainGrid.removeChild(oldDiv);
  });

  //create new grid
  for (let i = 0; i < side; i++) {
    const rowDiv = document.createElement("div");
    rowDiv.setAttribute("id", `row${i}`);
    rowDiv.classList.add("row-setup");
    mainGrid.appendChild(rowDiv);

    for (let j = 0; j < side; j++) {
      const div = document.createElement("div");
      div.classList.add("cell");
      div.setAttribute("id", `row${i}-cell${j}`);
      div.style["width"] = `calc(800px / ${side})`;
      div.style["height"] = `calc(800px / ${side})`;
      rowDiv.appendChild(div);
    }
  }

  //paint on new grid
  let cellPaintOn = false;
  const cells = document.querySelectorAll(".cell");
  cells.forEach((cell) => {
    cell.addEventListener("mousedown", () => {
      cellPaintOn = true;
      cell.classList.add(colorCell(cellPaintOn));
    });
    cell.addEventListener("mouseover", () => {
      cell.classList.add(colorCell(cellPaintOn));
    });
    cell.addEventListener("mouseup", () => {
      cellPaintOn = false;
    });
  });
}

function colorCell(cellPaintOn) {
  if (cellPaintOn) {
    return "colorize";
  }
}
