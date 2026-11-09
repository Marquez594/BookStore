import express from "express";

const checkLoginRouter = express.Router();

checkLoginRouter.get("/checkLogin", (req, res) => {
  const userId = req.cookies.userId;
  if (!userId) {
    return res.status(401).json({ loggedIn: false });
  }
  res.status(200).json({
    loggedIn: true,
  });
});
