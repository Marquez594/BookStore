import express from "express";
import { pool } from "../../server.js";

const fetchTransaction = express.Router();

fetchTransaction.get("/fetchTransactions", async (req, res) => {
  try {
    const userId = req.cookies.userId;
    if (!userId) {
      return res
        .status(400)
        .json({ message: "Must be logged in to have a transaction history" });
    }

    const result = await pool.query(
      `
                Select * from transactions_history where user_id = $1
            `,
      userId,
    );

    if (result.rows.length == 0) {
      return res
        .status(400)
        .json({ error: "Could not fetch transaction history" });
    }

    res.status(200).json({
      success: true,
    });
  } catch (error) {
    return res.status(500).json({
      error: "Could not reach server",
    });
  }
});

export default fetchTransaction;
