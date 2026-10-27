import express from "express";
const getBestSellers=express.Router();
getBestSellers.get("/getBestSellers",async(req,res)=>{
    const url = `https://api.nytimes.com/svc/books/v3/lists/current/hardcover-fiction.json?api-key=${process.env.NYT_API_KEY}`;
    const response= await fetch(url);
    const data = await response.json();
    const books = data.results.books.map((book) => {
        return{
               title:book.title,
               author:book.author,
               cover:book.book_image
        }

});
res.status(200).json(books);
});

export default getBestSellers