// Lưu các lời nhắn vào một mảng
const messages = [];

// Lấy các phần tử cần dùng
const messageForm = document.getElementById("messageForm");
const messageInput = document.getElementById("messageInput");
const messageList = document.getElementById("messageList");
const loginButton = document.getElementById("loginButton");
const logoutButton = document.getElementById("logoutButton");

let githubUsername = null;

// Xử lý sự kiện gửi lời nhắn khi nhấn nút "Gửi" hoặc phím Enter
messageForm.addEventListener("submit", async function (event) {
  event.preventDefault(); // Ngăn form gửi dữ liệu đi (tránh refresh trang)
  await sendMessage();
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

// Xử lý sự kiện khi người dùng nhấn nút Đăng nhập
loginButton.addEventListener("click", function () {
  loginWithGithub();
});

// Xử lý sự kiện khi người dùng nhấn nút Đăng xuất
logoutButton.addEventListener("click", function () {
  logout();
});

// Gửi lời nhắn
async function sendMessage() {
  const messageText = messageInput.value.trim();

  if (messageText !== "" && githubUsername !== null) {
    const message = {
      text: messageText,
      username: githubUsername,
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
      <p><strong>${message.username}</strong>: ${message.text}</p>
      <small>${message.timestamp}</small>
    `;
    messageList.appendChild(messageItem);
  });
}

// Hàm xử lý đăng nhập bằng tài khoản Github
function loginWithGithub() {
  // Redirect tới trang xác thực OAuth của Github
  window.location.href = "https://github.com/login/oauth/authorize?client_id=YOUR_GITHUB_CLIENT_ID&scope=user";
}

// Hàm xử lý đăng xuất
function logout() {
  // Xóa thông tin xác thực và tên đăng nhập của người dùng từ LocalStorage
  localStorage.removeItem("githubAccessToken");
  localStorage.removeItem("githubUsername");
  githubUsername = null;

  // Hiển thị nút Đăng nhập và ẩn nút Đăng xuất
  loginButton.style.display = "block";
  logoutButton.style.display = "none";
}

// Kiểm tra xem người dùng đã đăng nhập hay chưa
function checkLoginStatus() {
  // Lấy thông tin xác thực từ LocalStorage
  const githubAccessToken = localStorage.getItem("githubAccessToken");
  githubUsername = localStorage.getItem("githubUsername");

  // Nếu đã có thông tin xác thực, hiển thị nút Đăng xuất và ẩn nút Đăng nhập
  if (githubAccessToken && githubUsername) {
    loginButton.style.display = "none";
    logoutButton.style.display = "block";
  } else {
    loginButton.style.display = "block";
    logoutButton.style.display = "none";
  }
}

// Kiểm tra trạng thái đăng nhập khi trang được tải
checkLoginStatus();
