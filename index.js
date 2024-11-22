const express = require('express')
const app = express()
const conn = require('./db')
const cors = require('cors')

app.use(cors())
app.use(express.json())

app.get('/users/', (req, res) => {
    let id = req.params.id
    conn.query(`SELECT * FROM users`, (error, result) => {
        if(error) {
            console.log('Błąd połączenia z bazą danych')
            return
        }
        console.log(result)
        res.json(result)
    })
})

app.get('/users/:id', (req, res) => {
    let id = req.params.id
    conn.query(`SELECT * FROM users WHERE id='${id}'`, (error, result) => {
        if(error) {
            console.log('Błąd połączenia z bazą danych')
            return
        }
        console.log(result)
        res.json(result)
    })
})

app.get('/users/:id', (req, res) => {
    let id = req.params.id
    conn.query(`DELETE FROM users WHERE id='${id}'`, (error, result) => {
        if(error) {
            console.log('Błąd połączenia z bazą danych')
            return
        }
        console.log(result)
        res.json(result)
    })
})

app.listen(8000)