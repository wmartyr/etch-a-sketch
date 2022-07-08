const mainGrid = document.querySelector("#main-grid");
for (let i = 0; i < 2; i++) {
  const rowDiv = document.createElement("div");
  rowDiv.classList.add(`row%{i}`);
  mainGrid.appendChild(rowDiv);

  for (let j = 0; j < 2; j++) {
    const div = document.createElement("div");
    div.textContent = `div ${j}`;
    rowDiv.appendChild(div);

  }
}

// const div = document.createElement("div");
// div.textContent = "div test";
// mainGrid.appendChild(div);
