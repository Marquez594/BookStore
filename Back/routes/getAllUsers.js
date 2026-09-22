import express from "express";
import { pool } from "../server.js";

const getAllUserRouter = express.Router();

getAllUserRouter.get("/getAllUsers", async (req, res) => {
  const data = await pool.query("Select * from users");
  res.json(data.rows);
});

export default getAllUserRouter;
