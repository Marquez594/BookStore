import express from "express"
import { pool } from "../../server.js"

const getAllBooks = express.Router()

getAllBooks.get("/getAllBooks", async(req,res)=>{
    try{
        const result = await pool.query(`Select * from books`)
        if(!result){
            return res.status(400).json({error: "Could not fetch all books"})
        }
        res.status(200).json({result})
    }catch{
        res.status(500).json({error: "Could not reach server"})
    }
})



export default getAllBooks