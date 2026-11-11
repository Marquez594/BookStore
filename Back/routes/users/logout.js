import express from "express";

const logOut = express.Router();

logOut.post("/logout", (req, res) => {
  res.clearCookie("userId");

  res.status(200).json({
    success: true,
  });
});


export default logOut