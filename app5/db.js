const mysql = require('mysql')

const connection = mysql.createConnection({
    host: "localhost",
    user: "root",
    password: "",
    database: "database"
})

connection.connect(err => {
    // - Danemu klientow i funkcja się kończy, ale serwer działa dalej: -
    if(err) {
        console.log('Błąd połączenia z bazą danych: ' + err.stack)
        return
    }
    // - Zamyka działanie serwera: -
    // if(err) throw err
    // console.log('Połączono z bazą danych')
})

module.exports = connection