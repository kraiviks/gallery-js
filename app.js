window.addEventListener("DOMContentLoaded", () => {
	const slides = document.querySelectorAll(".item");
	let initialSlide = 2;
	
	slides[initialSlide].classList.add("active");

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

	document.addEventListener("keydown", (e) => {
		if (e.key === "ArrowLeft") {
			initialSlide--;
			if (initialSlide < 0) {
				initialSlide = slides.length - 1;
			}

			changeSlide();
		} else if (e.key === "ArrowRight") {
			initialSlide++;
			if (initialSlide === slides.length) {
				initialSlide = 0;
			}
			changeSlide();
		}
	});

	function changeSlide() {
		slides.forEach((element) => {
			element.classList.remove("active");
		});
		slides[initialSlide].classList.add("active");
	}
});
