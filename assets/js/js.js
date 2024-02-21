
document.addEventListener("contextmenu", function(e) {
    e.preventDefault();
});
document.addEventListener("keydown", function(e) {
    if (e.ctrlKey && e.shiftKey && (e.keyCode === 73 || e.keyCode === 74)) {
        e.preventDefault();
    }
});


// const MyInformayion = {
//     name: 'Tokisaki Nino',
//     age: 'N/a',
//     gender: 'N/a',
//     skill: ['Js', 'Python', 'C#', 'Java'],
//     game: ['Genshin Impact', 'Honkai Impact 3rd'],
//     like: ['Anime', 'Music', 'Game', 'Coding'],
//     descript: 'I am an Information Technology student. I\'m a person who likes new things and I really like programming. I hope to become a good programmer in the future.'
// }


// Status Discord
// const statusDivLeft = document.getElementById("status");
// const tittleStatus = document.querySelector(".tittle_status");

// statusDivLeft.addEventListener("mouseenter", () => {
//     tittleStatus.classList.add("tittle_status-effect");
// });

// statusDivLeft.addEventListener("mouseleave", () => {
//     tittleStatus.classList.remove("tittle_status-effect");
// });




// const userID = "906037896295878706"; //put your Discord user id here
// const statusDiv = document.getElementById("status"); // Chọn thẻ div có ID là "status"
// const avatarDiv = document.getElementById("my_avt");
// const statusText = document.querySelector(".tittle_status");

// async function fetchDiscordStatus() {
//     try {
//         const response = await axios.get(
//             `https://api.lanyard.rest/v1/users/${userID}`
//         );
        
//         const { data } = response.data;
//         const { discord_status, activities } = data;

//         let backgroundColor;
//         switch (discord_status) {
//             case "online":
//                 statusText.textContent = "Online";
//                 backgroundColor = "#00ff1e";
//                 filter = "unset";
//                 avatarDiv.style.filter = filter;
//                 break;
//             case "idle":
//                 statusText.textContent = "Idle";
//                 backgroundColor = "#f5c904";
//                 filter = "unset";
//                 avatarDiv.style.filter = "unset";
//                 break;
//             case "dnd":
//                 statusText.textContent = "Do not bother";
//                 backgroundColor = "#f50408";
//                 filter = "unset";
//                 avatarDiv.style.filter = "unset";
//                 break;
//             case "offline":
//                 statusText.textContent = "Offline";
//                 // backgroundColor = "#474646";
//                 backgroundColor = "rgb(255, 0, 242);";
//                 filter = "saturate(30%)";
//                 avatarDiv.style.filter = filter;
//                 break;
//             default:
//                 statusText.textContent = "Unknown";
//                 backgroundColor = "#cb2073";
//                 break;
//         }

//         statusDiv.style.backgroundColor = backgroundColor;
//     } catch (error) {
// 		console.error("Unable to get Discord status:", error);
// 	}
// }

// // Gọi hàm để lấy và cập nhật trạng thái Discord
// fetchDiscordStatus();
// setInterval(fetchDiscordStatus, 1000);







 // Sử dụng GitHub API để lấy avatar
const username = "tokisakininovn";
const apiUrl = `https://api.github.com/users/${username}`;

fetch(apiUrl)
    .then(response => response.json())
    .then(data => {
        const avatarUrl = data.avatar_url;
        const avatarElement = document.getElementById("my_avt");
        avatarElement.src = avatarUrl;
    })
    .catch(error => {
        console.error('>> Error: ', error);
    });
setInterval(fetch, 5000);