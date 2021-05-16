const KEY = "storage";

let storage = JSON.parse(localStorage.getItem(KEY)) || [];

let scabbards = storage[0] || 0;
let health = storage[1] || 100;
let mood = storage[2] || 100;
let hunger = storage[3] || 100;
let thirst = storage[4] || 100;
let time = new Date(storage[5]) || new Date();

console.log(storage);
UpdateTime();
UpdatePage();
Save();

function UpdatePage() {
	document.querySelector("#scabbards").innerHTML = scabbards + "¤";
	document.querySelector("#health").innerHTML = "Health: " + Math.round(health);
	document.querySelector("#mood").innerHTML = "Mood: " + Math.round(mood);
	document.querySelector("#hunger").innerHTML = "Hunger: " + Math.round(hunger);
	document.querySelector("#thirst").innerHTML = "Thirst: " + Math.round(thirst);
}

function UpdateTime() {
	let newTime = new Date();
	let difference = newTime - time;
	time = newTime;
	PassTime(difference);
}

function AddScabbard() {
	scabbards += 5;
	mood = mood * 0.95;
	UpdateTime();
	UpdatePage();
	Save();
}

function PassTime(d) {
	let hD = 0;
	let tD = 0;

	mood *= 0.9999 ** Math.round(d / 60000);
	hunger -= d / 60000;
	thirst -= d / 60000;
	if (hunger < 0) {
		hD = -hunger;
		hunger = 0;
	}
	if (thirst < 0) {
		tD = -thirst;
		thirst = 0;
	}

	health -= hD + tD;
}

function Save() {
	storage = [scabbards, health, mood, hunger, thirst, time];
	localStorage.setItem(KEY, JSON.stringify(storage));
}
