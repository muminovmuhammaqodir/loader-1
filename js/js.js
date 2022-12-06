window.addEventListener("DOMContentLoaded", () => {
	const loader = document.querySelector(".box");

	function loaded() {
		loader.style.opacity = "0";
		setInterval(() => {
			loader.style.display = "none";
		}, 500);
	}
	setTimeout(loaded, 2000);
});
