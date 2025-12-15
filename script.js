// Mobile navigation toggle
const navToggle = document.querySelector('.nav-toggle');
const nav = document.querySelector('.nav');

if (navToggle && nav) {
    navToggle.addEventListener('click', () => {
        nav.classList.toggle('open');
    });
}

// Dark mode toggle
const themeToggleBtn = document.getElementById('theme-toggle');

if (themeToggleBtn) {
    themeToggleBtn.addEventListener('click', () => {
        document.body.classList.toggle('dark');
        themeToggleBtn.textContent = document.body.classList.contains('dark') ? '☀️' : '🌙';
    });
}

// Update footer year
const yearSpan = document.getElementById('year');
if (yearSpan) {
    yearSpan.textContent = new Date().getFullYear();
}

// Hobby page gallery caption
const galleryImages = document.querySelectorAll('.gallery-img');
const caption = document.getElementById('photo-caption');

if (galleryImages && caption) {
    galleryImages.forEach((img, index) => {
        img.addEventListener('click', () => {
            caption.textContent = `You clicked photo ${index + 1}: "${img.alt}"`;
        });
    });
}
