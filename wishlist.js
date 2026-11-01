
document.addEventListener("DOMContentLoaded", function () {

    const wishlistContainer = document.getElementById("wishlistContainer");

    // Get Wishlist from localStorage
    let wishlist = JSON.parse(
        localStorage.getItem("retailFlowWishlist")
    ) || [];

    // Demo Product Details
    const products = [
        { name: "Wireless Headphones", price: 3500, emoji: "🎧" },
        { name: "Smart Watch", price: 5000, emoji: "⌚" },
        { name: "Sports Shoes", price: 4200, emoji: "👟" },
        { name: "Travel Backpack", price: 2800, emoji: "🎒" }
    ];

    // Display Wishlist Products
    function displayWishlist() {

        wishlistContainer.innerHTML = "";

        if (wishlist.length === 0) {
            wishlistContainer.innerHTML =
                '<p class="empty-wishlist">Your Wishlist is empty!</p>';
            return;
        }

        wishlist.forEach(function (productName) {

            const product = products.find(
                item => item.name === productName
            );

            if (!product) return;

            const card = document.createElement("div");

            card.className = "product-card";

            card.innerHTML = `
                <div class="product-image">
                    ${product.emoji}
                </div>

                <div class="product-info">
                    <h3>${product.name}</h3>

                    <p class="price">
                        Rs. ${product.price.toLocaleString("en-PK")}
                    </p>

                    <button data-name="${product.name}">
                        Remove from Wishlist
                    </button>
                </div>
            `;

            wishlistContainer.appendChild(card);

        });
    }

    // Remove Product from Wishlist
    wishlistContainer.addEventListener("click", function (e) {

        const button = e.target.closest("button[data-name]");

        if (!button) return;

        const productName = button.dataset.name;

        wishlist = wishlist.filter(
            name => name !== productName
        );

        localStorage.setItem(
            "retailFlowWishlist",
            JSON.stringify(wishlist)
        );

        displayWishlist();

    });

    // Show Wishlist
    displayWishlist();

});
