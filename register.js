
// Customer Registration
const registerForm = document.getElementById("registerForm");

if (registerForm) {
    registerForm.addEventListener("submit", async function (e) {
        e.preventDefault();

        const name = document.getElementById("name").value;
        const email = document.getElementById("email").value;
        const password = document.getElementById("password").value;
        const confirmPassword = document.getElementById("confirmPassword").value;

        // Check password confirmation
        if (password !== confirmPassword) {
            alert("Passwords do not match!");
            return;
        }

        try {
            const response = await fetch("http://localhost:5000/api/register", {
                method: "POST",
                headers: {
                    "Content-Type": "application/json"
                },
                body: JSON.stringify({
                    name: name,
                    email: email,
                    password: password
                })
            });

            const data = await response.json();

            if (response.ok) {
                alert("Registration Successful!");
                registerForm.reset();
                window.location.href = "login.html";
            } else {
                alert(data.message || "Registration Failed!");
            }

        } catch (error) {
            console.error("Registration Error:", error);
            alert("Cannot connect to server. Please try again.");
        }
    });
}
