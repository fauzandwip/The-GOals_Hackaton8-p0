import { database } from "./script.js";

let currentId = 2;
let gameData;

function onClickClose() {}

function loadData() {
	database.forEach((element) => {
		if (element.id === currentId) {
			gameData = element;
		}
	});
}
loadData();

function onClickAddButton() {
	const hour = document.getElementById("input-hour").value;
	if (gameData) {
		gameData.reachTime += Number(hour);
	}
}
const inputBtn = document.getElementById("input-btn");
inputBtn.addEventListener("click", onClickAddButton);
