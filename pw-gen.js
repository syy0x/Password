function generatePassword(strength) {
    var length;
    var charset = "abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ0123456789";

    switch(strength) {
        case 'red':
            length = 5;
            break;
        case 'orange':
            length = 8;
            break;
        case 'green':
            length = 12;
            charset += "!@#$%^&*()_+-=[]{};:'|,.<>/?";
            break;
        default:
            length = 8;
    }

    var retVal = "";
    for (var i = 0, n = charset.length; i < length; ++i) {
        retVal += charset.charAt(Math.floor(Math.random() * n));
    }

    document.getElementById("password").value = retVal;
}
