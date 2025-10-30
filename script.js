// Mobile nav toggle
const navToggle = document.getElementById('nav-toggle');
const navLinks = document.getElementById('main-nav');
navToggle.addEventListener('click', () => {
  navLinks.classList.toggle('open');
});

// Close nav menu after clicking on a link (mobile)
document.querySelectorAll('#main-nav a').forEach(link => {
  link.addEventListener('click', () => {
    navLinks.classList.remove('open');
  });
});

// Smooth scroll for anchor links
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
  anchor.addEventListener('click', function(e) {
    const hash = this.getAttribute('href');
    if (hash.length > 1 && document.querySelector(hash)) {
      e.preventDefault();
      document.querySelector(hash).scrollIntoView({
        behavior: 'smooth',
        block: 'start'
      });
    }
  });
});

// Set current year in the footer
const yearSpan = document.getElementById('year');
if (yearSpan) {
  yearSpan.textContent = new Date().getFullYear();
}
