
document.addEventListener("DOMContentLoaded", function () {

    const cartContainer = document.getElementById("cartContainer");
    const cartTotal = document.getElementById("cartTotal");
    const checkoutBtn = document.getElementById("checkoutBtn");

    // Get Cart Data from Local Storage
    let cart = JSON.parse(
        localStorage.getItem("retailFlowCart")
    ) || [];

    // Save Cart Data
    function saveCart() {
        localStorage.setItem(
            "retailFlowCart",
            JSON.stringify(cart)
        );
    }

    // Display Cart Products
    function displayCart() {

        cartContainer.innerHTML = "";

        if (cart.length === 0) {

            cartContainer.innerHTML = `
                <p class="empty-cart">
                    Your cart is empty!
                </p>
            `;

            cartTotal.textContent = "Rs. 0";
            return;
        }

        cart.forEach(function (product, index) {

            const productCard = document.createElement("div");

            productCard.className = "product-card";

            productCard.innerHTML = `
                <div class="product-image">
                    ${product.emoji}
                </div>

                <div class="product-info">

                    <h3>${product.name}</h3>

                    <p class="price">
                        Rs. ${product.price.toLocaleString("en-PK")}
                    </p>

                    <p class="quantity">
                        Quantity: ${product.quantity}
                    </p>

                    <div class="cart-buttons">

                        <button data-action="increase" data-index="${index}">
                            +
                        </button>

                        <button data-action="decrease" data-index="${index}">
                            -
                        </button>

                        <button data-action="remove" data-index="${index}">
                            Remove
                        </button>

                    </div>

                </div>
            `;

            cartContainer.appendChild(productCard);

        });

        // Calculate Total Price
        let total = 0;

        cart.forEach(function (product) {
            total += product.price * product.quantity;
        });

        cartTotal.textContent =
            "Rs. " + total.toLocaleString("en-PK");

    }

    // Handle Cart Buttons
    cartContainer.addEventListener("click", function (e) {

        const button = e.target.closest("button[data-action]");

        if (!button) return;

        const index = Number(button.dataset.index);

        const action = button.dataset.action;

        if (action === "increase") {

            cart[index].quantity++;

        }

        else if (action === "decrease") {

            cart[index].quantity--;

            if (cart[index].quantity <= 0) {
                cart.splice(index, 1);
            }

        }

        else if (action === "remove") {

            cart.splice(index, 1);

        }

        // Save Updated Cart
        saveCart();

        // Refresh Cart Display
        displayCart();

    });

    // Checkout Button
    checkoutBtn.addEventListener("click", function () {

        if (cart.length === 0) {

            alert("Your cart is empty!");
            return;

        }

        // Open Checkout Page
        window.location.href = "checkout.html";

    });

    // Display Cart on Page Load
    displayCart();

});
