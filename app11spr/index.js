const express = require("express")
const app = express()
const cors = require("cors")

// const routing = require('./routing')
// app.use(routing)

app.use(cors())
app.use(express())
app.use(express.json())


app.post('/', (req, res) => {
    console.log(`Imię: ${req.body.imie} \n Nazwisko: ${req.body.nazwisko} \n Rok urodzenia: ${req.body.rok}`)
})

app.get('/formularz', (req, res) => {
    res.send("Powyższy formularz zawiera 3 pola na dane użytkownika")})

// app.get('/', (req, res) => {
//     console.log("siema");
//     res.send("siema")
// })

// app.route('/formularz')
//     .get((req, res) => {
//         res.send("formularz GET")
//     })
//     .post((req, res) => {
//         res.send("formularz POST")
//     })

// app.route('/wysylanie')
//     .get((req, res) => {
//         res.send("wysylanie")
//     })

// app.route('/*')
//     .get((req, res) => {
//         res.send("Błąd 404")
//     })

app.listen(4000)