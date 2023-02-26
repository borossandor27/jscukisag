const btn = document.getElementById("btn");
//const clock = document.getElementById("clockdiv");
const kivalasztottKep = document.getElementById("kep");
const mozaikok = document.querySelectorAll(".grid-item");
const selectElement = document.getElementById("fokozat");
const eredetiKep = document.getElementById("mintakep");
var deadline = 0;
var nehezsegiFokozat = 3;
let timeinterval = null;

var valasztottKep = [
  "mokus-0.png",
  "mokus-1.png",
  "mokus-2.png",
  "mokus-3.png",
  "mokus-4.png",
  "mokus-5.png",
  "mokus-6.png",
  "mokus-7.png",
  "mokus-8.png",
];

btn.addEventListener("click", () => {
  if (btn.innerText === "Start") {
    jatekotIndit();
  } else {
    btn.innerText = "Start";
    clearInterval(timeinterval);
    timeinterval = null;
  }
});

selectElement.addEventListener("change", (event) => {
  nehezsegiFokozat = event.target.value;
  eredetiKep.src = kivalasztottKep.value;
  console.log(nehezsegiFokozat);
});
kivalasztottKep.addEventListener("change", (event) => {
  eredetiKep.src = kivalasztottKep.value;
});

function jatekotIndit() {
  btn.innerText = "Stop";
  //-- stopper beállítása ----
  if (!timeinterval) {
    timeinterval = setInterval(updateClock, 1000);
  }
  const timeInMinutes = 0.1;
  let currentTime = Date.parse(new Date());
  deadline = new Date(currentTime + timeInMinutes * 60 * 1000);
  updateClock();
  kepeketBetolt(nehezsegiFokozat);
}

function kepeketBetolt(params) {
  let puzzle = document.getElementById("puzzle");
  removeAllChildNodes(puzzle);
  let kepArany = eredetiKep.clientWidth / (1.0 * eredetiKep.clientHeight);
  console.log(kepArany);
  puzzle.style.gridTemplateColumns =
    "repeat(" + params + ", fit-content(" + 100.0 / nehezsegiFokozat + "%))";

  for (let index = 0; index < params * params; index++) {
    let element = document.createElement("img");
    element.id = index;
    element.className = "grid-item";
    element.title = index;
    element.src =
      "./puzzle_kepek/" +
      nehezsegiFokozat +
      "x" +
      nehezsegiFokozat +
      "/" +
      valasztottKep[index];
    element.draggable = true;
    element.addEventListener("dragstart", dragStart);
    //element.addEventListener("drag", drag);
    //element.addEventListener("dragend", dragEnd);

    //element.addEventListener("dragenter", dragEnter);
    element.addEventListener("dragover", dragOver);
    //element.addEventListener("dragleave", dragLeave);
    element.addEventListener("drop", drop);
    puzzle.appendChild(element);
  }
}
function dragStart(event) {
  event.dataTransfer.clearData();
  console.log("drag start...");
}
function dragOver(event) {
  //console.log("Felette van");
  event.preventDefault();
}
function drop(event) {
  console.log("drop...");
}
function removeAllChildNodes(parent) {
  //-- eltávolítja az előző menetben használt elemeket -------------------
  while (parent.firstChild) {
    parent.removeChild(parent.firstChild);
  }
}
