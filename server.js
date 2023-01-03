const express = require("express");

const path = require('path');

const { database } = require("./database.js");

const port  = process.env.PORT || 3001;
const app = express();


app.use(express.json());
app.use(express.static(path.join(__dirname + "/public")));

app.get("/api/products", (req, res) => {
  database.query("SELECT * FROM products", (error, results, fields) => {
    return res.status(200).json(results);
  });
});

app.post("/api/getData", (req, res) => {
  const { id } = req.body;
  if(!id) return res.status(400);

  database.query(
    `SELECT amountCookies,amountHelpers FROM users WHERE id = '${id}'`,
    (error, results, fields) => {
      return res.status(200).json(results);
    }
  );
});

app.post("/api/writeData", (req, res) => {
  const { id, currency, helpers } = req.body;
  if(!id && currency === null && helpers === null) return res.status(400);
  database.query(
    `SELECT * FROM users WHERE id = '${id}'`,
    (error, results, fields) => {
      if (results.length > 0) {
        database.query(`UPDATE users SET amountCookies = '${currency}', 
      amountHelpers = '${helpers}' WHERE id = '${id}'`);
      } else {
        database.query(
          `INSERT INTO users VALUES('${id}','${currency}','${helpers}')`
        );
        database.query(`UPDATE users SET amountCookies = '${currency}', 
      amountHelpers = '${helpers}' WHERE id = '${id}'`);
      }
    }
  );

  return res.status(200);
});

app.listen(port, () => {
  console.log("Server is waiting");
});

