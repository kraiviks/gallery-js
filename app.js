window.addEventListener("DOMContentLoaded", () => {
	const slides = document.querySelectorAll(".item");
	let initialSlide = 2;

	slides[initialSlide].classList.add("active");

	slides.forEach((slide, index) => {
		// slide.addEventListener("click", () => {
		// 	(function clearActiveClasses() {
		// 		slides.forEach((slide) => {
		// 			slide.classList.remove("active");
		// 		});
		// 	})();

		// 	slide.classList.add("active");
		// });

		slide.addEventListener("click", () => {
			changeSlide(false, slide);
			initialSlide = index;
		});
	});

	document.addEventListener("keydown", (e) => {
		if (e.key === "ArrowLeft") {
			initialSlide--;
			if (initialSlide < 0) {
				initialSlide = slides.length - 1;
			}

			changeSlide(true);
		} else if (e.key === "ArrowRight") {
			initialSlide++;
			if (initialSlide === slides.length) {
				initialSlide = 0;
			}
			changeSlide(true);
		}
	});

	function changeSlide(isButton, slide) {
		slides.forEach((element) => {
			element.classList.remove("active");
		});

		if (isButton) {
			slides[initialSlide].classList.add("active");
		} else {
			slide.classList.add("active");
		}
	}
});
