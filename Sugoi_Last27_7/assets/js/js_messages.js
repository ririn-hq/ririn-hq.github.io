// Lưu các lời nhắn vào một mảng
const messages = [];

// Lấy các phần tử cần dùng
const messageList = document.getElementById("messageList");
const messageForm = document.getElementById("messageForm");

const messageInput = document.getElementById("messageInput");
const senderNameInput = document.getElementById("senderNameInput");
const messageLink = document.getElementById("linkInput");

// Xử lý sự kiện gửi lời nhắn khi nhấn nút "Gửi" hoặc phím Enter
messageForm.addEventListener("submit", function (event) {
  // Ngăn form gửi dữ liệu đi (tránh refresh trang)
  event.preventDefault(); 
  sendMessage();
});


messageForm.addEventListener("submit", function (event) {
  event.preventDefault();

  const messageInput = document.getElementById("messageInput");
  const senderNameInput = document.getElementById("senderNameInput");
  const linkInput = document.getElementById("linkInput");

  // Kiểm tra dữ liệu đã nhập
  const messageText = messageInput.value.trim();
  const senderName = senderNameInput.value.trim();
  const link = linkInput.value.trim();

  if (messageText === "" || senderName === "") {
    // alert("Vui lòng nhập nội dung tin nhắn và tên người gửi trước khi gửi.");
    return;
  }

  // Gửi tin nhắn và link (nếu có)
  const message = {
    text: messageText,
    username: senderName,
    timestamp: new Date().toLocaleString(),
    link: link !== "" ? link : "",
  };

   // Thêm lời nhắn vào đầu mảng
  messages.unshift(message);

  // Hiển thị lời nhắn mới nhất
  displayMessages();

  // Reset ô nhập liệu
  senderNameInput.value = "";
  messageInput.value = "";
  linkInput.value = "";

  // Đóng divMess sau khi gửi tin nhắn
  toggleExpandContainer();
});



// Hiển thị danh sách các lời nhắn
function displayMessages() {
  // Xóa danh sách lời nhắn cũ
  messageList.innerHTML = "";
  
  messages.forEach((message) => {
    const messageItem = document.createElement("div");
    messageItem.classList.add("message");

    function checkLink(a) {
      a = a.trim();
      return a === "" ? true : false;
    }

    if (checkLink(message.link)) {
      messageItem.innerHTML = `
        <p>
        <b>[</b><strong>${message.username}</strong><b>]</b>
          <small>${message.timestamp}</small>
        </p>
        <small>${message.text}</small>`;
    } else {
      messageItem.innerHTML = `
        <p>
          <b>[</b><strong>${message.username}</strong><b>]</b>
          <b>[</b><a href=${message.link}>✔</a><b>]</b>
          <small>${message.timestamp}</small>
        </p>
        <small>${message.text}</small>`;
    }

    messageList.appendChild(messageItem);
  });
}


// ________________________________________________________________________________________
// Đặt biến global để xác định trạng thái mở rộng của divMess
let isExpanded = false;

// Hàm mở rộng divMess khi người dùng nhấp vào biểu tượng tin nhắn
function expandContainer() {
  const divMess = document.querySelector('.divMess');
  const messageIcon = document.querySelector('.message-icon');

  // Thay đổi trạng thái mở rộng/thu gọn của divMess
  isExpanded = !isExpanded;

  // Thực hiện hành động tương ứng dựa trên trạng thái
  if (isExpanded) {
    divMess.classList.add('expanded');
    messageIcon.classList.add('hidden');
  } else {
    divMess.classList.remove('expanded');
    messageIcon.classList.remove('hidden');
  }
}

// Hàm xử lý sự kiện click toàn cục
document.addEventListener("click", function (event) {
  const divMess = document.querySelector(".divMess");
  const messageIcon = document.querySelector('.message-icon');

  // Kiểm tra nếu divMess đang mở rộng và sự kiện click không xảy ra trong divMess
  if (isExpanded && !divMess.contains(event.target)) {
    hideContainer(); // Đóng divMess mở rộng
  }
});

// Hàm ẩn divMess và hiển thị lại message-icon
function hideContainer() {
  const divMess = document.querySelector('.divMess');
  const messageIcon = document.querySelector('.message-icon');

  // Đặt lại trạng thái mở rộng của divMess và thực hiện hành động tương ứng
  isExpanded = false;
  divMess.classList.remove('expanded');
  messageIcon.classList.remove('hidden');
}

// Hàm gửi tin nhắn
// Hàm gửi tin nhắn
function sendMessage() {
  const messageText = messageInput.value.trim();
  const senderName = senderNameInput.value.trim();
  const link = linkInput.value.trim();

  if (messageText === "" || senderName === "") {
    return;
  }

  // Gửi tin nhắn và link (nếu có)
  const message = {
    text: messageText,
    username: senderName,
    timestamp: new Date().toLocaleString(),
    link: link !== "" ? link : "",
  };

  // Thêm lời nhắn vào đầu mảng
  messages.unshift(message);

  // Hiển thị lời nhắn mới nhất
  displayMessages();

  // Reset ô nhập liệu/clear input
  senderNameInput.value = "";
  messageInput.value = "";
  linkInput.value = "";

  // Đóng divMess sau khi gửi tin nhắn
  hideContainer();
}


// Xử lý sự kiện khi nhấn nút "Send"
const sendButton = document.querySelector('#messageForm button');
sendButton.addEventListener('click', function (event) {
  event.preventDefault(); // Ngăn chặn việc gửi form (nếu có)

  sendMessage(); // Gửi tin nhắn
});
