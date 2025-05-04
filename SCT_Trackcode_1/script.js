// Highlight the current page link
document.querySelectorAll('.nav-links a').forEach(link => {
  if (window.location.pathname.includes(link.getAttribute('href'))) {
    link.classList.add('active');
  }
});

// Scroll effect
window.addEventListener('scroll', () => {
  const navbar = document.querySelector('.navbar');
  if (window.scrollY > 50) {
    navbar.classList.add('scrolled');
  } else {
    navbar.classList.remove('scrolled');
  }
});
