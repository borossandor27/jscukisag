const btn = document.getElementById("btn");
//const clock = document.getElementById("clockdiv");
const kivalasztottKep = document.getElementById("kep");
const mozaikok = document.querySelectorAll(".grid-item");
const selectElement = document.getElementById("fokozat");
const eredetiKep = document.getElementById("mintakep");
var deadline = 0;
var nehezsegiFokozat = 3;
let timeinterval = null;

var kisKepek = [
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
  kisKepeketBetolt();
});
kivalasztottKep.addEventListener("change", (event) => {
  kisKepeketBetolt();
});

function kisKepeketBetolt() {
  let obj = forrasKepek[kivalasztottKep.value];
  let src = obj["src"];
  eredetiKep.src = src;
  kisKepek = obj["kepek"][nehezsegiFokozat];
}

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
  kepeketFelrak();
}

function kepeketFelrak() {
  let puzzle = document.getElementById("puzzle");
  removeAllChildNodes(puzzle);
  let kepArany = eredetiKep.clientWidth / (1.0 * eredetiKep.clientHeight);
  console.log(kepArany);
  puzzle.style.gridTemplateColumns =
    "repeat(" +
    nehezsegiFokozat +
    ", fit-content(" +
    100.0 / nehezsegiFokozat +
    "%))";

  var imgSrcPath =
    "./puzzle_kepek/" + nehezsegiFokozat + "x" + nehezsegiFokozat + "/";
  // using Array map and Math.random

  kisKepek = shuffle(kisKepek);
  for (let index = 0; index < nehezsegiFokozat * nehezsegiFokozat; index++) {
    puzzle.appendChild(kisKepDiv(index, imgSrcPath));
  }
}
/**
 * Shuffles array in place. ES6 version
 * @param {Array} a items An array containing the items.
 */
function shuffle(a) {
  for (let i = a.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1));
    [a[i], a[j]] = [a[j], a[i]];
  }
  return a;
}
function kisKepDiv(index, imgSrcPath) {
  let element = document.createElement("img");
  element.id = index;
  element.className = "grid-item";
  element.title = index;
  element.alt = "valami";
  element.src = imgSrcPath + kisKepek[index];

  element.draggable = true;
  element.addEventListener("dragstart", dragStart);
  //element.addEventListener("drag", drag);
  //element.addEventListener("dragend", dragEnd);

  //element.addEventListener("dragenter", dragEnter);
  element.addEventListener("dragover", dragOver);
  //element.addEventListener("dragleave", dragLeave);
  element.addEventListener("drop", drop);
  return element;
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
