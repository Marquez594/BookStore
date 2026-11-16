function displayTransactions(transactions) {
  const container = document.getElementById("transaction_section");

  container.innerHTML = "";

  transactions.slice().reverse().forEach((transaction) => {
    const transactionDiv = document.createElement("div");
    transactionDiv.classList.add("transaction-area");

    const date = document.createElement("h1");
    date.classList.add("dateOfTransaction");
    date.textContent = new Date(transaction.create_at).toLocaleString();

    const booksBought = document.createElement("div");
    booksBought.classList.add("books-bought");

    transaction.cart.forEach((book) => {
      const cover = document.createElement("div");
      cover.classList.add("cover");

      const quantity = document.createElement("div");
      quantity.classList.add("quantity");
      quantity.textContent = book.quantity;

      cover.title = book.title;
      cover.style.backgroundImage = `url("${book.cover}")`;

      booksBought.appendChild(cover);
      cover.appendChild(quantity);
    });
    transactionDiv.appendChild(date);
    transactionDiv.appendChild(booksBought);

    container.appendChild(transactionDiv);
  });
}

async function getProfile() {
  try {
    const res = await fetch("http://localhost:4000/users/getProfile", {
      method: "GET",
      credentials: "include",
    });

    const data = await res.json();
    console.log(data);

    document.getElementById("user_name").textContent =
      `${data.profile.first_name} ${data.profile.last_name}`;

    document.getElementById("user_handle").textContent =
      `@${data.profile.username}`;

    document.getElementById("initials").textContent =
      `${data.profile.first_name.charAt(0)}${data.profile.last_name.charAt(0)}`;

    document.getElementById("review_number").textContent =
      `${data.reviewNumber}`;

    document.getElementById("transaction-number").textContent = 
      `${data.transaction.length}`
    displayTransactions(data.transaction);
  } catch (error) {
    console.error(error);
  }
}

async function signOut() {
  try {
    const res = await fetch("http://localhost:4000/users/logout", {
      method: "POST",
      credentials: "include",
    });
    const data = await res.json();
    if (!res.ok) {
      return;
    }
    if (data.success == true) {
      window.location.href = "index.html";
    }
  } catch (error) {
    console.error(error);
  }
}

document.getElementById("signOut").addEventListener("click", signOut);

getProfile();
