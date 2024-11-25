const express = require("express");
const router = express.Router();

router.get("/wysylanie", (req, res) => {
    res.send("wysylanie")
})

router.get("/formularz", (req, res) => {
    res.send("formularz")
})

module.exports = router