## Hello friend!
## 👋 I'm Nino! Nice to meet you!
**`💖 Code - Anime - Game - Music`** 

## ꧁____________ About me ____________꧂
- Full name: Tokisaki Nino.
- Nickname: Sugoii.
- Age: 18 (Maybe).
- Learning & using language: C/C++, Java
- Discord: tokisakinino.
## ꧁____________ Game ____________꧂
    ❖ GI Asia: 855962110
    ❖ HI3: 22123959
    ❖ PUBGM Asia: 『Nino』UwU       
<a href="https://enka.network/u/855962110/">GI More</a>

## ꧁____________ Anime ____________꧂
Hashtag: #romcom#reallife#school#truelove#vampire#drama#shounen

## ꧁____________ Fact ____________꧂
- Waifu: Tokisaki Kurumi (DaL), Elysia (HI3).
-  Girlfriend? I haven't thought about it yet, but if possible I'd like her to like Anime as well because I can cosplay the characters she likes and I also like her to have the "Yandere" personality - it's probably normal huh?.
- My favorite quote: "What kind of person do you expect me to be? Normal partner? Self-training subjects? A social acquaintance... or... an important teammate? Based on your attitude and expectations, I will "play" or "become" one of them." - Yelan - Genshin Impact.
- My hashtag: #Sugoii.F #LoveYandere #Anime #Kurumi #Traverler #Captain #Blueblood #Whriteroom

## ꧁____________ Contact ____________꧂
<a href="https://www.facebook.com/nino.real.memory">Facebook</a>
<a href="https://www.instagram.com/nino.real.memories/">Instagram</a>

##

<p align="center">
<img width="50%" src="https://github-readme-stats.vercel.app/api?username=TokisakiNinoVn&show_icons=true&count_private=true&theme=react&hide_border=true&bg_color=0D1117"/>


<img width="45%" src="https://github-readme-stats.vercel.app/api/top-langs/?username=TokisakiNinoVn&show_icons=true&count_private=true&theme=react&hide_border=true&bg_color=0D1117&layout=compact"/>
</p>

<div>
    <div class="box1st">
        <div class="messenge-board">Message Board</div>
        <div class="box2nd">
            <div id="messageList">
            <!-- Danh sách các lời nhắn sẽ được hiển thị ở đây -->
            </div>
        </div>
        <div class="container">
        <form id="messageForm">
            <textarea id="messageInput" placeholder="Tap to enter..."></textarea>
            <button type="submit">Send</button>
        </form>
        </div>
    </div>
    <script>
    const messages = [];
    const messageForm = document.getElementById("messageForm");
    const messageInput = document.getElementById("messageInput");
    const messageList = document.getElementById("messageList");
    messageForm.addEventListener("submit", function (event) {
    event.preventDefault();
    sendMessage();
    });
    messageInput.addEventListener("input", function (event) {
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
    </script>
</div>
<style>
body {
    font-family: Arial, sans-serif;
    line-height: 1.6;
    margin: 0;
    padding: 0;
}
.main{
width: 100vw;
height: 100vh;
display: flex;
justify-content: center;
background-color: beige;
margin-top: 30px;
}
.box1st {
  width: 600px;
  height: 617px;
  background-color: rgb(180, 178, 95);
  border-radius: 8px;
  display: flex;
  justify-content: center;
  border: 2px solid #000000;
  position: relative;
  overflow: hidden;
}
.messenge-board {
  font-size: 30px;
  font-weight: bold;
  height: 68px;
  width: 500px;
  font-style: italic;
  padding-top: 20px;
  z-index: 100;
  position: absolute;
  top: 0px;
}
.box2nd {
  width: 500px;
  height: 500px;
  position: absolute;
  top: 68px;
  overflow: auto;
}
.messageList {
}
.container {
  width: 500px;
  position: absolute;
  bottom: 3px;
}
  textarea {
    width: 400px;
    height: 30px;
    margin-right: 10px;
    border-radius: 8px;
  }
  form {
    display: flex;
    align-items: center;
    border: none;
  }
/* ____________________________________Button__________ */
.message {
  border-top: 1.5px solid #ddd;
  border-bottom: 1.5px solid #ddd;
}
#messageForm {
  z-index: 10;
}
  /* CSS cho phần tử <p> trong danh sách lời nhắn */
.message p {
  font-size: 16px;
  margin: 0;
  /* margin: 5px 0; */
}
/* CSS cho phần tử <small> trong danh sách lời nhắn */
.message small {
  font-size: 13px;
  color: #000000;
}
  /* ____________________________________Button__________ */
button {
  background-color: #fbff01;
  font-weight: bold;
  color: rgb(0, 0, 0);
  border: none;
  padding: 10px 20px;
  text-align: center;
  text-decoration: none;
  display: inline-block;
  font-size: 16px;
  cursor: pointer;
  transition: background-color 0.3s;
  border-radius: 8px;
}
button:hover {
  background-color: #5145a0;
}

</style>


`If you have any questions or simply want to talk about your day, I'm always ready to hear from you. I'm always here, waiting for you!🍀🍀🍀`
#

