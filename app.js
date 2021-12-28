window.addEventListener("DOMContentLoaded", () => {
	const slides = document.querySelectorAll(".item");

	slides.forEach((slide) => {
		slide.addEventListener("click", () => {
			(function clearActiveClasses() {
				slides.forEach((slide) => {
					slide.classList.remove("active");
				});
			})();

			slide.classList.add("active");
		});
	});
});
