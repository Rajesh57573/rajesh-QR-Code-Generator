const button = document.getElementById("btn");
const input = document.getElementById("qr-input");
const qrBox = document.getElementById("qr-box");

function genQRCode () {
    if(input.value.length > 0) {
        qrBox.src = "https://api.qrserver.com/v1/create-qr-code/?size=150x150&data=" + input.value;
        imgbox.classList.add("show-img");
    }
    else {
        input.classList.add("error");
        setTimeout(() => {
            input.classList.remove("error");
        }, 1000);
    }
}

button.addEventListener("click", genQRCode);