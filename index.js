
const btn = document.getElementById("btn");

const prompt_box = document.getElementById("prompt_box");

const promt_txt = document.getElementById("promt_txt");

const txt = document.getElementById("txt");

const num = document.getElementById("num");

var chancesTxt = document.getElementById("chancesTxt");
var randomNumber = Math.floor(Math.random() * 10) + 1;

var number;
var Chances = 3;
chancesTxt.innerHTML = "<h4>Chances: 03 </h4> " ;
console.log(randomNumber);

btn.addEventListener("click", (e) => {
  e.preventDefault();
  console.log(num.value);
  Chances--;
  chancesTxt.innerHTML = "Chances:- " + Chances;
  if (Chances == 0) {
    activateBox("Loss");
  }
  number = num.value;
  checkNum(number);
  num.value = "";
});

function checkNum(number) {
  if (number == randomNumber) {
    activateBox("Win");
  } else if (number > randomNumber) {
    txt.innerHTML = "<h4> Enter Small Number </h4>";
  } else {
    txt.innerHTML = "<h4> Enter Large Number </h4>";
  }
}

function activateBox(e) {
  prompt_box.classList.add("active");
  promt_txt.innerHTML = "You " + e + " The Game";
  randomNumber = Math.floor(Math.random() * 10) + 1;
}
function play(e) {
  prompt_box.classList.remove("active");
  Chances = 3;
  txt.innerHTML = "";
  chancesTxt.innerHTML = "<h4>Chances: 03 </h4> ";
}