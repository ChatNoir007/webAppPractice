const mysql = require('mysql')

const connection = mysql.createConnection({
    host : "localhost",
    user : "root",
    password : "",
    database : "data"
})

connection.connect(error => {
    if(error) {
        throw error
    } else {
        console.log(`Połączono z bazą danych`)
    }
})

module.exports = connection