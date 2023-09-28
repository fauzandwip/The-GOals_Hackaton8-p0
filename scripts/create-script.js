import { database } from "./script.js";

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
const submitBtn = document.getElementById("submit-form");

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
}
formCreate.addEventListener("submit", add);
