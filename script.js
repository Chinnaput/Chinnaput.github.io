const body = document.querySelector('body'),
    sidebar = body.querySelector('nav'),
    toggle = body.querySelector(".toggle"),
    searchBtn = body.querySelector(".search-box"),
    modeSwitch = body.querySelector(".toggle-switch"),
    modeText = body.querySelector(".mode-text");


toggle.addEventListener("click", () => {
    sidebar.classList.toggle("close");
})

searchBtn.addEventListener("click", () => {
    sidebar.classList.remove("close");
})


// ตรวจสอบสถานะโหมดที่เก็บไว้ใน Local Storage
const storedMode = localStorage.getItem("mode");
if (storedMode === "dark") {
    body.classList.add("dark");
    modeText.innerText = "Light mode";
} else {
    body.classList.remove("dark");
    modeText.innerText = "Dark mode";
}

// เมื่อผู้ใช้คลิกสลับโหมด
modeSwitch.addEventListener("click", () => {
    body.classList.toggle("dark");

    if (body.classList.contains("dark")) {
        modeText.innerText = "Light mode";
        localStorage.setItem("mode", "dark"); // เซฟสถานะโหมดใน Local Storage
    } else {
        modeText.innerText = "Dark mode";
        localStorage.setItem("mode", "light"); // เซฟสถานะโหมดใน Local Storage
    }
});


function getDogImage() {
    // เรียกใช้ API โดยใช้ fetch ใน JavaScript
    fetch('https://dog.ceo/api/breeds/image/random')
        .then(response => response.json())
        .then(data => {
            // เรียกข้อมูลภาพสุนัขที่ได้จาก API
            let imageUrl = data.message;

            // แสดงภาพสุนัขในหน้า HTML
            let dogImageElement = document.getElementById('dogImage');
            dogImageElement.src = imageUrl;
        })
        .catch(error => console.error('Error fetching data:', error));
}


let runningTexts = document.querySelectorAll('.running-text');
let colors = ['#FF0000', '#00FF00', '#0000FF']; // สีที่ต้องการเปลี่ยน
let currentIndex = 0;

setInterval(function () {
    // เปลี่ยนสีของทุกๆ ข้อความที่มีคลาส .running-text
    runningTexts.forEach(function (text) {
        text.style.color = colors[currentIndex];
    });

    currentIndex = (currentIndex + 1) % colors.length; // เพิ่ม index และกำหนดให้เป็นสีที่มี index ใหม่
}, 1000);

