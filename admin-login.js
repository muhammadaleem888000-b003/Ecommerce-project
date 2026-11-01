
const adminLoginForm = document.getElementById("adminLoginForm");

adminLoginForm.addEventListener("submit", async function (e) {

    e.preventDefault();

    const email = document.getElementById("adminEmail").value;
    const password = document.getElementById("adminPassword").value;

    try {

        const response = await fetch(
            "http://localhost:5000/api/admin_login",
            {
                method: "POST",
                headers: {
                    "Content-Type": "application/json"
                },
                body: JSON.stringify({ email, password })
            }
        );

        const data = await response.json();

        if (response.ok) {

            localStorage.setItem("adminToken", data.token);

            alert("Admin Login Successful!");

            window.location.href = "admin-dashboard.html";

        } else {

            alert(data.message || "Admin Login Failed!");

        }

    } catch (error) {

        console.error("Admin Login Error:", error);
        alert("Cannot connect to server!");

    }

});
