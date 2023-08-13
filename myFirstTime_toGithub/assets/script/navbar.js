// __________________________________Dark mode

// Lấy đối tượng checkbox và các đối tượng cần thay đổi màu
const darkModeToggle = document.querySelector('.lightmode');
// const darkModeToggle_ = document.querySelector('#light-mode');
const body = document.body;

darkModeToggle.addEventListener('change', function () {
    // Kiểm tra nếu checkbox được chọn thì thêm hoặc xóa lớp 'light-mode' để thay đổi màu trang web
    if (darkModeToggle.checked) {
        body.classList.add('light-mode');
    } else {
        body.classList.remove('light-mode');
    }
});


// ___________________________________________________________________________

  // Hàm để thay đổi chế độ sáng/tối của trang web
  function toggleLightMode() {
    const body = document.body;
    body.classList.toggle("light-mode");
  }

  // Hàm để kiểm tra trạng thái của checkbox và thực hiện toggle chế độ sáng/tối
  function handleLightModeToggle() {
    const body = document.body;
    const lightModeCheckbox = document.getElementById("light-mode");

    // Kiểm tra trạng thái hiện tại của trang web
    const isLightMode = body.classList.contains("light-mode");

    // Nếu đang ở light mode, thì bỏ chọn checkbox để chuyển về dark mode
    if (isLightMode) {
      lightModeCheckbox.checked = false;
    }

    // Thực hiện toggle chế độ sáng/tối
    toggleLightMode();
  }

  // Lắng nghe sự kiện khi checkbox được nhấn
  document.addEventListener("DOMContentLoaded", function () {
    const lightModeCheckbox = document.getElementById("light-mode");
    lightModeCheckbox.addEventListener("click", handleLightModeToggle);
  });

// ___________________________________________________________________________ [ Ca nhan ]
function expandContainer_() {
    var ulMess = document.querySelector('.ul-canhan');
    if (ulMess.style.display === 'none') {
      ulMess.style.display = 'flex';
    } else {
      ulMess.style.display = 'none';
    }
  }

  // Thêm event listener để ẩn ul-mess khi click bất kỳ vị trí nào trên trang
  document.addEventListener('click', function(event) {
    var ulMess = document.querySelector('.ul-canhan');
    var messageIcon = document.querySelector('.my-information');

    // Kiểm tra xem phần tử bị click có phải là ul-mess hay message-icon hay không
    var isClickedInsideUlMess = ulMess.contains(event.target);
    var isClickedMessageIcon = messageIcon.contains(event.target);

    // Nếu click ngoài ul-mess và message-icon, ẩn ul-mess
    if (!isClickedInsideUlMess && !isClickedMessageIcon) {
      ulMess.style.display = 'none';
    }
  });


// ___________________________________________________________________________ [ Game++ ]
function expandGame() {
  var ulMess = document.querySelector('.ul-list-game');
  if (ulMess.style.display === 'none') {
    ulMess.style.display = 'flex';
  } else {
    ulMess.style.display = 'none';
  }
}

// Thêm event listener để ẩn ul-mess khi click bất kỳ vị trí nào trên trang
document.addEventListener('click', function(event) {
  var ulMess = document.querySelector('.ul-list-game');
  var messageIcon = document.querySelector('.menu-game2');

  // Kiểm tra xem phần tử bị click có phải là ul-mess hay message-icon hay không
  var isClickedInsideUlMess = ulMess.contains(event.target);
  var isClickedMessageIcon = messageIcon.contains(event.target);

  // Nếu click ngoài ul-mess và message-icon, ẩn ul-mess
  if (!isClickedInsideUlMess && !isClickedMessageIcon) {
    ulMess.style.display = 'none';
  }
});

// ___________________________________________________________________________ [ Notification ]
function expandNotification() {
  var ulMess = document.querySelector('.notificationExplan');
  if (ulMess.style.display === 'none') {
    ulMess.style.display = 'flex';
  } else {
    ulMess.style.display = 'none';
  }
}

// Thêm event listener để ẩn ul-mess khi click bất kỳ vị trí nào trên trang
document.addEventListener('click', function(event) {
  var ulMess = document.querySelector('.notificationExplan');
  var messageIcon = document.querySelector('.notification');

  // Kiểm tra xem phần tử bị click có phải là ul-mess hay message-icon hay không
  var isClickedInsideUlMess = ulMess.contains(event.target);
  var isClickedMessageIcon = messageIcon.contains(event.target);

  // Nếu click ngoài ul-mess và message-icon, ẩn ul-mess
  if (!isClickedInsideUlMess && !isClickedMessageIcon) {
    ulMess.style.display = 'none';
  }
});