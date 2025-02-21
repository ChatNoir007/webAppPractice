const express = require("express");
const app = express();
const conn = require("./db");
const cors = require("cors");

app.use(cors());
app.use(express.json());

app.get("/script1", (req, res) => {
  conn.query(`SELECT miesiac, rok FROM zadania WHERE dataZadania="2020-07-01";`, (error, result) => {
    if (error) {
      console.log("Błąd połączenia z bazą danych");
      return;
    }
    console.log(result);
    res.json(result);
  });
});

app.get("/script2", (req, res) => {
  conn.query(`SELECT dataZadania, wpis FROM zadania WHERE miesiac="lipiec";`, (error, result) => {
    if (error) {
      console.log("Błąd połączenia z bazą danych");
      return;
    }
    console.log(result);
    res.json(result);
  });
});


app.put("/wpis", (req, res) => {
  let wpis = req.body.wpis;
  conn.query(
    `UPDATE zadania SET wpis='${wpis}' WHERE zadania.id = 13`,
    (error, result) => {
      if (error) {
        console.log("Błąd połączenia z bazą danych");
        return;
      }
      console.log(result);
      res.json(result);
    }
  );
});



app.listen(8000);
