document.getElementById("profileForm").addEventListener("submit", function(event) {
    event.preventDefault();

    const user = firebase.auth().currentUser;
    if (!user) {
        alert("You must be logged in");
        return;
    }

    const fullName = document.getElementById("fullName").value;
    const bio = document.getElementById("bio").value;
    const skills = document.getElementById("skills").value.split(",");

    firebase.firestore().collection("users").doc(user.uid).set({
        fullName: fullName,
        bio: bio,
        skills: skills,
        email: user.email
    }).then(() => {
        document.getElementById("message").innerText = "Profile updated!";
        window.location.href = "dashboard.html"; // Redirect to Dashboard
    }).catch(error => {
        console.error("Error updating profile:", error);
    });
});
