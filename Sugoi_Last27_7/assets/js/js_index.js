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


// Thêm sự kiện click vào body
document.body.addEventListener('click', function(event) {
    var menuNavbarRight = document.querySelector('.menu-navbar-right');
    var menuToggle = document.querySelector('.menu-toggle');

    // Kiểm tra xem click nằm ngoài phạm vi của menu hay không
    if (!menuNavbarRight.contains(event.target) && !menuToggle.contains(event.target)) {
        // Nếu click ngoài menu, đóng menu lại
        menuNavbarRight.classList.remove('open');
        menuToggle.classList.remove('active');
    }
});


document.addEventListener("contextmenu", function(e) {
    e.preventDefault();
});
document.addEventListener("keydown", function(e) {
    if (e.ctrlKey && e.shiftKey && (e.keyCode === 73 || e.keyCode === 74)) {
        e.preventDefault();
    }
});
