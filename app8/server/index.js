const express = require('express')
const app = express()
const conn = require('./db')
const cors = require('cors')

app.use(cors())
app.use(express.json())

// app.get('/', (req, res) => {
//     conn.query(`SELECT * FROM `, (error, result) => {
//         if(error) {
//             console.log('Błąd połączenia z bazą danych')
//             return
//         }
//         console.log(result)
//         res.json(result)
//     })
// })

app.post('/', (req, res) => {
    console.log(req.body.title)
    conn.query(`INSERT INTO `filmy` (NULL, ${req.body.title}, `rezyserzy_id`, `tytul`, `rok`, `ocena`) VALUES (NULL, '', '', 'asasas', NULL, NULL) `, (error, result) => {
        if(error) {
            console.log('Błąd połączenia z bazą danych')
            return
        }
        console.log(result)
        res.json(result)
    })
})

app.listen(8000)