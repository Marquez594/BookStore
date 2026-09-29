import getAllUserRouter from "./routes/users/getAllUsers.js";
import express from "express";
import { Pool } from "pg";
import signUpRouter from "./routes/users/signUp.js";
import cors from "cors"
import getAllBooks from "./routes/books/getAllBooks.js";
import getBookById from "./routes/books/getBookById.js";

const app = express();

app.use(express.json());

app.use(cors())

export const pool = new Pool({
  connectionString:
    "postgresql://postgres:TIjTNpyIbCTE5bG3@db.adjfuyflnmcpewlpgiiz.supabase.co:5432/postgres",
});

app.get("/", (req, res) => {
  res.json({ message: "Hello" });
});

app.use("/users", getAllUserRouter);
app.use("/users", signUpRouter)

app.use("/books", getAllBooks)
app.use("/books",getBookById)


app.listen(4000, () => {
  console.log("Server running on http://localhost:4000");
});
