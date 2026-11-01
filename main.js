
console.log("Welcome to RetailFlow!");

// Homepage Products
document.addEventListener("DOMContentLoaded", function () {

    console.log("Homepage loaded successfully!");

    // Demo Products
    const products = [
        {
            name: "Wireless Headphones",
            price: 3500,
            category: "Electronics",
            emoji: "🎧"
        },
        {
            name: "Smart Watch",
            price: 5000,
            category: "Electronics",
            emoji: "⌚"
        },
        {
            name: "Sports Shoes",
            price: 4200,
            category: "Fashion",
            emoji: "👟"
        },
        {
            name: "Travel Backpack",
            price: 2800,
            category: "Fashion",
            emoji: "🎒"
        }
    ];

    // Get Products Container
    const productsContainer = document.getElementById("productsContainer");

    // Display Products
    if (productsContainer) {

        productsContainer.innerHTML = products.map(product => `
            <div class="product-card">

                <div class="product-image">
                    ${product.emoji}
                </div>

                <div class="product-info">

                    <h3>${product.name}</h3>

                    <p>${product.category}</p>

                    <p class="price">
                        Rs. ${product.price.toLocaleString("en-PK")}
                    </p>

                    <button onclick="addToCart('${product.name}')">
                        Add to Cart
                    </button>

                    <button onclick="addToWishlist('${product.name}')">
                        Add to Wishlist
                    </button>

                </div>

            </div>
        `).join("");

    }

});


// Add Product to Cart
function addToCart(productName) {

    const products = [
        { name: "Wireless Headphones", price: 3500, emoji: "🎧" },
        { name: "Smart Watch", price: 5000, emoji: "⌚" },
        { name: "Sports Shoes", price: 4200, emoji: "👟" },
        { name: "Travel Backpack", price: 2800, emoji: "🎒" }
    ];

    const selectedProduct = products.find(
        product => product.name === productName
    );

    if (!selectedProduct) return;

    let cart = JSON.parse(localStorage.getItem("retailFlowCart")) || [];

    const existingProduct = cart.find(
        product => product.name === productName
    );

    if (existingProduct) {
        existingProduct.quantity++;
    } else {
        cart.push({
            ...selectedProduct,
            quantity: 1
        });
    }

    localStorage.setItem("retailFlowCart", JSON.stringify(cart));

    alert(productName + " added to cart!");
}


// Add Product to Wishlist
function addToWishlist(productName) {

    let wishlist = JSON.parse(localStorage.getItem("retailFlowWishlist")) || [];

    if (wishlist.includes(productName)) {
        alert("Product is already in your Wishlist!");
        return;
    }

    wishlist.push(productName);

    localStorage.setItem("retailFlowWishlist", JSON.stringify(wishlist));

    alert(productName + " added to Wishlist!");
}
