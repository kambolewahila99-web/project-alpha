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