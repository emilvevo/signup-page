const signButton = document.getElementById("submit");
const passwordInput = document.getElementById("password");
const repasswordInput = document.getElementById("repassword");
const emailInput = document.getElementById("email");

signButton.addEventListener('click', () => {
    checkPassword();
});

emailInput.addEventListener('change', () => {
    emailInput.value = emailInput.value.toUpperCase();
})

function checkPassword() {
    if (passwordInput.value === "" && repasswordInput.value === "") {
        alert("You have to complete all information.");
    } else {
        if (passwordInput.value === repasswordInput.value) {
            alert("Your account created successfully.");
        } else {
            alert("Your passwords are not appropriate.");
        };
    };
};