const btn = document.getElementById("btn");
//const clock = document.getElementById("clockdiv");
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
  "mokus-8.png"
 
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

const selectElement = document.getElementById("fokozat");

selectElement.addEventListener("change", (event) => {
  const result = document.getElementById("fokozat");
  nehezsegiFokozat = event.target.value;
  console.log(nehezsegiFokozat);
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
  setInterval(updateClock, 1000);
  puzzleBetolt(nehezsegiFokozat);
}

function puzzleBetolt(params) {
  let puzzle = document.getElementById("puzzle");
  removeAllChildNodes(puzzle);
  let eredetiKep = document.getElementById("mintakep");
  let kepArany = eredetiKep.clientWidth / (1.0 * eredetiKep.clientHeight);
  console.log(kepArany);
  puzzle.style.gridTemplateColumns = "repeat(" + params + ", 1fr)";

  for (let index = 0; index < params * params; index++) {
    let element = document.createElement("img");
    element.id = index;
    element.className = "grid-item";
    element.title = index;
    element.src="./puzzle_kepek/"+nehezsegiFokozat+"x"+nehezsegiFokozat+"/" + valasztottKep[index];
    puzzle.appendChild(element);
  }
}
function removeAllChildNodes(parent) {
  //-- eltávolítja az előző menetben használt elemeket -------------------
  while (parent.firstChild) {
    parent.removeChild(parent.firstChild);
  }
}
