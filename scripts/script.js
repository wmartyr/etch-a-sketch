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
}

//paint on new grid
function paint(color) {
  let cellAction = false;
  const cells = document.querySelectorAll(".cell");
  cells.forEach((cell) => {
    cell.addEventListener("mousedown", () => {
      cellAction = true;
      if (color === "rainbow") {
        cell.style["background-color"] = getRandomColor(color);
      } else {
        cell.style["background-color"] = color;
      }
    });
    cell.addEventListener("mouseover", () => {
      if (cellAction) {
        if (color === "rainbow") {
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
}

function getRandomColor(type) {
  let rainbow = ["#FF0000", "#FF7F00", "#FFFF00", "#00FF00", "#0000FF", "#4B0082", "#9400D3"];
  if (type === "rainbow") {
    return rainbow[Math.floor(Math.random() * rainbow.length)];
  }
}

let side;
createGrid(16);
paint("black");

const sidesButton = document.querySelector(".sides-button");
sidesButton.addEventListener("click", () => {
  side = 0;
  while (side < 2 || side > 100 || (side % 1 !== 0)) {
    side = prompt("Please enter the number of sides in the grid from 2 - 100:");
  }
  createGrid(side);
  paint("black");
});

const eraseButton = document.querySelector(".erase-button");
eraseButton.addEventListener("click", () => {
  paint("white");
});

const blackButton = document.querySelector(".black-button");
blackButton.addEventListener("click", () => {
  paint("black");
});

const rainbowButton = document.querySelector(".rainbow-button");
rainbowButton.addEventListener("click", () => {
  paint("rainbow");
});