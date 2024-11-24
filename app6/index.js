const express = require('express')
const app = express()
const conn = require('./db')
const cors = require('cors')

app.use(cors())
app.use(express.json())

app.get('/', (req, res) => {
    conn.query(`SELECT * FROM samochody`, (error, result) => {
        if(error) {
            console.log('Błąd połączenia z bazą danych')
            return
        }
        console.log(result)
        res.json(result)
    })
})

app.listen(8000)