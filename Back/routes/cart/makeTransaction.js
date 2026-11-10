import express from "express";
import { pool } from "../../server.js";

const makeTransaction = express.Router();

makeTransaction.post("/makeTransaction", async (req, res) => {
  try {
    const userId = req.cookies.userId;
    if (!userId) {
      return res.status(400).json({ message: "Missing user cookie" });
    }
    const { cart } = req.body;
    if (!cart || !Array.isArray(cart)) {
      return res.status(400).json({ message: "Missing cart" });
    }
    const result = await pool.query(
      `
                Insert into transactions_history (user_id, cart) values ($1, $2) returning *
            `,
      [userId, JSON.stringify(cart)],
    );

    if (result.rows.length == 0) {
      return res
        .status(400)
        .json({ message: "Transaction could not be completed" });
    }
    res.status(200).json({ success: true });
  } catch (error) {
    return res.status(500).json({
      error: "Could not connect to server",
    });
  }
});

export default makeTransaction;
