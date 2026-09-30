import express from "express";
import { pool } from "../../server.js";

const getBookByAuthorRouter = express.Router();

getBookByAuthorRouter.get("/getBookByAuthor", async (req, res) => {
  try {
    const { authorId } = req.body;
    if (!authorId) {
      return res.status(400).json({ error: "Missing authorId" });
    }
    const result = await pool.query(
      `
                Select * from books Join authors On books.author_id = authors.id Where author.id = $1
            `,
      [authorId],
    );
    if (!result) {
      return res
        .status(400)
        .json({ error: "Could not find books by given author id" });
    }
    res.status(200).json(result.rows);
  } catch {
    res.status(500).json({ error: "Cannot reach server" });
  }
});
