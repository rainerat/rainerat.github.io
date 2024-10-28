const filterButtons = document.querySelectorAll(".filter-btn");
const projectItems = document.querySelectorAll(".project-item");
const filterDropdown = document.getElementById("filter-dropdown");

function filterProjects(filterValue) {
  projectItems.forEach((item) => {
    if (filterValue === "all") {
      item.classList.add("active");
    } else if (item.classList.contains(filterValue)) {
      item.classList.add("active");
    } else {
      item.classList.remove("active");
    }
  });
}

// Event listener for filter button clicks
filterButtons.forEach((button) => {
  button.addEventListener("click", () => {
    filterButtons.forEach((btn) => btn.classList.remove("active"));
    button.classList.add("active");

    const filterValue = button.getAttribute("data-filter");
    filterProjects(filterValue);
    filterDropdown.value = filterValue;
  });
});

// Function to handle dropdown
filterDropdown.addEventListener("change", () => {
  const filterValue = filterDropdown.value;
  filterProjects(filterValue);

  filterButtons.forEach((button) => {
    if (button.getAttribute("data-filter") === filterValue) {
      button.classList.add("active");
    } else {
      button.classList.remove("active");
    }
  });
});

const modal = document.getElementById("projectModal");
const modalImage = document.getElementById("modalImage");
const modalTitle = document.getElementById("modalTitle");
const modalDescription = document.getElementById("modalDescription");
const modalLink = document.getElementById("modalLink");
const modalTechTags = document.getElementById("modalTechTags");
const modalLongDescription = document.getElementById("longDescription");
const modalPreviewImages = document.getElementById("previewImages");

fetch("resources/data/projects.json")
  .then((response) => response.json())
  .then((data) => {
    projectItems.forEach((item) => {
      item.addEventListener("click", function () {
        const projectId = this.getAttribute("data-project-id");
        const projectData = data.find((project) => project.id === projectId);
        const imageSrc = this.querySelector(".project-img-cont img").src;
        const title = this.querySelector(
          ".project-description-cont h3"
        ).textContent;
        const description = this.querySelector(
          ".project-description-cont > p"
        ).textContent;
        const techTagElements = this.querySelectorAll(".tech-tags .tech-tag");

        modalImage.src = imageSrc;
        modalTitle.innerText = title;
        modalDescription.innerText = description;
        modalLink.href = projectData.link;

        modalTechTags.innerHTML = "";
        techTagElements.forEach((tagElement) => {
          const clonedTag = tagElement.cloneNode(true);
          modalTechTags.appendChild(clonedTag);
        });

        modalLongDescription.innerHTML = "";
        projectData.longDescription.forEach((section) => {
          const sectionElement = document.createElement("div");
          sectionElement.innerHTML = `<h3>${section.heading}</h3><p>${section.content}</p>`;
          modalLongDescription.appendChild(sectionElement);
        });

        modalPreviewImages.innerHTML = "";
        projectData.previewImages.forEach((imagePath) => {
          const imgElement = document.createElement("img");
          imgElement.src = imagePath;
          imgElement.alt = `${projectData.title} preview`;
          modalPreviewImages.appendChild(imgElement);
        });

        document.getElementById("projectModal").style.display = "flex";
      });
    });
  })
  .catch((error) => console.error("Error loading JSON data:", error));

window.addEventListener("click", function (e) {
  if (e.target === modal) {
    modal.style.display = "none";
  }
});
