import express from "express";

const logOut = express.Router();

logOut.post("/logout", (req, res) => {
  res.clearCookie("userId");

  res.status(200).json({
    message: "Logged Out Successfully",
  });
});


export default logOut