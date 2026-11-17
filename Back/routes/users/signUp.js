import express from "express";
import bcrypt from "bcrypt";
import { pool } from "../../server.js";

const signUpRouter = express.Router();

signUpRouter.post("/signUp", async (req, res) => {
  console.log("I have been reached");
  const { username, email, password, name, surname, shippingAddress } =
    req.body;
  if (!username || !email || !password || !name || !surname) {
    return res
      .status(400)
      .json({ success: false, message: "Missing parameters to create user" });
  }

  const hasNumbers = /\d/;

  if (hasNumbers.test(name) || hasNumbers.test(surname)) {
    return res.status(400).json({
      success: false,
      message: "Name and surname cannot have numbers in them",
    });
  }

  if (/\s/.test(password)) {
    return res.status(400).json({
      success: false,
      message: "Password cannot have whitespaces in them",
    });
  }

  if (password.length < 8) {
    return res.status(400).json({
      success: false,
      message: "Password must have at least 8 characters",
    });
  }

  if (/\s/.test(username)) {
    return res.status(400).json({
      success: false,
      message: "Username cannot have spaces in them",
    });
  }

  if (username.length < 3) {
    return res.status(400).json({
      success: false,
      message: "Username must have at least 3 characters",
    });
  }

  try {
    const checkUsernameExist = await pool.query(
      "Select * from users where username = $1",
      [username],
    );

    if (checkUsernameExist.rows.length > 0) {
      return res.status(400).json({
        success: false,
        message: "Username already exists",
      });
    }

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
