document.getElementById('mode-link').onclick = toggleDarkMode;

function toggleMenu() {
var menuToggle = document.querySelector('.menu-toggle');
var menuNavbarRight = document.querySelector('.menu-navbar-right');
menuToggle.classList.toggle('active');
menuNavbarRight.classList.toggle('open');
}

function toggleDarkMode() {
var body = document.querySelector('body');
body.classList.toggle('dark-mode');
}

// document.addEventListener("contextmenu", function(e) {
//     e.preventDefault();
// });
// document.addEventListener("keydown", function(e) {
//     if (e.ctrlKey && e.shiftKey && (e.keyCode === 73 || e.keyCode === 74)) {
//         e.preventDefault();
//     }
// });
