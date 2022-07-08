let side = 16;

const mainGrid = document.querySelector("#main-grid");
for (let i = 0; i < side; i++) {
  const rowDiv = document.createElement("div");
  rowDiv.setAttribute("id", `row%{i}`);
  rowDiv.classList.add("row-setup");
  mainGrid.appendChild(rowDiv);

  for (let j = 0; j < side; j++) {
    const div = document.createElement("div");
    div.classList.add("cell");
    div.style["width"] = `calc(800px / ${side})`;
    div.style["height"] = `calc(800px / ${side})`;
    div.textContent = `r: ${i}, c: ${j}`;
    rowDiv.appendChild(div);

  }
}
