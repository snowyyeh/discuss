const databaseConnect = require('./methods/db_connect.js');
if (!databaseConnect) throw new Error('Unable to find or access method \'db_connect\'.');

const conf = require('./require/conf.json');
if (!conf) throw new Error('Unable to find or access website configuration file.');

const mysql = require('mysql');
if (!mysql) throw new Error('MySQL module is not installed.');

const con = databaseConnect();
if (!con) throw new Error('Unable to connect to the database or access the connection.');



con.query("CREATE TABLE website (name VARCHAR(255), description VARCHAR(255))", function (err, result) {
  if (err) throw err;
})

con.query("INSERT INTO website (name, description) VALUES (conf.site_name, conf.description)", function (err, result) {
  if (err) throw err;
});



console.log('Installer has finished running, created one (1) table, inserted two (2) records, and populated two (2) records with data.');
