const container = document.querySelector("#container");
const adjustGridBtn = document.querySelector("#adjust-grid");
adjustGridBtn.addEventListener("click", () => makeGrid());


function makeGrid() {
    rows = getNum("Enter Number of Rows");
    columns = getNum("Enter Number of Columns");
    container.innerHTML= "";
    
    for (i = 1; i <= rows; i++) {
        const row = document.createElement("div");
        row.className = "rows";
        row.id = "row" + i;
        container.appendChild(row);
        for (j = 1; j <= columns; j++) {
            const gridElement = document.createElement("div");
            gridElement.className = "gridElements";
            row.appendChild(gridElement);
        }
    }
}

function getNum(message) {
    num = prompt(message);
    if (!Number.isInteger(Number(num))) {
        num = getNum("Invalid Input please Enter a Number");
    }
    else if (num > 100) {
        num = getNum("Please Enter a number smaller than or equal to 100");
    }
    return num;
}

const gridElements = document.getElementsByClassName(".gridElements");

function changeColor(element) {
    const currentOpacity = parseFloat(window.getComputedStyle(element).opacity) || 0;
    element.style.backgroundColor = "#ffc300";
    element.style.opacity = Math.min(currentOpacity + 0.1, 1);}

    Array.from(gridElements).forEach(element => {
        element.addEventListener("mouseenter",
            () => changeColor(element));    
})

