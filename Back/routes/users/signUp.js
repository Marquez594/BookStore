import express from "express";
import bcrypt from "bcrypt";
import { pool } from "../../server.js";

const signUpRouter = express.Router();

signUpRouter.post("/signUp", async (req, res) => {
  console.log("I have been reached");
  const { username, email, password, name, surname, shippingAddress } =
    req.body;
  if (!username || !email || !password || !name || !surname) {
    return res.status(400).json({ error: "Missing parameters to create user" });
  }
  try {
    const hashedPassword = await bcrypt.hash(password, 10);
    const result = await pool.query(
      `
            Insert into users (username, email, password, shipping_address, first_name, last_name) values ($1,$2,$3,$4,$5,$6) returning *
        `,
      [username, email, hashedPassword, shippingAddress, name, surname],
    );
    res.status(200).json(result.rows[0]);
  } catch (error) {
    res.status(500).json({ error: "Server failed to run code" });
  }
});

export default signUpRouter;
