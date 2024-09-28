let imgBox = document.getElementById("imgBox");
let qrImg = document.getElementById("qrImg");
let qrText = document.getElementById("qrText");
let downloadBtn = document.getElementById("downloadBtn");

// Function to generate the QR code based on the input text
function generateQR() {
    if (qrText.value.length > 0) {
        qrImg.src = "https://api.qrserver.com/v1/create-qr-code/?size=150x150&data=" + qrText.value;
        imgBox.classList.add("show-img");
    } else {
        qrText.classList.add("error");
        setTimeout(function() {
            qrText.classList.remove("error");
        }, 1000);
    }
}

// // Event listener for the download button to download the QR code image
// downloadBtn.addEventListener("click", function() {
//     if (qrImg.src && qrText.value.length > 0) { // Ensure the QR image is generated
//         const link = document.createElement('a');
//         link.href = qrImg.src;
//         link.download = 'qrcode.png';
//         document.body.appendChild(link);
//         link.click();
//         document.body.removeChild(link);
//     } else {
//         alert("Please generate a QR code first!"); 
//     }
// });
