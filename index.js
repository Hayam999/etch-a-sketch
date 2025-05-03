const container = document.getElementById("container");
const adjustGridBtn = document.querySelector("#adjust-grid");
adjustGridBtn.addEventListener("click", () => makeGrid());

function makeGrid() {
  let rows = getNum("Enter Number of Rows");
  let columns = getNum("Enter Number of Columns");
  container.innerHTML = "";

  for (let i = 1; i <= rows; i++) {
    const row = document.createElement("div");
    row.className = "rows";
    row.id = "row" + i;
    container.appendChild(row);
    for (let j = 1; j <= columns; j++) {
      const gridElement = document.createElement("div");
      gridElement.id = "square" + i + "," + j;
      gridElement.className = "gridElements";
      row.appendChild(gridElement);
    }
  }
}

function getNum(message) {
  let num = prompt(message);
  if (!Number.isInteger(Number(num))) {
    num = getNum("Invalid Input please Enter a Number");
  } else if (num > 100) {
    num = getNum("Please Enter a number smaller than or equal to 100");
  }
  return num;
}

container.addEventListener("mouseover", (e) => {
  if (e.target.classList.contains("gridElements")) {
    const element = document.getElementById(e.target.id);
    element.style.backgroundColor = "#2A9D8F";
  }
});

container.addEventListener("mousedown", (e) => {
  if (e.target.classList.contains("gridElements")) {
    const element = document.getElementById(e.target.id);
    element.style.backgroundColor = "#ffff";
  }
});
