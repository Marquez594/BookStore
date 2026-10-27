import express from "express";
import { pool } from "../../server.js";

const createReviewRouter = express.Router();

createReviewRouter.post("/createReview", async (req, res) => {
  const { user_id, book_id, score, description } = req.body;
  if (!user_id || !book_id || !score) {
    return res.status(400).json({ error: "Missing parameters to add review" });
  }
  try {
    const checkUser = await pool.query(
      `
            Select id from users where id = $1
        `,
      [user_id],
    );
    if (checkUser.rows.length == 0) {
      return res.status(400).json({ error: "User does not exist" });
    }
    const result = await pool.query(
      `
            Insert into ratings (user_id, book_id, score, description) values ($1,$2,$3,$4) returning *
        `,
      [user_id, book_id, score, description],
    );
    if (result.rows.length == 0) {
      return res
        .status(400)
        .json({ error: "Could not insert into review table" });
    }
    res.status(200).json(result.rows[0]);
  } catch (error) {
    return res.status(500).json({ error: "Cannot reach server" });
  }
});

export default createReviewRouter;
