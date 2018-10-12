var db = require('../db/index');
var mysql = require('mysql');

// console.log('CONNECT: ', db.dbConnect.connect);

module.exports = {
  messages: {
    get: function (callback) {
      db.dbConnect.query('SELECT * FROM messages', (err, result) => {
        if (err) { throw err; }
        console.log('Found messages!!!', result);
        //console.log('RESULT: ', result);
        callback(null, result);
      });
    },
    // a function which produces all the messages
    post: function (message, callback) {
      console.log(`SELECT id FROM users WHERE username = '${message.username}'`);
      db.dbConnect.query(`SELECT id FROM users WHERE username = '${message.username}'`, (err, rowDataSelect) => {
        if (err) { 
          callback(err); 
        } else {
          console.log('rowDataSelect: ', rowDataSelect);
          let id = rowDataSelect[0].id;
          let msg = JSON.stringify(message.message);
          let roomname = JSON.stringify(message.roomname);
          db.dbConnect.query(`INSERT INTO messages (text, roomname, username) VALUES (${msg}, ${roomname}, ${id})`, (err, result) => {
            if (err) { throw err; }
            callback(null);
          });  
        }
      });    
    } 
    //a function which can be used to insert a message into the database 
  },

  users: {
    // Ditto as above.
    get: function (callback) {
      db.dbConnect.query('SELECT * FROM users', (err, result) => {
        if (err) { callback(err); }
        console.log('Found users!!!');
        //console.log('RESULT: ', result);
        callback(null, result);
      });
    },
    
    post: function (user, callback) {
      db.dbConnect.query(`SELECT id FROM users WHERE username = '${user}';`, (err, rowDataSelect) => {
        console.log('username1: ', rowDataSelect);
        console.log('err', err)
        if (err || rowDataSelect.length === 0) { 
          db.dbConnect.query(`INSERT INTO users (username) VALUES ('${user}');`, (err, rowDataInsert) => {
            if (err) { 
              callback(err); 
            } else {
              console.log('insert')
              callback(null);
            }
          });
        } else {
          callback(null);
        } 
      });
      // a function which can be used to insert a message into the database
    }  
  }
};
// SELECT EXISTS(SELECT id FROM users WHERE username = 'javie')

