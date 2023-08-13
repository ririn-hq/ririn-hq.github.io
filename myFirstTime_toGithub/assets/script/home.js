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



// __________________________________Message 
// function expandContainer() {
//     var ulMess = document.querySelector('.ul-mess');
//     ulMess.classList.toggle('show');
// }


  function expandContainer() {
    var ulMess = document.querySelector('.ul-mess');
    if (ulMess.style.display === 'none') {
      ulMess.style.display = 'flex';
    } else {
      ulMess.style.display = 'none';
    }
  }

  // Thêm event listener để ẩn ul-mess khi click bất kỳ vị trí nào trên trang
  document.addEventListener('click', function(event) {
    var ulMess = document.querySelector('.ul-mess');
    var messageIcon = document.querySelector('.message-icon');

    // Kiểm tra xem phần tử bị click có phải là ul-mess hay message-icon hay không
    var isClickedInsideUlMess = ulMess.contains(event.target);
    var isClickedMessageIcon = messageIcon.contains(event.target);

    // Nếu click ngoài ul-mess và message-icon, ẩn ul-mess
    if (!isClickedInsideUlMess && !isClickedMessageIcon) {
      ulMess.style.display = 'none';
    }
  });


  
  


// document.addEventListener("contextmenu", function(e) {
//     e.preventDefault();
// });
// document.addEventListener("keydown", function(e) {
//     if (e.ctrlKey && e.shiftKey && (e.keyCode === 73 || e.keyCode === 74)) {
//         e.preventDefault();
//     }
// });
