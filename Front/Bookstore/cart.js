const cartItems = document.getElementById("cartItems");
const itemCount = document.getElementById("itemCount");
const subtotalElement = document.getElementById("subtotal");
const shippingElement = document.getElementById("shipping");
const totalElement = document.getElementById("total");
const checkoutBtn = document.getElementById("checkoutBtn");

function displayCart() {
    const cart = getCart();

    cartItems.replaceChildren();

    const count = cart.reduce(function (total, item) {
        return total + item.quantity;
    }, 0);

    itemCount.innerText = count + (count === 1 ? " item" : " items");

    updateCartCount();

    if (cart.length === 0) {
        const empty = document.createElement("div");
        empty.className = "empty-cart";

        const heading = document.createElement("h3");
        heading.innerText = "Your cart is empty";

        const message = document.createElement("p");
        message.innerText = "Looks like you haven't added any books yet.";

        const link = document.createElement("a");
        link.href = "/#bestSeller";
        link.innerText = "Browse Books";

        empty.appendChild(heading);
        empty.appendChild(message);
        empty.appendChild(link);

        cartItems.appendChild(empty);
    }

    for (let i = 0; i < cart.length; i++) {
        const book = cart[i];

        const item = document.createElement("div");
        item.className = "cart-item";

        const image = document.createElement("img");
        image.className = "cart-item-image";
        image.src = book.cover;
        image.alt = book.title;

        const info = document.createElement("div");
        info.className = "cart-item-info";

        const title = document.createElement("h3");
        title.className = "cart-item-title";
        title.innerText = book.title;

        const author = document.createElement("p");
        author.className = "cart-item-author";
        author.innerText = book.author;

        const price = document.createElement("p");
        price.className = "cart-item-price";
        price.innerText = money(book.price * book.quantity);

        // QUANTITY CONTROLS

        const quantity = document.createElement("div");
        quantity.className = "quantity-control";

        const minusButton = document.createElement("button");
        minusButton.type = "button";
        minusButton.innerText = "−";
        minusButton.setAttribute("aria-label", "Decrease quantity");

        const quantityNumber = document.createElement("span");
        quantityNumber.innerText = book.quantity;

        const plusButton = document.createElement("button");
        plusButton.type = "button";
        plusButton.innerText = "+";
        plusButton.setAttribute("aria-label", "Increase quantity");

        minusButton.addEventListener("click", function () {
            changeQuantity(book.id, -1);
            displayCart();
        });

        plusButton.addEventListener("click", function () {
            changeQuantity(book.id, 1);
            displayCart();
        });

        quantity.appendChild(minusButton);
        quantity.appendChild(quantityNumber);
        quantity.appendChild(plusButton);

        // REMOVE BUTTON

        const removeButton = document.createElement("button");
        removeButton.type = "button";
        removeButton.className = "remove-button";
        removeButton.innerText = "Remove";

        removeButton.addEventListener("click", function () {
            removeFromCart(book.id);
            displayCart();
        });

        // BUILD ITEM

        info.appendChild(title);
        info.appendChild(author);
        info.appendChild(price);
        info.appendChild(quantity);
        info.appendChild(removeButton);

        item.appendChild(image);
        item.appendChild(info);

        cartItems.appendChild(item);
    }

    updateTotals(cart);
}

function updateTotals(cart) {
    let subtotal = cart.reduce(function (total, book) {
        return total + (book.price * book.quantity);
    }, 0);

    // Free shipping for $50 or more.
    let shipping = 0;

    if (subtotal > 0 && subtotal < 50) {
        shipping = 4.99;
    }

    let total = subtotal + shipping;

    subtotalElement.innerText = money(subtotal);
    shippingElement.innerText = shipping === 0 ? "FREE" : money(shipping);
    totalElement.innerText = money(total);

    checkoutBtn.disabled = cart.length === 0;
}

// CHECKOUT PLACEHOLDER

checkoutBtn.addEventListener("click", function () {
    alert(
        "This is a bookstore class project. " +
        "Real checkout and payment processing are not implemented yet."
    );
});

displayCart();