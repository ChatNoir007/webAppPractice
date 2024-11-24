const express = require('express')
const app = express()
const cors = require('cors')

app.use(cors())
app.use(express.json())

app.post("/dane", (req, res) => {
    console.log(req.body.dane)
})

app.get("/dane", (req, res) => {
    res.json({tekst1: "Test", tekst2: "Test2"})
})

app.listen(8000)