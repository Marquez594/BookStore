require("dotenv").config();
const express = require("express");
const app = express();

app.use(express.json());

const { Pool } = require("pg");

const pool = new Pool({
  connectionString: process.env.DATABASE_URL,
});

app.get("/", (req, res) => {
  res.json({ message: "Hello" });
});

app.get("/users", async (req, res) => {
  const data = await pool.query("Select * from users");
  res.json(data.rows);
});

app.listen(3000, () => {
  console.log("Server running on http://localhost:3000");
});
