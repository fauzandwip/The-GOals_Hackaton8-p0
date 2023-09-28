import { database } from "./script.js";
import { load } from "./read-script.js";

// image form
const inputImage = document.getElementById("formFile");
const bgImage = document.getElementsByClassName("create-section")[0];
let urlImage;

function onFileUploaded() {
	const file = inputImage.files[0];
	if (file) {
		const fileURL = URL.createObjectURL(file);

		bgImage.style.backgroundImage = `url(${fileURL})`;
		urlImage = fileURL;
	}
}
inputImage.addEventListener("change", onFileUploaded);

// submit/create data
const formCreate = document.getElementById("form-create");

function add(event) {
	console.log("first add");
	event.preventDefault();
	const name = document.getElementById("gameName").value;
	const type = document.getElementsByClassName("form-select")[0].value;
	let targetTime = document.getElementById("targetTime").value;
	targetTime = Number(targetTime);
	const reachTime = 0;
	const urlGame = document.getElementById("linkGame").value;
	let id = database.length + 1;

	const newData = {
		id,
		name,
		type,
		targetTime,
		reachTime,
		urlImage,
		urlGame,
	};

	database.push(newData);
	console.log(database);
	load();
	onClickExitBtn();
}
formCreate.addEventListener("submit", add);

// cancel button
function onClickExitBtn() {
	const createFormSection = document.getElementsByClassName(
		"create-form-section"
	)[0];
	createFormSection.style.display = "none";
}
const exitButton = document.getElementsByClassName("cancel-btn")[0];
exitButton.addEventListener("click", onClickExitBtn);
console.log(database);
