const express = require('express')
const app = express()
const cors = require('cors')
const con = require('./db')

app.use(cors())
app.use(express.json())

app.get('/', (req, res) => {
    con.query('SELECT * FROM clients', (error, result) => {
        if(error) {
            console.log('Błąd połączenia z bazą danych')
            return
        }
        res.json(result)
    })
})

app.listen(8000, () => {
    console.log('Serwer nasłuchuje na porcie 8000.')
})