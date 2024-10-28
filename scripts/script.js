function showContent(sectionId) {
  const sections = document.querySelectorAll(".main-content > section");
  sections.forEach((section) => (section.style.display = "none")); // Hide all sections

  document.getElementById(sectionId).style.display = "block";

  const navLinks = document.querySelectorAll(".nav-link");
  navLinks.forEach((link) => link.classList.remove("active"));

  const activeLink = document.querySelector(
    `.nav-link[data-section="${sectionId}"]`
  );
  activeLink.classList.add("active");
}

function showContact() {
  const sidebar = document.querySelector(".sidebar");
  const showContactLink = document.querySelector(".show-contact-link");
  const spanText = showContactLink.querySelector("span");

  const isVisible = sidebar.classList.contains("active");

  if (isVisible) {
    spanText.textContent = "Show Contact";
    sidebar.classList.remove("active");
    showContactLink.classList.remove("active");
  } else {
    spanText.textContent = "Hide Contact";
    sidebar.classList.add("active");
    showContactLink.classList.add("active");
  }
}
