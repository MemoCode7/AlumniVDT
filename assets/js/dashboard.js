auth.onAuthStateChanged(user => {
    if (user) {
        document.getElementById("user-email").innerText = user.email;
    } else {
        window.location.href = "login.html";
    }
});
