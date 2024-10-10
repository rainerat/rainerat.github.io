const filterButtons = document.querySelectorAll('.filter-btn');
const portfolioItems = document.querySelectorAll('.project-item');
const modal = document.getElementById('portfolioModal');
const modalImage = document.getElementById('modalImage');
const modalTitle = document.getElementById('modalTitle');
const modalDescription = document.getElementById('modalDescription');
const modalLink = document.getElementById('modalLink');

filterButtons.forEach(button => {
    button.addEventListener('click', () => {
        filterButtons.forEach(btn => btn.classList.remove('active'));
        button.classList.add('active');

        const filterValue = button.getAttribute('data-filter');

        portfolioItems.forEach(item => {
            if (filterValue === 'all') {
                item.classList.add('active');
            } else if (item.classList.contains(filterValue)) {
                item.classList.add('active');
            } else {
                item.classList.remove('active');
            }
        });
    });
});

portfolioItems.forEach(item => {
    item.addEventListener('click', function () {
        const imageSrc = this.querySelector('.project-img-cont img').src;
        const title = this.querySelector('.project-description-cont h3').textContent;
        const description = this.getAttribute('data-description');
        const projectLink = this.getAttribute('data-project-link');

        modalImage.src = imageSrc;
        modalImage.alt = title;
        modalTitle.innerText = title;
        modalDescription.innerText = description;

        if (projectLink) {
            modalLink.href = projectLink;
            modalLink.style.display = 'inline-block';
        } else {
            modalLink.style.display = 'none';
        }

        modal.style.display = 'flex';
    });
});

window.addEventListener('click', function (e) {
    if (e.target === modal) {
        modal.style.display = 'none';
    }
});


