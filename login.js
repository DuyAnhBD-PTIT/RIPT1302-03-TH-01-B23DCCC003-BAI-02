function validateLogin() {
    var username = document.getElementById("Username").value;
    var password = document.getElementById("Password").value;
    if (username == "admin" && password == "admin") {
        window.location.href = "quantri.html";
    } else {
        alert("Incorrect username or password. Please try again.");
        window.location.href = "login.html";
    }
}