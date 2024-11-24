const express = require("express");
const app = express();
const conn = require("./db");
const cors = require("cors");

app.use(cors());
app.use(express.json());

app.post("/", (req, res) => {
  let id = req.body.id;

  if (id) {
    query = `SELECT * FROM samochody WHERE id = "${id}"`;
  } else {
    query = `SELECT * FROM samochody`;
  }

  conn.query(query, (error, result) => {
    if (error) {
      console.log("Błąd połączenia z bazą danych");
      return;
    }
    res.json(result);
  });
});

app.listen(8000);
