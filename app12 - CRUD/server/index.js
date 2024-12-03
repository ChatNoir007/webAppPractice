const express = require("express");
const app = express();
const conn = require("./db");
const cors = require("cors");

app.use(cors());
app.use(express.json());

app.get("/users/", (req, res) => {
  conn.query(`SELECT * FROM users`, (error, result) => {
    if (error) {
      console.log("Błąd połączenia z bazą danych");
      return;
    }
    console.log(result);
    res.json(result);
  });
});

app.get("/users/:id", (req, res) => {
  let id = req.params.id;
  conn.query(`SELECT * FROM users WHERE id='${id}'`, (error, result) => {
    if (error) {
      console.log("Błąd połączenia z bazą danych");
      return;
    }
    console.log(result);
    res.json(result);
  });
});

app.delete("/users/:id", (req, res) => {
  let id = req.params.id;
  conn.query(`DELETE FROM users WHERE id='${id}'`, (error, result) => {
    if (error) {
      console.log("Błąd połączenia z bazą danych");
      return;
    }
    console.log(result);
    res.json(result);
  });
});

app.post("/users/add", (req, res) => {
  let first_name = req.body.first_name;
  let last_name = req.body.last_name;
  let email = req.body.email;
  let gender = req.body.gender;
  let city = req.body.city;
  conn.query(
    `INSERT INTO users (id, name, last_name, email, gender, city) VALUES (NULL, '${first_name}', '${last_name}', '${email}', '${gender}', '${city}') `,
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

app.put("/users/edit/:id", (req, res) => {
  let id = req.params.id;
  let first_name = req.body.first_name;
  let last_name = req.body.last_name;
  let email = req.body.email;
  let gender = req.body.gender;
  let city = req.body.city;
  conn.query(
    `UPDATE users SET name = '${first_name}', last_name = '${last_name}', email = '${email}', gender = '${gender}', city = '${city}' WHERE users.id = '${id}' `,
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
