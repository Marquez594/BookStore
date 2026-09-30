import express from "express";
import { pool } from "../../server.js";

const getAllStoresRouter = express.Router();

getAllStoresRouter.get("/getAllStores", async (req, res) => {
  try {
    const result = await pool.query("Select * from stores");
    if (!result) {
      return res.status(400).json({ error: "Could not fetch stores" });
    }
    res.status(200).json(result.rows);
  } catch {
    return res.status(500).json({ error: "Cannot reach server" });
  }
});

export default getAllStoresRouter