const mysql = require("mysql");

const database = mysql.createConnection({
  host: "localhost",
  port: 3306,
  user: "root",
  password: "root",
  database: "cookieclicker",
});


module.exports = { database };
