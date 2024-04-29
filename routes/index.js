const express = require("express");
const router = express.Router;

router.get("/", (req, res) => {
  res.send("Index");
});

router.get("/home", (req, res) => {
  res.send("home page");
});

router.get("/products", (req, res) => {
  res.send("products page");
});

module.exports = router;
