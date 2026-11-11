import express from "express";
import { pool } from "../../server.js";

const getProfileRouter = express.Router();

getProfileRouter.get("/getProfile", async (req, res) => {
  try {
    const userId = req.cookies.userId;
    if (!userId) {
      return res.status(400).json({ message: "Must be logged in to work" });
    }
    const usersTableResults = await pool.query(
      `
                Select first_name, last_name, username from users where id = $1
            `,
      [userId],
    );

    const reviewTableResults = await pool.query(
      `
            Select * from ratings where user_id = $1
        `,
      [userId],
    );

    const reviewTableResultsNumber = await pool.query(
      `
            Select count(*) as total from ratings where user_id = $1
        `,
      [userId],
    );

    const transactionTableResults = await pool.query(
      `
            Select cart from transactions_history where user_id = $1
        `,
      [userId],
    );

    if (usersTableResults.rows.length == 0) {
      return res.status(404).json({ message: "User not found" });
    }

    return res.status(200).json({
      profile: usersTableResults.rows[0],
      review: reviewTableResults.rows,
      reviewNumber: Number(reviewTableResultsNumber.rows[0].total),
      transaction: transactionTableResults.rows,
    });
  } catch (error) {
    console.log(error)
    return res.status(500).json({ error: error });
  }
});

export default getProfileRouter;
