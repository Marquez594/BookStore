// BANNER CAROUSEL

const rBt = document.getElementById("right");
const lBt = document.getElementById("left");
const slide = document.getElementById("slide");

const bannerPics = [
    "image/elegantLib.jpg",
    "image/banner2.jpg",
    "image/banner3.jpg"
];

let currentIndex = 0;

function changeBannerRight() {
    currentIndex++;

    if (currentIndex === bannerPics.length) {
        currentIndex = 0;
    }

    slide.style.transform =
        "translateX(" + -(currentIndex * 100) + "%)";
}

function changeBannerLeft() {
    currentIndex--;

    if (currentIndex < 0) {
        currentIndex = bannerPics.length - 1;
    }

    slide.style.transform =
        "translateX(" + -(currentIndex * 100) + "%)";
}

rBt.addEventListener("click", changeBannerRight);
lBt.addEventListener("click", changeBannerLeft);


// BOOK CAROUSEL

const rCara = document.getElementById("rightCarousel");
const lCara = document.getElementById("leftCarousel");
const bookSlide = document.getElementById("bookSlide");
const bookWindow = document.getElementById("bookWindow");
const bookStatus = document.getElementById("bookStatus");

let bookSlideIndex = 0;
let allBooks = [];

function getVisibleBookCount() {
    let firstCard = bookSlide.querySelector(".bookCard");

    if (!firstCard) {
        return 1;
    }

    let cardWidth = firstCard.getBoundingClientRect().width;
    let gap = parseFloat(getComputedStyle(bookSlide).gap) || 0;

    return Math.max(
        1,
        Math.floor((bookWindow.clientWidth + gap + 1) / (cardWidth + gap))
    );
}

function getTotalBookPages() {
    return Math.ceil(
        bookSlide.children.length / getVisibleBookCount()
    );
}

function updateBookSlide() {
    const cards = bookSlide.querySelectorAll(".bookCard");

    if (cards.length === 0) {
        return;
    }

    let visibleCount = getVisibleBookCount();
    let firstIndex = bookSlideIndex * visibleCount;

    if (firstIndex >= cards.length) {
        bookSlideIndex = 0;
        firstIndex = 0;
    }

    let offset = cards[firstIndex].offsetLeft - cards[0].offsetLeft;

    bookSlide.style.transform =
        "translateX(" + -offset + "px)";
}

function slideBookRight() {
    let totalPages = getTotalBookPages();

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
    let totalPages = getTotalBookPages();

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


// CREATE BOOK CARDS

function displayBooks(books) {
    bookSlide.replaceChildren();
    bookSlideIndex = 0;

    if (books.length === 0) {
        bookStatus.innerText = "No books found.";
        return;
    }

    bookStatus.innerText = "";

    for (let i = 0; i < books.length; i++) {
        let card = document.createElement("div");
        card.className = "bookCard";

        let image = document.createElement("img");
        image.className = "bookCover";
        image.src = books[i].cover;
        image.alt = books[i].title;

        let title = document.createElement("h3");
        title.className = "title";
        title.innerText = books[i].title;

        let author = document.createElement("p");
        author.className = "author";
        author.innerText = books[i].author;

        let price = document.createElement("p");
        price.className = "price";
        price.innerText = money(DEMO_PRICE);

        let button = document.createElement("button");
        button.className = "addToCart";
        button.innerText = "Add to Cart";

        button.addEventListener("click", function () {
            addToCart(books[i]);

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


// FETCH BEST SELLERS

function bestSellerResp(resp) {
    if (!resp.ok) {
        throw new Error("Could not load best sellers");
    }

    return resp.json();
}

function bestSeller() {
    fetch("/books/getBestSellers")
        .then(bestSellerResp)
        .then(function (books) {
            allBooks = books;
            displayBooks(books);
        })
        .catch(function (error) {
            console.error(error);
            bookStatus.innerText =
                "Could not load books. Please try refreshing.";
        });
}


// SEARCH LOADED BOOKS

const search = document.getElementById("search");

search.addEventListener("submit", function (event) {
    event.preventDefault();

    let query = search.querySelector("input").value
        .trim()
        .toLowerCase();

    let results = allBooks.filter(function (book) {
        return (
            book.title.toLowerCase().includes(query) ||
            book.author.toLowerCase().includes(query)
        );
    });

    displayBooks(results);

    document.getElementById("bestSeller").scrollIntoView({
        behavior: "smooth"
    });
});

window.addEventListener("resize", function () {
    bookSlideIndex = 0;
    updateBookSlide();
});

bestSeller();