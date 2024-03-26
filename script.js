const INTERVAL_TIME = 2000;
const GAME_TIME = 5000;

let holes$ = document.querySelectorAll(".hole");
let timer = null;
let score;

let startBtn$ = document.querySelector("#startBtn");
startBtn$.addEventListener("click", init);

addMoleEvent();

function addMoleEvent() {
  let moles$ = document.querySelectorAll(".mole");
  for (let mole$ of moles$) {
    mole$.addEventListener("click", smackHans);
  }
}

function init() {
  if (timer !== null) {
    clearInterval(timer);
  }
  score = 0;
  writeScore();
  timer = setInterval(showHans, INTERVAL_TIME);
  timeout = setTimeout (endGame, GAME_TIME);
  showHans();
}

function endGame() {
  hideAllHans();
  clearInterval(timer);
  alert("Has Conseguido" + score + "puntos");
}

function writeScore() {
  let score$ = document.querySelector(".score");
  score$.textContent = score;
}
function showHans() {
  let hole$ = getRandomHole();
  hole$.classList.add("up");
}

function hideAllHans() {
  for (let hole$ of holes$) {
    hole$.classList.remove("up");
  }
}

function getRandomHole() {
  let randomIndex = Math.floor(Math.random() * holes$.length);
  return holes$[randomIndex];
}

function smackHans() {
  score++;
  writeScore();
  this.parentNode.classList.remove("up");
}

//muestra topos aleatoriamente durante 15 segundos
