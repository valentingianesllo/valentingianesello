
// Get menu elements
const toggle = document.getElementById('menu-toggle');
const overlay = document.getElementById('overlay');
const closeBtn = document.getElementById('close-btn');

// Open and close the hamburger menu
if (toggle && overlay) {
  toggle.addEventListener('click', () => {
    overlay.classList.toggle('active');
  });
}

// Close button
if (closeBtn && overlay) {
  closeBtn.addEventListener('click', (e) => {
    e.preventDefault();
    overlay.classList.remove('active');
  });
}

// Close menu when clicking on a navigation link
if (overlay) {
  overlay.querySelectorAll('a').forEach(link => {
    link.addEventListener('click', () => {
      overlay.classList.remove('active');
    });
  });
}

// Open menu from the Information link on the homepage
const openMenuLink = document.getElementById('open-menu-link');

if (openMenuLink && overlay) {
  openMenuLink.addEventListener('click', (e) => {
    e.preventDefault();
    overlay.classList.add('active');
  });
}

