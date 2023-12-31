export const database = [
	{
		id: 1,
		name: "Fortnite",
		type: "pc",
		targetTime: 22,
		reachTime: 10,
		urlImage: "./assets/fortnite-img.jpg",
		urlGame: "https://www.fortnite.com/",
	},
	{
		id: 2,
		name: "Mobile Legends",
		type: "mobile",
		targetTime: 41,
		reachTime: 5,
		urlImage: "./assets/mobile-legends.jpg",
		urlGame:
			"https://play.google.com/store/apps/details?id=com.mobile.legends&pcampaignid=web_share",
	},
	{
		id: 3,
		name: "Minecraft",
		type: "pc",
		targetTime: 34,
		reachTime: 21,
		urlImage: "./assets/minecraft.jpg",
		urlGame: "https://www.minecraft.net/en-us/download",
	},
];

// plus button
function onClickPlusButton() {
	const createSection = document.getElementsByClassName(
		"create-form-section"
	)[0];
	createSection.style.display = "flex";
}
const plusBtn = document.getElementsByClassName("header-right")[0];
plusBtn.addEventListener("click", onClickPlusButton);
