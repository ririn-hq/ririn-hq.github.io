
// Tạo một mảng để lưu trữ các link ảnh từ GitHub
const imageUrls = [];
// Thay đổi đường dẫn dưới đây thành đường dẫn thư mục ảnh của bạn.
const githubRepoUrl = 'https://github.com/TokisakiNinoVn/TokisakiNinoVn/tree/main/ImgView';
// Thay đổi đường dẫn dưới đây thành đường dẫn tới tệp tin proxy.php trên máy chủ của bạn
const proxyUrl = 'https://nino.is-a.dev/proxy.php';

// Hàm này lấy các link ảnh từ GitHub và hiển thị chúng lên trang web.
async function displayRandomImages() {
    try {
        // Gọi API GitHub để lấy nội dung của thư mục công khai (thư mục ImgView)
        const response = await fetch(proxyUrl + '?url=' + encodeURIComponent(githubRepoUrl));
        const data = await response.text();

        // Tạo một HTML tạm thời để phân tích nội dung
        const tempDiv = document.createElement('div');
        tempDiv.innerHTML = data;

        // ...
        // Các phần còn lại của hàm displayRandomImages() không thay đổi
        // Lấy tất cả các liên kết trong thư mục (đây có thể là các tệp hoặc thư mục)
        const links = tempDiv.querySelectorAll('a');

        // Lọc chỉ giữ lại các liên kết hình ảnh (có đuôi .jpg, .jpeg, .png, .gif, v.v.)
        links.forEach(link => {
            const imageUrl = link.href;
            if (imageUrl.match(/\.(jpeg|jpg|gif|png)$/)) {
                imageUrls.push(imageUrl);
            }
        });

        // Hiển thị ngẫu nhiên một ảnh trong mảng imageUrls
        displayRandomImage();
    } catch (error) {
        console.error('Error fetching images:', error);
    }
}

// Hàm này hiển thị ngẫu nhiên một ảnh trong mảng imageUrls lên trang web
// Thay đổi đoạn mã trong hàm displayRandomImage()
function displayRandomImage() {
    const imageContainer = document.getElementById('image-container');
    const imgElement = document.querySelector('.img-style');

    // Nếu mảng imageUrls không trống, chọn ngẫu nhiên một ảnh và thay thế link ảnh trong thẻ img
    if (imageUrls.length > 0) {
        const randomImageUrl = imageUrls[Math.floor(Math.random() * imageUrls.length)];
        imgElement.src = randomImageUrl;
    } else {
        imageContainer.innerHTML = 'Không tìm thấy ảnh nào.';
    }
}


// Gọi hàm để lấy các link ảnh từ GitHub và hiển thị chúng lên trang web
displayRandomImages();

