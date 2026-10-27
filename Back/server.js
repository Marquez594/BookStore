import "dotenv/config";
import getAllUserRouter from "./routes/users/getAllUsers.js";
import express from "express";
import { Pool } from "pg";
import signUpRouter from "./routes/users/signUp.js";
import cors from "cors"
import getAllBooks from "./routes/books/getAllBooks.js";
import getBookById from "./routes/books/getBookById.js";
import loginRouter from "./routes/users/logIn.js";
import getAllStoresRouter from "./routes/stores/getAllStores.js";
import createReviewRouter from "./routes/reviews/createReview.js";
import getBestSellers from "./routes/books/getBestSellers.js";
import path from "path";
import { fileURLToPath} from "url";

const fileName=fileURLToPath(import.meta.url);
const dirName=path.dirname(fileName);

const app = express();

app.use(express.json());

app.use(cors())

export const pool = new Pool({
  connectionString:
    "postgresql://postgres:TIjTNpyIbCTE5bG3@db.adjfuyflnmcpewlpgiiz.supabase.co:5432/postgres",
});

app.get("/", (req, res) => {
  res.sendFile(path.join(dirName,"..","Front","Bookstore","index.html"));
});

app.use("/users", getAllUserRouter);
app.use("/users", signUpRouter);
app.use("/users", loginRouter);
app.use("/users", signUpRouter)

app.use("/books", getAllBooks)
app.use("/books",getBookById)
app.use("/books",getBestSellers);
app.use(express.json());
app.use(cors());
app.use(express.static(path.join(dirName, "..","Front","Bookstore")));


app.use("/stores", getAllStoresRouter);
app.use("/reviews", createReviewRouter);

app.listen(4000, () => {
  console.log("Server running on http://localhost:4000");
});
