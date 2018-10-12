var mysql = require('mysql');
// var sql = require('../schema.sql');
// For not on student pairing at HR: Create a database connection and export it from this file.
// You will need to connect with the user "root", no password,
// and to the database "chat".

var exports = module.exports = {};

//student pairing station at HR setup
const dbConnect = mysql.createConnection({
  host: 'localhost',
  user: 'student',
  database: 'chat',
  password: 'student'
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