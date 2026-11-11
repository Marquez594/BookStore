import "dotenv/config";
import getAllUserRouter from "./routes/users/getAllUsers.js";
import express from "express";
import { Pool } from "pg";
import signUpRouter from "./routes/users/signUp.js";
import cors from "cors";
import getAllBooks from "./routes/books/getAllBooks.js";
import getBookById from "./routes/books/getBookById.js";
import loginRouter from "./routes/users/logIn.js";
import getAllStoresRouter from "./routes/stores/getAllStores.js";
import createReviewRouter from "./routes/reviews/createReview.js";
import getBestSellers from "./routes/books/getBestSellers.js";
import path from "path";
import cookieParser from "cookie-parser";
import { fileURLToPath } from "url";
import logOut from "./routes/users/logout.js";
import checkLoginRouter from "./routes/users/checkLogin.js";
import fetchReviews from "./routes/reviews/fetchReviews.js";
import makeTransaction from "./routes/cart/makeTransaction.js";
import fetchTransaction from "./routes/cart/fetchTransactions.js";
import getProfileRouter from "./routes/users/getProfile.js";

const fileName = fileURLToPath(import.meta.url);
const dirName = path.dirname(fileName);

const app = express();

app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(cors());
app.use(cookieParser())

export const pool = new Pool({
  connectionString:
    "postgresql://postgres:TIjTNpyIbCTE5bG3@db.adjfuyflnmcpewlpgiiz.supabase.co:5432/postgres",
});

app.get("/", (req, res) => {
  res.sendFile(path.join(dirName, "..", "Front", "Bookstore", "index.html"));
});

app.use("/users", getAllUserRouter);
app.use("/users", signUpRouter);
app.use("/users", loginRouter);
app.use("/users", signUpRouter);
app.use("/users", logOut)
app.use("/users", checkLoginRouter)
app.use("/users", getProfileRouter)

app.use("/books", getAllBooks);
app.use("/books", getBookById);
app.use("/books", getBestSellers);
app.use(express.json());
app.use(cors());
app.use(express.static(path.join(dirName, "..", "Front", "Bookstore")));

app.use("/stores", getAllStoresRouter);

app.use("/reviews", createReviewRouter);
app.use("/reviews", fetchReviews)

app.use("/cart", makeTransaction)
app.use("/cart", fetchTransaction)




app.listen(4000, () => {
  console.log("Server running on http://localhost:4000");
});
