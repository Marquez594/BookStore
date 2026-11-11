 // ========================================
 // BANNER CAROUSEL
 // ========================================

const rBt = document.getElementById("right");
const lBt = document.getElementById("left");
const slide = document.getElementById("slide");

const signInLink = document.getElementById("signIn/name");

async function getProfile() {
  try {
    const res = await fetch("http://localhost:4000/users/getProfile", {
      method: "GET",
      credentials: "include",
    });

    if (!res.ok) {
      signInLink.textContent = "Sign In";
      signInLink.href = "login.html";
      return;
    }

    const data = await res.json();
    console.log(data);

    signInLink.textContent = data.profile.username;
    signInLink.href = "profile.html";
  } catch (error) {
    console.error(error);
    signInLink.textContent = "Sign In";
    signInLink.href = "login.html";
  }
}

getProfile();

const bannerPics = [
  "image/elegantLib.jpg",
  "image/banner2.jpg",
  "image/banner3.jpg",
];

let currentIndex = 0;

function changeBannerRight() {
  currentIndex++;

  if (currentIndex === bannerPics.length) {
    currentIndex = 0;
  }

  slide.style.transform = "translateX(" + -(currentIndex * 100) + "%)";
}

function changeBannerLeft() {
  currentIndex--;

  if (currentIndex < 0) {
    currentIndex = bannerPics.length - 1;
  }

  slide.style.transform = "translateX(" + -(currentIndex * 100) + "%)";
}

rBt.addEventListener("click", changeBannerRight);
lBt.addEventListener("click", changeBannerLeft);


// ========================================
// BEST SELLERS CAROUSEL
// ========================================

const rCara = document.getElementById("rightCarousel");
const lCara = document.getElementById("leftCarousel");
const bookSlide = document.getElementById("bookSlide");
const bookWindow = document.getElementById("bookWindow");
const bookStatus = document.getElementById("bookStatus");

let bookSlideIndex = 0;
let allBooks = [];

function getVisibleBookCount() {
    const firstCard = bookSlide.querySelector(".bookCard");

  if (!firstCard) {
    return 1;
  }

    const cardWidth = firstCard.getBoundingClientRect().width;
    const gap = parseFloat(getComputedStyle(bookSlide).gap) || 0;

    return Math.max(
        1,
        Math.floor(
            (bookWindow.clientWidth + gap + 1) /
            (cardWidth + gap)
        )
    );
}

function getTotalBookPages() {
  return Math.ceil(bookSlide.children.length / getVisibleBookCount());
}

function updateBookSlide() {
  const cards = bookSlide.querySelectorAll(".bookCard");

  if (cards.length === 0) {
    return;
  }

    const visibleCount = getVisibleBookCount();
    let firstIndex = bookSlideIndex * visibleCount;

  if (firstIndex >= cards.length) {
    bookSlideIndex = 0;
    firstIndex = 0;
  }

    const offset =
        cards[firstIndex].offsetLeft - cards[0].offsetLeft;

  bookSlide.style.transform = "translateX(" + -offset + "px)";
}

function slideBookRight() {
    const totalPages = getTotalBookPages();

  if (totalPages === 0) {
    return;
  }

  bookSlideIndex++;

  if (bookSlideIndex >= totalPages) {
    bookSlideIndex = 0;
  }

  updateBookSlide();
}

function slideBookLeft() {
    const totalPages = getTotalBookPages();

  if (totalPages === 0) {
    return;
  }

  bookSlideIndex--;

  if (bookSlideIndex < 0) {
    bookSlideIndex = totalPages - 1;
  }

  updateBookSlide();
}

rCara.addEventListener("click", slideBookRight);
lCara.addEventListener("click", slideBookLeft);


// ========================================
// DISPLAY BEST SELLERS
// ========================================

function displayBooks(books) {
    bookSlide.replaceChildren();

    bookSlideIndex = 0;
    bookSlide.style.transform = "translateX(0px)";

  if (books.length === 0) {
    bookStatus.innerText = "No books found.";
    return;
  }

  bookStatus.innerText = "";

    for (let i = 0; i < books.length; i++) {
        const book = books[i];

        const card = document.createElement("div");
        card.className = "bookCard";

        const image = document.createElement("img");
        image.className = "bookCover";
        image.src = book.cover || "image/no-cover.jpg";
        image.alt = book.title || "Book cover";

        const title = document.createElement("h3");
        title.className = "title";
        title.innerText = book.title || "Unknown Title";

        const author = document.createElement("p");
        author.className = "author";
        author.innerText = book.author || "Unknown Author";

        const price = document.createElement("p");
        price.className = "price";
        price.innerText = money(DEMO_PRICE);

        const button = document.createElement("button");
        button.className = "addToCart";
        button.innerText = "Add to Cart";

        button.addEventListener("click", function () {
            addToCart(book);

      button.innerText = "Added ✓";

      setTimeout(function () {
        button.innerText = "Add to Cart";
      }, 1200);
    });

    card.appendChild(image);
    card.appendChild(title);
    card.appendChild(author);
    card.appendChild(price);
    card.appendChild(button);

    bookSlide.appendChild(card);
  }

  updateBookSlide();
}


// ========================================
// FETCH BEST SELLERS FROM DATABASE
// ========================================

function bestSellerResp(response) {
    if (!response.ok) {
        throw new Error("Could not load best sellers");
    }

    return response.json();
}

function bestSeller() {
    fetch("/books/getBestSellers")
        .then(bestSellerResp)
        .then(function (books) {
            allBooks = books;
            displayBooks(books);
        })
        .catch(function (error) {
            console.error("Best Sellers error:", error);

            bookStatus.innerText =
                "Could not load books. Please try refreshing.";
        });
}


// ========================================
// GOOGLE BOOKS SEARCH
// ========================================

const search = document.getElementById("search");
const searchResults = document.getElementById("searchResults");
const searchBooks = document.getElementById("searchBooks");
const searchStatus = document.getElementById("searchStatus");

let searchController = null;

search.addEventListener("submit", async function (event) {
    event.preventDefault();

    const query = search.querySelector("input").value.trim();

    // Cancel any previous search
    if (searchController) {
        searchController.abort();
    }

    // Hide search results if input is empty
    if (query === "") {
        searchController = null;
        searchResults.hidden = true;
        searchBooks.replaceChildren();
        searchStatus.innerText = "";
        return;
    }

    const controller = new AbortController();
    searchController = controller;

    searchResults.hidden = false;
    searchBooks.replaceChildren();
    searchStatus.innerText = "Searching books...";

    try {
        // Call our Express backend, not Google directly
        const url =
            "/books/searchBooks?q=" + encodeURIComponent(query);

        const response = await fetch(url, {
            signal: controller.signal
        });

        if (!response.ok) {
            const errorData = await response.json().catch(() => ({}));

            throw new Error(
                errorData.error ||
                "Search failed with status " + response.status
            );
        }

        // Our Express route returns an array of books
        const books = await response.json();

        if (!Array.isArray(books)) {
            throw new Error("Unexpected response from search route");
        }

        searchStatus.innerText =
            books.length === 0
                ? "No books found."
                : books.length + " results found";

        // Display the search results
books.forEach(function (book) {
    const card = document.createElement("div");
    card.className = "bookCard";

    const image = document.createElement("img");
    image.className = "bookCover";
    image.src = book.cover || "image/no-cover.jpg";
    image.alt = book.title || "Book cover";

    const title = document.createElement("h3");
    title.className = "title";
    title.innerText = book.title || "Unknown Title";

    const author = document.createElement("p");
    author.className = "author";
    author.innerText = book.author || "Unknown Author";

    // Display the same demo price as Best Sellers
    const price = document.createElement("p");
    price.className = "price";
    price.innerText = money(DEMO_PRICE);

    // Add to Cart button
    const button = document.createElement("button");
    button.className = "addToCart";
    button.innerText = "Add to Cart";

    button.addEventListener("click", function () {
        // Reuse the existing shopping cart functionality
        addToCart(book);

        button.innerText = "Added ✓";

        setTimeout(function () {
            button.innerText = "Add to Cart";
        }, 1200);
    });

    card.appendChild(image);
    card.appendChild(title);
    card.appendChild(author);
    card.appendChild(price);
    card.appendChild(button);

    searchBooks.appendChild(card);
});

        // Scroll to the results
        searchResults.scrollIntoView({
            behavior: "smooth"
        });

    } catch (error) {
        if (error.name === "AbortError") {
            return;
        }

        console.error("Google Books search error:", error);

        searchStatus.innerText =
            error.message || "Could not search books. Please try again.";

    } finally {
        if (searchController === controller) {
            searchController = null;
        }
    }
});


// ========================================
// HANDLE WINDOW RESIZING
// ========================================

window.addEventListener("resize", function () {
  bookSlideIndex = 0;
  updateBookSlide();
});


// ========================================
// LOAD BEST SELLERS ON PAGE LOAD
// ========================================

bestSeller();
