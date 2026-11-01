
document.addEventListener("DOMContentLoaded", function () {

    const checkoutForm = document.getElementById("checkoutForm");

    const cart = JSON.parse(
        localStorage.getItem("retailFlowCart")
    ) || [];

    let total = 0;

    cart.forEach(function (product) {
        total += product.price * product.quantity;
    });

    document.getElementById("checkoutTotal").textContent =
        "Rs. " + total.toLocaleString("en-PK");

    checkoutForm.addEventListener("submit", function (e) {

        e.preventDefault();

        if (cart.length === 0) {
            alert("Your cart is empty!");
            return;
        }

        const order = {
            name: document.getElementById("customerName").value,
            email: document.getElementById("customerEmail").value,
            phone: document.getElementById("customerPhone").value,
            address: document.getElementById("customerAddress").value,
            payment: document.getElementById("paymentMethod").value,
            products: cart,
            total: total
        };

        localStorage.setItem(
            "retailFlowLastOrder",
            JSON.stringify(order)
        );

        alert("Your demo order has been placed successfully!");

        localStorage.removeItem("retailFlowCart");

        window.location.href = "index.html";

    });

});
