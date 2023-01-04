const mysql = require("mysql");

const database = mysql.createPool({
  connectionLimit: 10,
  waitForConnections : true,
  host:  process.env.HOST,
  port:  process.env.PORT,
  user: process.env.USER,
  password:  process.env.PASSWORD,
  database:  process.env.DATABASE,
});


module.exports = { database };
