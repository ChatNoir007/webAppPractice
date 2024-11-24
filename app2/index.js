const express = require('express')
const app = express()
const port = 8000
const routing = require('./routing')

app.get('/', (req, res) => {
    res.send("Pierwsza funkcja")
})



// app.get('/', (req, res, next) => {
//     res.send("Pierwsza funkcja")
//     next();
// }, (req, res, next) => {
//     res.send("Druga funkcja")
//     next();
// }, (req, res, next) => {
//     res.send("Trzecia funkcja")  
// })

// const cb0 = function (req, res, next) {
//     console.log("Pierwsza funkcja");
//     next();
// }
// const cb1 = function (req, res, next) {
//     console.log("Druga funkcja");
//     next();
// }
// const cb2 = function (req, res) {
//     console.log("Trzecia funkcja");
// }

// app.get('/podstrona', (req, res) => {
//     res.send("Połączono z serwerem 2")
// })

app.route('/podstona')
    .get((req, res) => {
        res.send("GET")
    })
    .post((req, res) => {
        res.send("POST")
    })

app.use('/routing', routing)

app.listen(port, () => {
    console.log(`Serwer został uruchomiony na porcie ${port}`)
})