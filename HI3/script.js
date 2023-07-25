// Lưu các lời nhắn vào một mảng
const messages = [];

// Lấy các phần tử cần dùng
const messageForm = document.getElementById("messageForm");
const messageInput = document.getElementById("messageInput");
const messageList = document.getElementById("messageList");

// Xử lý sự kiện gửi lời nhắn khi nhấn nút "Gửi" hoặc phím Enter
messageForm.addEventListener("submit", function (event) {
  event.preventDefault(); // Ngăn form gửi dữ liệu đi (tránh refresh trang)
  sendMessage();
});

messageInput.addEventListener("input", function (event) {
  // Giới hạn độ dài nội dung nhập vào 101 kí tự (bao gồm cả dấu cách)
  if (messageInput.value.length > 101) {
    messageInput.value = messageInput.value.slice(0, 101);
  }
});

messageInput.addEventListener("keydown", function (event) {
  // Kiểm tra xem phím người dùng nhấn có phải là phím Enter (mã 13) thì thực hiện gửi lời nhắn
  if (event.keyCode === 13) {
    event.preventDefault(); // Ngăn việc xuống dòng trong trường nhập liệu
    sendMessage();
  }
});

// Gửi lời nhắn
function sendMessage() {
  const messageText = messageInput.value.trim();
  if (messageText !== "") {
    const message = {
      text: messageText,
      timestamp: new Date().toLocaleString(),
    };
    messages.unshift(message); // Thêm lời nhắn vào đầu mảng

    // Hiển thị lời nhắn mới nhất
    displayMessages();

    // Reset ô nhập liệu
    messageInput.value = "";
  }
}

// Hiển thị danh sách các lời nhắn
function displayMessages() {
  messageList.innerHTML = ""; // Xóa danh sách lời nhắn cũ

  messages.forEach((message) => {
    const messageItem = document.createElement("div");
    messageItem.classList.add("message");
    messageItem.innerHTML = `
      <small>${message.timestamp}</small>
      <p>${message.text}</p>
    `;
    messageList.appendChild(messageItem);
  });
}      
// {/* <span>${message.text}</span> */}
      // <p>${message.timestamp}</p>