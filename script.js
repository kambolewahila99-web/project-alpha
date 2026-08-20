function showSection(sectionId) {
	// Hide all sections
	const sections = document.querySelectorAll('.content-section');
	sections.forEach(s => s.style.display = 'none');

	// Hide menu grid
	document.getElementById('menuGrid').style.display = 'none';

	// Show selected section
	document.getElementById(sectionId).style.display = 'block';

	// Scroll to top
	window.scrollTo(0, 0);
}

function backToMenu() {
	// Show menu grid
	document.getElementById('menuGrid').style.display = 'grid';

	// Hide all sections
	const sections = document.querySelectorAll('.content-section');
	sections.forEach(s => s.style.display = 'none');

	// Scroll to top
	window.scrollTo(0, 0);
}

document.querySelector('.back-to-top')?.addEventListener('click', (event) => {
	event.preventDefault();
	window.scrollTo({ top: 0, behavior: 'smooth' });
});

const backToTopButton = document.querySelector('.back-to-top');
let lastScrollPosition = window.scrollY;

window.addEventListener('scroll', () => {
	if (!backToTopButton) {
		return;
	}

	const currentScrollPosition = window.scrollY;
	const scrollDelta = currentScrollPosition - lastScrollPosition;

	if (currentScrollPosition <= 40 || scrollDelta > 8) {
		backToTopButton.classList.remove('is-visible');
	} else if (scrollDelta < -8) {
		backToTopButton.classList.add('is-visible');
	}

	lastScrollPosition = currentScrollPosition;
}, { passive: true });