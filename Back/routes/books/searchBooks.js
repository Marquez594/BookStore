import express from "express";

const searchBooks = express.Router();

searchBooks.get("/searchBooks", async (req, res) => {
    try {
        const query = req.query.q;

        if (typeof query !== "string" || !query.trim()) {
            return res.status(400).json({
                error: "Please enter a book to search"
            });
        }

        const apiKey = process.env.GOOGLE_BOOKS_API_KEY;

        if (!apiKey) {
            return res.status(500).json({
                error: "Google Books API key is not configured"
            });
        }

        const url = new URL(
            "https://www.googleapis.com/books/v1/volumes"
        );

        url.searchParams.set("q", query.trim());
        url.searchParams.set("maxResults", "30");
        url.searchParams.set("printType", "books");
        url.searchParams.set("key", apiKey);

        const response = await fetch(url);

        if (!response.ok) {
            const errorBody = await response.text();

            console.error(
                `Google Books API error ${response.status}:`,
                errorBody
            );

            return res.status(response.status).json({
                error: "Google Books search failed"
            });
        }

        const data = await response.json();

        const books = (data.items || []).map((item) => {
            const info = item.volumeInfo || {};

            return {
                id: item.id,
                title: info.title || "Unknown Title",
                author: (info.authors || []).join(", ") || "Unknown Author",
                cover: info.imageLinks?.thumbnail
                    ?.replace("http:", "https:") || "",
                description: info.description || "",
                isbn: info.industryIdentifiers?.find(
                    identifier => identifier.type === "ISBN_13"
                )?.identifier || ""
            };
        });

        return res.status(200).json(books);

    } catch (error) {
        console.error("Search Error:", error);

        return res.status(500).json({
            error: "Unable to search books"
        });
    }
});

export default searchBooks;