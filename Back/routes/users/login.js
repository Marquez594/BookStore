import express from "express";
import bcrypt from "bcrypt"
import { pool } from "../../server.js";

const loginRouter = express.Router();

loginRouter.post("/login", async (req, res) => {
  try {
    const { username, password } = req.body;
    if (!username || !password) {
      return res.status(400).json({ error: "Missing parameters for login" });
    }
    const result = await pool.query(
      `
                Select * from users where username = ($1)
            `,
      [username],
    );
    if (result.rows.length == 0) {
      return res
        .status(400)
        .json({ error: "User was not found/does not exist" });
    }
    const user = result.rows[0]
    const correctPassword = await bcrypt.compare(
        password,
        user.password
    )
    if(!correctPassword){
        return res.status(400).json({error: "Password is not correct"})
    }
    res.status(200).json(result.rows);
  } catch (error) {
    console.error(error);
    res.status(500).json({ error: "Server could not be reached" });
  }
});

export default loginRouter;
