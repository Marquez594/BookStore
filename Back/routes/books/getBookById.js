import express from "express";
import { pool } from "../../server.js";

const getBookById = express.Router();

getBookById.get("/getBookById", async (req, res) => {
  try {
    const { bookId } = req.body;
    if (!bookId) {
      return res.status(400).json({ error: "Missing bookID" });
    }
    const data = await pool.query(`
            Select * from books Where id = $1
        `,[bookId])
    if(!data){
        return res.status(400).json({error: "Book was not found"})
    }
    res.status(200).json({data})
  } catch (error) {
    res.status(500).json({ error: "Server failed to send data" });
  }
});


export default getBookById