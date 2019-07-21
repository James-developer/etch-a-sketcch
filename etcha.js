// function that builds a grid in the "container"


window.onload = createGrid(3); // need to use window.onload to make sure that our function will be called after the page is loaded

function createGrid(x) {
    var cellSize = 460 / x - 2 + "px"; // fixed size for the grid
    var container = document.getElementById("container");
    for (var rows = 0; rows < x; rows++) {
        var gridRow = document.createElement("div");
        for (var columns = 0; columns < x; columns++) {
            var gridColumn = document.createElement("span"); // use span because its inline element where the div is block element
            gridColumn.classList.add('cell'); // add cell class to column so it can be adjusted with css later
            gridColumn.style.height = cellSize;
            gridColumn.style.width = cellSize;
            gridRow.appendChild(gridColumn);
            gridColumn.addEventListener("mouseout", setCellColor);
            gridColumn.addEventListener("mouseenter", colorMouseIn);

        };
        container.appendChild(gridRow);
    };
};

// sets random color when mouse is out from pixel box
function setCellColor(e) {
    var cell = document.getElementsByClassName("cell");
    e.target.style.backgroundColor = selectRandomColor();
}
// sets pink color when mouse entered to pixel box
function colorMouseIn(e) {
    var cell = document.getElementsByClassName("cell");
    e.target.style.backgroundColor = "pink";
}

function selectRandomColor() {
    var random = random1 + random2;
    var random1 = Math.floor(Math.random() * 10); // integer numbers between 1-10
    var random2 = Math.floor(Math.random() * 10);
    if (random2 > 5) random2 = random2 - 5; // integer numbers between 1-5
    var random = random1 + random2; // total of 15 colors
    if (random == 1) return "grey";
    if (random == 2) return "red";
    if (random == 3) return "yellow";
    if (random == 4) return "black";
    if (random == 5) return "blue";
    if (random == 6) return "purple";
    if (random == 7) return "lightblue";
    if (random == 8) return "orange";
    if (random == 9) return "aquarium";
    if (random == 10) return "fuchsia";
    if (random == 11) return "lime";
    if (random == 12) return "teal";
    if (random == 13) return "olive";
    if (random == 14) return "maroon";
    if (random == 15) return "navy";
}
// remove all colors and set cell's color to white
function clearGrid() {
    var x = document.getElementsByClassName("cell");
    for (i = 0; i < x.length; i++) {
        x.item(i).style.backgroundColor = "white";
    }
}
// remove all cells in container
function deleteGrid() {
    while (document.getElementsByClassName('cell')[0]) {
        document.getElementsByClassName('cell')[0].remove();
    }
}
// remove the existed grid and create new one when "new grid" button clicked
function newGrid() {
    var z = prompt("How many boxes per side?"); // set number of boxes wanted
    deleteGrid();
    createGrid(z);
};

function setButtonColor(a) {
    var cellColor = document.getElementsByClassName("cell");
    if (a == 1) { removeEventListener(); addEventListener(1); }
    if (a == 2) { removeEventListener(); addEventListener(2); }
    if (a == 3) { removeEventListener(); addEventListener(3); }
    if (a == 4) { removeEventListener(); addEventListener(4); }
    if (a == 5) { removeEventListener(); addEventListener(5); }
}

function setRedColor(e) {
    var cellColor = document.getElementsByClassName("cell");
    e.target.style.backgroundColor = "red";
}
function setBlueColor(e) {
    var cellColor = document.getElementsByClassName("cell");
    e.target.style.backgroundColor = "blue";
}
function setOrangeColor(e) {
    var cellColor = document.getElementsByClassName("cell");
    e.target.style.backgroundColor = "orange";
}
function setBlackColor(e) {
    var cellColor = document.getElementsByClassName("cell");
    e.target.style.backgroundColor = "black";
}
function setPurpleColor(e) {
    var cellColor = document.getElementsByClassName("cell");
    e.target.style.backgroundColor = "purple";
}

function removeEventListener() {
    var cellColor = document.getElementsByClassName("cell");
    for (var i = 0; i < cellColor.length; i++) {
        cellColor.item(i).removeEventListener('mouseout', setCellColor);
    }
}

function addEventListener(a) {
    var cellColor = document.getElementsByClassName("cell");
    if (a == 1) {
        for (var i = 0; i < cellColor.length; i++) {
            cellColor.item(i).addEventListener('mouseout', setRedColor);
        }
    }
    if (a == 2) {
        for (var i = 0; i < cellColor.length; i++) {
            cellColor.item(i).addEventListener('mouseout', setBlueColor);
        }
    }
    if (a == 3) {
        for (var i = 0; i < cellColor.length; i++) {
            cellColor.item(i).addEventListener('mouseout', setOrangeColor);
        }
    }
    if (a == 4) {
        for (var i = 0; i < cellColor.length; i++) {
            cellColor.item(i).addEventListener('mouseout', setBlackColor);
        }
    }
    if (a==5) {
        for (var i = 0; i < cellColor.length; i++) {
            cellColor.item(i).addEventListener('mouseout', setPurpleColor);
        }
    }
}
