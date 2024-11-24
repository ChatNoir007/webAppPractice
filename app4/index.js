const express = require('express')
const app = express()
const cors = require('cors')

app.use(cors())
app.use(express.json())

app.post("/dane", (req, res) => {
    bmi = req.body.weight/Math.pow(req.body.height, 2)
    console.log(bmi)
})

app.get("/dane", (req, res) => {
    res.json({weight: "Test", height: "Test2"})
})

app.listen(8000)