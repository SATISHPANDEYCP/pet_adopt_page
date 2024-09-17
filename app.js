// JavaScript for Hamburger Menu 
const hamburger = document.getElementById('hamburger');
const sidebar = document.getElementById('sidebar');

hamburger.addEventListener('click', () => {
  console.log('Hamburger clicked'); // Check if this logs in the console
  sidebar.classList.toggle('active');
});


// Close sidebar when clicking outside
document.addEventListener('click', function (event) {
  if (!sidebar.contains(event.target) && !hamburger.contains(event.target)) {
    sidebar.classList.remove('active');
  }
});

// typed property
var typed = new Typed('.nav-text', {
  strings: [
    "<span style='color: black;'>Fur</span>ever Home",
    "<span style='color: black;'>Pet adop</span>tion Page"
  ],
  loop: true,
  typeSpeed: 100,
  backSpeed: 80,
  backDelay: 1000,
});

// Get the button element
const moveToTopBtn = document.getElementById('moveToTopBtn');

// Show or hide the button based on scroll position
window.onscroll = function () {
  if (document.body.scrollTop > window.innerHeight || document.documentElement.scrollTop > window.innerHeight) {
    moveToTopBtn.classList.add('show');
  } else {
    moveToTopBtn.classList.remove('show');
  }
};

// Smooth scroll to top when button is clicked
moveToTopBtn.onclick = function () {
  window.scrollTo({ top: 0, behavior: 'smooth' });
};


// for threen modes
const toggleButton = document.getElementById('mode-toggle');
const body = document.body;
let currentMode = 0; // 0 = root, 1 = mode-1, 2 = mode-2

toggleButton.addEventListener('click', () => {
    // Remove the current mode class
    body.classList.remove('mode-1', 'mode-2');

    // Cycle through the modes
    currentMode = (currentMode + 1) % 3;

    // Apply the new mode
    if (currentMode === 1) {
        body.classList.add('mode-1');
    } else if (currentMode === 2) {
        body.classList.add('mode-2');
    }
});


// in hamberger toggle
const togglesButton = document.getElementById('mode-toggles');
const bodys = document.body;
let currentModes = 0; // 0 = root, 1 = mode-1, 2 = mode-2

togglesButton.addEventListener('click', () => {
    // Remove the current mode class
    bodys.classList.remove('mode-1', 'mode-2');

    // Cycle through the modes
    currentModes = (currentModes + 1) % 3;

    // Apply the new mode
    if (currentModes === 1) {
        bodys.classList.add('mode-1');
    } else if (currentModes === 2) {
        bodys.classList.add('mode-2');
    }
});
