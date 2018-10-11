var mysql = require('mysql');
// var sql = require('../schema.sql');
// Create a database connection and export it from this file.
// You will need to connect with the user "root", no password,
// and to the database "chat".
var exports = module.exports = {};

const dbConnect = mysql.createConnection({
  host: 'localhost',
  user: 'root',
  database: 'chat'
});

exports.dbConnect = dbConnect;

// con.connect((err) => {
//   if (err) throw err;
//   console.log('Connected!');
//   var sql = 
//   con.query(sql, (err, result) => {
//     if (err) throw err;
//     console.log("The database is created");
//   })
// });