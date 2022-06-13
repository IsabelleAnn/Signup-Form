const pass = document.getElementById("password");
const confirm = document.getElementById("confirm-password");

pass.addEventListener("keyup", (element) => {
    if (check(pass.value, confirm.value)) {
        console.log("passwords match!");
    }

});

confirm.addEventListener("keyup", (element) => {
    if (check(pass.value, confirm.value)) {
        console.log("passwords match!");
    }
});

function check(val1, val2) {
    return (val1 == val2);
}