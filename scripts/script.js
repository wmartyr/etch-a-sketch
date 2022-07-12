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
      div.style["border-left"] = "solid 1px black";
      div.style["border-top"] = "solid 1px black";
      if (j === side - 1) {
        div.style["border-right"] = "solid 1px black";
      }
      if (i === side - 1) {
        div.style["border-bottom"] = "solid 1px black";
      }
      rowDiv.appendChild(div);
    }
  }
  paint();
}



//paint on new grid
function paint() {
  let color = "black";
  let cellAction = false;
  const cells = document.querySelectorAll(".cell");
  cells.forEach((cell) => {
    cell.addEventListener("mousedown", () => {
      cellAction = true;
      if (color === "rainbow" || color === "random" || color === "monochrome") {
        console.log("Color: 1 " + color);
        cell.style["background-color"] = getRandomColor(color);
      } else {
        console.log("color 3 " + color);
        cell.style["background-color"] = color;
      }
    });
    cell.addEventListener("mouseover", () => {
      if (cellAction) {
        if (color === "rainbow" || color === "random" || color === "monochrome") {
          cell.style["background-color"] = getRandomColor(color);
        } else {
          cell.style["background-color"] = color;
        }
      }
    });
    cell.addEventListener("mouseup", () => {
      cellAction = false;
    });
  });

  const eraseButton = document.querySelector(".erase-button");
  eraseButton.addEventListener("click", () => {
    color = "white";
  });

  const shadeButton = document.querySelector(".shade-button");
  shadeButton.addEventListener("click", () => {
    color = "shade";
  });

  const blackButton = document.querySelector(".black-button");
  blackButton.addEventListener("click", () => {
    color = "black";
  });

  const rainbowButton = document.querySelector(".rainbow-button");
  rainbowButton.addEventListener("click", () => {
    color = "rainbow";
  });

  const randomButton = document.querySelector(".random-button");
  randomButton.addEventListener("click", () => {
    color = "random";
  });

  const monoButton = document.querySelector(".mono-button");
  monoButton.addEventListener("click", () => {
    color = "monochrome";
  });

  const clearButton = document.querySelector(".clear-button");
  clearButton.addEventListener("click", () => {
    cells.forEach((cell) => {
      cell.style["background-color"] = "white";
    });
  });
}

function getRandomColor(type) {
  let rainbow = ["#FF0000", "#FF7F00", "#FFFF00", "#00FF00", "#0000FF", "#4B0082", "#9400D3"];
  if (type === "rainbow") {
    return rainbow[Math.floor(Math.random() * rainbow.length)];
  } else if (type === "random") {
    return `rgb(${getRandomNumber(256)}, ${getRandomNumber(256)}, ${getRandomNumber(256)})`;
  } else if (type === "monochrome") {
    let randNum = getRandomNumber(256);
    return `rgb(${randNum}, ${randNum}, ${randNum})`;
  }
}

function getRandomNumber(max) {
  return Math.floor(Math.random() * max);
}

function darkenColor(color) {

}

let side;
createGrid(16);

const sidesButton = document.querySelector(".sides-button");
sidesButton.addEventListener("click", () => {
  side = 0;
  while (side < 2 || side > 100 || (side % 1 !== 0)) {
    side = prompt("Please enter the number of sides in the grid from 2 - 100:");
  }
  createGrid(side);
});
