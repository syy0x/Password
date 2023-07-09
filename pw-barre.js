function generatePassword(strength) {
    var length = document.getElementById("passwordLength").value;
    var charset = "abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ0123456789";

    if (strength === 'green') {
        charset += "!@#$%^&*()_+-=[]{};:'|,.<>/?";
    }

    var retVal = "";
    for (var i = 0, n = charset.length; i < length; ++i) {
        retVal += charset.charAt(Math.floor(Math.random() * n));
    }

    document.getElementById("password").value = retVal;
}

function updateLengthValue(val) {
    document.getElementById("lengthDisplay").textContent = val;
}
