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
    messages.push(message);

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
      <p>${message.text}</p>
      <small>${message.timestamp}</small>
    `;
    messageList.appendChild(messageItem);
  });
}
