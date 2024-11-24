const express = require("express");
const router = express.Router();

router.use("/", (req, res, next) => {
    res.send("Czas: ", Date.now())
    next()
})

router.get("/", (req, res) => {
    res.send("Podstrona routingu")
})

router.get("/abc", (req, res) => {
    res.send("Podstrona abc routingu")
})

module.exports = router