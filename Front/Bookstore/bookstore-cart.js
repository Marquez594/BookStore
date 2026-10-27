const CART_KEY = "bookstore_cart";
const DEMO_PRICE = 19.99;

function getCart() {
    try {
        return JSON.parse(localStorage.getItem(CART_KEY)) || [];
    } catch (error) {
        return [];
    }
}

function saveCart(cart) {
    localStorage.setItem(CART_KEY, JSON.stringify(cart));
    updateCartCount();
}

function addToCart(book) {
    let cart = getCart();

    // NYT titles are used as demo identifiers.
    let id = book.title + "|" + book.author;

    let existingBook = cart.find(item => item.id === id);

    if (existingBook) {
        existingBook.quantity++;
    } else {
        cart.push({
            id: id,
            title: book.title,
            author: book.author,
            cover: book.cover,
            price: DEMO_PRICE,
            quantity: 1
        });
    }

    saveCart(cart);
}

function removeFromCart(id) {
    let cart = getCart();

    cart = cart.filter(item => item.id !== id);

    saveCart(cart);
}

function changeQuantity(id, amount) {
    let cart = getCart();

    let item = cart.find(book => book.id === id);

    if (!item) {
        return;
    }

    item.quantity += amount;

    if (item.quantity <= 0) {
        cart = cart.filter(book => book.id !== id);
    }

    saveCart(cart);
}

function updateCartCount() {
    let cart = getCart();

    let count = cart.reduce((total, book) => {
        return total + book.quantity;
    }, 0);

    let cartCount = document.getElementById("cartCount");

    if (cartCount) {
        cartCount.innerText = count;
    }
}

function money(amount) {
    return "$" + amount.toFixed(2);
}

document.addEventListener("DOMContentLoaded", updateCartCount);