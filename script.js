// Simple cart functionality
let cart = [];

function addToCart(productName, price) {
    cart.push({ name: productName, price: parseFloat(price.replace('$', '')) });
    updateCartDisplay();
    alert(`${productName} added to cart!`);
}

function updateCartDisplay() {
    // For now, just log to console. In a real app, you'd update a cart UI
    console.log('Cart contents:', cart);
    console.log('Total items:', cart.length);
    console.log('Total price:', cart.reduce((sum, item) => sum + item.price, 0).toFixed(2));
}

// Add event listeners to all "Add to Cart" buttons
document.addEventListener('DOMContentLoaded', function() {
    const buttons = document.querySelectorAll('.product-card .btn');
    buttons.forEach((button, index) => {
        button.addEventListener('click', function() {
            const card = button.closest('.product-card');
            const name = card.querySelector('h3').textContent;
            const price = card.querySelector('p').textContent;
            addToCart(name, price);
        });
    });
});

// Smooth scrolling for navigation links
document.querySelectorAll('nav a').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
        e.preventDefault();
        const target = document.querySelector(this.getAttribute('href'));
        if (target) {
            target.scrollIntoView({
                behavior: 'smooth'
            });
        }
    });
});
