let scabbards = 0;
let health = 100;
let mood = 100;
let hunger = 100;
let thirst = 100;

function updatePage() {
  document.getElementById("scabbards").innerHTML = scabbards + "¤";
  document.getElementById("healthBar").style.gridTemplateColumns =
    health + "fr, " + (100 - health) + "fr";
}
