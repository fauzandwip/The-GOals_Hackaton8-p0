import { database } from "./script.js";

export function load() {
	const container = document.getElementsByClassName("container")[0];
	console.log("trigerr load");
	container.innerHTML = "";
	database.forEach((element) => {
		const { name, urlImage } = element;

		container.innerHTML += `<div class="box">
				<div class="dots">
					<button><img src="./assets/more.png" /></button>
					<div>
						<button><img src="./assets/edit.png" /></button>
						<button><img src="./assets/delete.png" /></button>
					</div>
				</div>
				<img id="img-game" src="${urlImage}" />
				<h2>${name}</h2>
			</div>`;
	});
}
load();
// console.log("trigerr");
