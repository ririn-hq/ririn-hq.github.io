
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



const userID = "906037896295878706"; //put your Discord user id here
const statusDiv = document.getElementById("status"); // Chọn thẻ div có ID là "status"
const avatarDiv = document.getElementById("my_avt");
async function fetchDiscordStatus() {
    try {
        const response = await axios.get(
            `https://api.lanyard.rest/v1/users/${userID}`
        );
        
        const { data } = response.data;
        const { discord_status, activities } = data;

        let backgroundColor;
        switch (discord_status) {
            case "online":
                backgroundColor = "#00ff1e";
                filter = "unset";
                avatarDiv.style.filter = filter;
                break;
            case "idle":
                backgroundColor = "#f5c904";
                filter = "unset";
                avatarDiv
                break;
            case "dnd":
                backgroundColor = "#f50408";
                filter = "unset";
                avatarDiv
                break;
            case "offline":
                backgroundColor = "#474646";
                filter = "saturate(30%)";
                avatarDiv.style.filter = filter;
                break;
            default:
                backgroundColor = "#cb2073";
                break;
        }

        // Áp dụng màu nền cho thẻ div "status"
        statusDiv.style.backgroundColor = backgroundColor;
    } catch (error) {
		console.error("Unable to get Discord status:", error);
	}
}

// Gọi hàm để lấy và cập nhật trạng thái Discord
fetchDiscordStatus();
setInterval(fetchDiscordStatus, 1000);