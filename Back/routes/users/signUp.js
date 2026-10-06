import express from "express";
import bcrypt from "bcrypt"
import { pool } from "../../server.js";

const signUpRouter = express.Router();

//Need to encryption

signUpRouter.post("/signUp", async (req, res) => {
  const { username, email, password, shippingAddress } = req.body;
  if (!username || !email || !password) {
    return res.status(400).json({ error: "Missing parameters to create user" });
  }
  try {
    const hashedPassword = await bcrypt.hash(password, 10)
    const result = await pool.query(
      `
            Insert into users (username, email, password, shipping_address) values ($1,$2,$3,$4) returning *
        `,
      [username, email, hashedPassword, shippingAddress],
    );
    res.status(200).json(result.rows[0]);
  } catch (error) {
    res.status(500).json({ error: "Server failed to run code" });
  }
});

export default signUpRouter;
