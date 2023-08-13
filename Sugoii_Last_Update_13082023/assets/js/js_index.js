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
    var listS = document.querySelector('.list');
    var liS = document.querySelector('.limenuRight');

    if (menuNavbarRight.contains(event.target) || liS.contains(event.target)) {
        menuNavbarRight.classList.remove('open');
        menuToggle.classList.remove('active');
    }
});


// ____________________________________ [ Dem so nguoi vo trang ca nhan ]____________________________________________________
function updateVisitCount(count) {
    document.getElementById('visitCount').textContent = count;
}

// Hàm để lấy số lượt truy cập từ Local Storage
function getVisitCount() {
    const count = localStorage.getItem('visitCount');
    return count ? parseInt(count) : 0;
}

// Hàm để tăng số lượt truy cập và cập nhật lại trong Local Storage
function increaseVisitCount() {
    const currentCount = getVisitCount();
    const newCount = currentCount + 1;
    localStorage.setItem('visitCount', newCount);
    updateVisitCount(newCount);
}

// Khi trang được tải lên, ta sẽ cập nhật số lượt truy cập lên giao diện
document.addEventListener('DOMContentLoaded', function() {
    const currentCount = getVisitCount();
    updateVisitCount(currentCount);
});

// Gọi hàm increaseVisitCount() khi người dùng truy cập vào trang web
increaseVisitCount();



// document.addEventListener("contextmenu", function(e) {
//     e.preventDefault();
// });
// document.addEventListener("keydown", function(e) {
//     if (e.ctrlKey && e.shiftKey && (e.keyCode === 73 || e.keyCode === 74)) {
//         e.preventDefault();
//     }
// });
