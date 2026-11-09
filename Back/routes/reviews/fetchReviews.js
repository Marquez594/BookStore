import express from "express"
import { pool } from "../../server.js"

const fetchReviews = express.Router()

fetchReviews.get("/fetchReviews/:bookId", async(req,res)=>{
    try{
        const {bookId} = req.params
        const result = await pool.query(
            `Select reviews.*, users.username
            from reviews
            join users on reviews.user_id = users.user_id
            where reviews.book_id = $1`, [bookId]
        )
        res.status(200).json(result.rows)
    }catch(error){
        res.status(500).json({message: "Could not fetch reviews"})
    }
})


export default fetchReviews