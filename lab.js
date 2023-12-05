let calculator = {
    read() {
        this.a = prompt('Enter number 1:');
        this.b = prompt('Enter number 2:');
    },
    sum() {
        return Number(this.a) + Number(this.b);
    },
    mul() {
        return this.a * this.b;
    }
};

function calculate() {
    calculator.read();

    // คำนวณผลลัพธ์
    const sumResult = calculator.sum();
    const mulResult = calculator.mul();

    // แสดงผลลัพธ์ในหน้า HTML
    document.getElementById('sumResult').innerText = '      ผลบวก : ' + sumResult;
    document.getElementById('mulResult').innerText = '      ผลคูณ : ' + mulResult;
}

// เลือกปุ่มและเพิ่ม Event Listener เมื่อคลิก
document.addEventListener('DOMContentLoaded', function () {
    const calculateButton = document.getElementById('calculateButton');
    calculateButton.addEventListener('click', calculate);
});


function DestinyDice() {
    return Math.floor(Math.random() * 6 + 1);
}

// เลือกปุ่มและเพิ่ม Event Listener เมื่อคลิก
document.addEventListener('DOMContentLoaded', function () {
    const rollButton = document.getElementById('rollButton');
    const resultText = document.getElementById('resultText');

    rollButton.addEventListener('click', function () {
        const result = DestinyDice();
        resultText.innerText = 'ได้เลข : ' + result + ' :';
    });
});


function ucFirst(str) {
    firstChar = str.slice(0, 1);
    remainChar = str.slice(1);
    upperFirst = firstChar.toUpperCase();
    result = upperFirst + remainChar;
    return result;
}

function convertToUpperCase() {
    const inputText = document.getElementById('inputText').value;
    const output = document.getElementById('output');
    
    // เรียกใช้ฟังก์ชัน ucFirst() และแสดงผลลัพธ์
    const result = ucFirst(inputText);
    output.textContent = result;
}
function showAlert() {
    alert('ชินพัฒน์ ปทุมสูตร [KKTECH]');
  } 
function calculateHypotenuse() {
    var sideA = parseFloat(prompt("ป้อนความยาวด้าน a ของสามเหลี่ยมมุมฉาก:"));
    var sideB = parseFloat(prompt("ป้อนความยาวด้าน b ของสามเหลี่ยมมุมฉาก:"));

    var hypotenuse = Math.sqrt(Math.pow(sideA, 2) + Math.pow(sideB, 2));

    var resultElement = document.getElementById("result2");
    resultElement.textContent = "ความยาวของเส้นทแยงมุม (c) คือ: " + hypotenuse.toFixed(2);
  }