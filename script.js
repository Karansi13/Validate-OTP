
// localStorage.setItem(key, value)

function generateOTP() {

    let generateotp = Math.floor(1000 + Math.random()*9000);
    alert(generateotp)
    window.localStorage.setItem("otp", generateotp)
}

function validateOTP (){
    let validOtp = document.querySelector("#validOtp").value;

    let otp = window.localStorage.getItem("otp")

    if(validOtp == otp) {
        alert("success")
    }
    else {
        alert("Invalid otp")
    }
}