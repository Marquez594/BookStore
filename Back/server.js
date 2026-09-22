import getAllUserRouter from "./routes/getAllUsers.js";
import express from "express";
import { Pool } from "pg";
const app = express();

app.use(express.json());

export const pool = new Pool({
  connectionString:
    "postgresql://postgres:TIjTNpyIbCTE5bG3@db.adjfuyflnmcpewlpgiiz.supabase.co:5432/postgres",
});

app.get("/", (req, res) => {
  res.json({ message: "Hello" });
});

app.use("/", getAllUserRouter);

app.listen(3000, () => {
  console.log("Server running on http://localhost:3000");
});
