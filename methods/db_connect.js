const conf = require('./require/database.json');
if (!conf) throw new Error('Unable to find or access database configuration file.');

const mysql = require('mysql');
if (!mysql) throw new Error('MySQL module is not installed.');

const con = mysql.createConnection({
  host: conf.host,
  user: conf.username,
  password: conf.password,
  database: conf.database
});

con.connect(function(err) {
  if (err) throw err;
  console.log("Connected!");
  
  return con;
});
