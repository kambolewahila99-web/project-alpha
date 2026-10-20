// Back-to-top button: show only when scrolling up while below the top.
const backToTopButton = document.querySelector('.back-to-top');
let lastScrollPosition = window.scrollY;
let scrollTicking = false;

function updateBackToTop(currentScrollPosition) {
	if (!backToTopButton) {
		return;
	}

	const scrollDelta = currentScrollPosition - lastScrollPosition;

	if (currentScrollPosition <= 40 || scrollDelta > 8) {
		backToTopButton.classList.remove('is-visible');
	} else if (scrollDelta < -8) {
		backToTopButton.classList.add('is-visible');
	}

	lastScrollPosition = currentScrollPosition;
}

window.addEventListener('scroll', () => {
	if (scrollTicking) {
		return;
	}
	scrollTicking = true;
	requestAnimationFrame(() => {
		updateBackToTop(window.scrollY);
		scrollTicking = false;
	});
}, { passive: true });

backToTopButton?.addEventListener('click', (event) => {
	event.preventDefault();
	window.scrollTo({ top: 0, behavior: 'smooth' });
});