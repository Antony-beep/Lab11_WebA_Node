var mysql = require('mysql');
var conn = mysql.createConnection({
  host:"localhost",
  user:"root",
  password:"",
  database:"lab11"
});
conn.connect();
module.exports = conn;
