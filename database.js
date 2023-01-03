const mysql = require("mysql");

const database = mysql.createPool({
  connectionLimit: 10,
  waitForConnections : true,
  host: "sql9.freesqldatabase.com",
  port: 3306,
  user: "sql9588049",
  password: "TjC45NjPtq",
  database: "sql9588049",
});


module.exports = { database };
