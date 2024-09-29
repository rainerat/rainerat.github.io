function showContent(sectionId) {
    const sections = document.querySelectorAll('#content-container > section');
    sections.forEach(section => section.style.display = 'none'); // Hide all sections

    document.getElementById(sectionId).style.display = 'block';

    const navLinks = document.querySelectorAll('.nav-link');
    navLinks.forEach(link => link.classList.remove('active'));

    const activeLink = document.querySelector(`.nav-link[data-section="${sectionId}"]`);
    activeLink.classList.add('active');
}
