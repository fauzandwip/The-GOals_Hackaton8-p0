import { database } from "./script.js";
import { load } from "./read-script.js";

let currentId;
let gameData;

if (database.length) {
	currentId = database[0].id;
	gameData = database[0];
}

load();

// test button
function onClickCloseButton() {
	const detailGameSection = document.getElementsByClassName(
		"game-detail-section"
	)[0];
	detailGameSection.style.display = "none";
}
const closeBtn = document.getElementById("close-detail-btn");
closeBtn.addEventListener("click", onClickCloseButton);

// onclick card
const cardGame = document.getElementsByClassName("box");
if (cardGame.length) {
	for (const card of cardGame) {
		card.addEventListener("click", function () {
			const detailGameSection = document.getElementsByClassName(
				"game-detail-section"
			)[0];
			detailGameSection.style.display = "flex";

			const gameId = card.id;
			const id = gameId[gameId.length - 1];
			currentId = Number(id);
			database.forEach((element) => {
				if (element.id === currentId) {
					gameData = element;
				}
			});
			loadData();
		});
	}
}

// load one data
function loadData() {
	const { name, targetTime, reachTime, urlImage, urlGame } = gameData;
	const imageBg = document.getElementsByClassName("game-detail")[0];
	const nameDetail = document.getElementById("name-detail");
	const installBtn = document.getElementsByClassName("install-btn")[0];
	const target = document.getElementById("detail-target");
	const playTime = document.getElementById("detail-play");
	const progress = document.getElementById("detail-progress-style");
	const percentage = Math.floor((reachTime / targetTime) * 100);

	imageBg.style.backgroundImage = `url("${urlImage}")`;
	nameDetail.innerText = name;
	installBtn.href = urlGame;
	target.innerText = `${targetTime} hours`;
	playTime.innerText = `${reachTime} hours`;
	progress.style.width = `${percentage}%`;
}
loadData();

// add hour button
function onClickAddButton() {
	const hour = document.getElementById("input-hour").value;
	if (gameData) {
		gameData.reachTime += Number(hour);
		if (gameData.reachTime > gameData.targetTime) {
			gameData.reachTime = gameData.targetTime;
		}
	}
	loadData();
}
const inputBtn = document.getElementById("input-btn");
inputBtn.addEventListener("click", onClickAddButton);
