let scabbards = 0;
let health = 100;
let mood = 100;
let hunger = 100;
let thirst = 100;

function updatePage() {
  document.getElementById("scabbards").innerHTML = scabbards + "¤";
  document.querySelector("#healthBar").style.gridTemplateColumns =
    health + "fr, " + (101 - health) + "fr";
}
