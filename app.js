// JavaScript for Hamburger Menu 

const hamburger = document.getElementById('hamburger');
const sidebar = document.getElementById('sidebar');

hamburger.addEventListener('click', () => {
    sidebar.classList.toggle('active');
});

// Close sidebar when clicking outside
document.addEventListener('click', function (event) {
    if (!sidebar.contains(event.target) && !hamburger.contains(event.target)) {
        sidebar.classList.remove('active');
    }
});

var typed = new Typed('.nav-text', {
    strings: [
        "<span style='color: black;'>Fur</span>ever Home"
    ],
    loop: true,
    typeSpeed: 100,
    backSpeed: 80,
    backDelay: 1000,
});

// Get the button element
const moveToTopBtn = document.getElementById('moveToTopBtn');

// Show or hide the button based on scroll position
window.onscroll = function() {
  if (document.body.scrollTop > window.innerHeight || document.documentElement.scrollTop > window.innerHeight) {
    moveToTopBtn.classList.add('show');
  } else {
    moveToTopBtn.classList.remove('show');
  }
};

// Smooth scroll to top when button is clicked
moveToTopBtn.onclick = function() {
  window.scrollTo({ top: 0, behavior: 'smooth' });
};
