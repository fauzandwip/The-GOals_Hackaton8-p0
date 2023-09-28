import { database } from "./script.js";
import { settingOnClickCard } from "./detail-script.js";
import { settingOnClickDelete } from "./delete-script.js";

export function load() {
	const container = document.getElementsByClassName("container")[0];
	console.log("trigerr load");
	container.innerHTML = "";
	database.forEach((element) => {
		const { id, name, urlImage } = element;

		container.innerHTML += `<div id="gameId-${id}" class="box">
				<div class="dots">
					<button><img src="./assets/more.png" /></button>
					<div>
						<button id="delete-${id}" class="delete-btn"><img src="./assets/delete.png" /></button>
					</div>
				</div>
				<img id="img-game" src="${urlImage}" />
				<h2>${name}</h2>
			</div>`;
	});

	settingOnClickCard();
	settingOnClickDelete();
}
load();
