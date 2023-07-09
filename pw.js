function checkPassword() {
    var password = document.getElementById("password").value;
    var strengthText = document.getElementById("passwordStrength");

    var specialCharacterRegex = /[!@#$%^&*()_+\-=\[\]{};':"\\|,.<>\/?]+/g;
    var specialCharactersMatch = password.match(specialCharacterRegex);

    if (password.length < 6) {
        strengthText.textContent = "Password is weak";
        strengthText.style.color = "red";
    } else if (password.length >= 6 && password.length < 10) {
        strengthText.textContent = "Password is medium";
        strengthText.style.color = "orange";
    } else if (password.length >= 10 && specialCharactersMatch && specialCharactersMatch.length >= 2) {
        strengthText.textContent = "Password is fine";
        strengthText.style.color = "green";
    } else {
        strengthText.textContent = "Password is medium";
        strengthText.style.color = "orange";
    }
}