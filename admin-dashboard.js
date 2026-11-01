
document.addEventListener("DOMContentLoaded", function () {

    // Check Admin Login
    const adminToken = localStorage.getItem("adminToken");

    if (!adminToken) {
        alert("Please login as Admin first!");
        window.location.href = "admin-login.html";
        return;
    }

    // Get Last Demo Order
    const order = JSON.parse(
        localStorage.getItem("retailFlowLastOrder")
    );

    const recentOrder = document.getElementById("recentOrder");
    const totalOrders = document.getElementById("totalOrders");

    // Display Order Information
    if (order) {

        totalOrders.textContent = "1";

        recentOrder.innerHTML = `
            <p><strong>Customer:</strong> ${order.name}</p>
            <p><strong>Email:</strong> ${order.email}</p>
            <p><strong>Phone:</strong> ${order.phone}</p>
            <p><strong>Total:</strong> Rs. ${order.total}</p>
            <p><strong>Payment:</strong> ${order.payment}</p>
        `;

    }

    // Admin Logout
    document.getElementById("logoutBtn").addEventListener(
        "click",
        function () {

            localStorage.removeItem("adminToken");

            alert("Admin Logged Out!");

            window.location.href = "admin-login.html";

        }
    );

});
