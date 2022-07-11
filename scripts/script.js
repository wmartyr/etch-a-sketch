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
}

//paint on new grid
function paint(paintAction) {
  let cellAction = "none";
  const cells = document.querySelectorAll(".cell");
  cells.forEach((cell) => {
    cell.addEventListener("mousedown", () => {
      cellAction = paintAction;
      cell.classList.add(colorCell(cellAction));
    });
    cell.addEventListener("mouseover", () => {
      cell.classList.add(colorCell(cellAction));
    });
    cell.addEventListener("mouseup", () => {
      cellAction = "none";
    });
  });
}

function colorCell(cellAction) {
  if (cellAction === "paint") {
    return "colorize";
  } else if (cellAction === "erase") {
    return "erase";
  }
}

let side;
createGrid(16);
paint("paint");

const sidesButton = document.querySelector(".sides-button");
sidesButton.addEventListener("click", () => {
  side = 0;
  while (side < 2 || side > 100 || (side % 1 !== 0)) {
    side = prompt("Please enter the number of sides in the grid from 2 - 100:");
  }
  createGrid(side);
  paint("paint");
});

const eraseButton = document.querySelector(".sides-button");
eraseButton.addEventListener("click", () => {
  paint("erase");
});


