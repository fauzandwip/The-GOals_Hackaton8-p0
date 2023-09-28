import { database } from "./script.js";
import { load } from "./read-script.js";

export function settingOnClickDelete() {
	const deleteButtons = document.getElementsByClassName("delete-btn");
	if (deleteButtons.length) {
		for (const btn of deleteButtons) {
			btn.addEventListener("click", () => {
				const btnId = btn.id;
				const id = Number(btnId[btnId.length - 1]);
				database.forEach((data, index) => {
					if (data.id === id) {
						database.splice(index, 1);
						load();
					}
				});
			});
		}
	}
}
