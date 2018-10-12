var models = require('../models');
var fs = require('fs');
var utils = require('./utils');
// var objectIdCounter = 0;


module.exports = {
  messages: {
    get: function (req, res) {
      models.messages.get((err, data) => {
        if (err) { throw err; }
        console.log('CONTROLLER-messages-data: ', data);
        utils.sendResponse(res, {results: data});
      });
    }, 
    // a function which handles a get request for all messages
    post: function (req, res) {
      //console.log('REQUEST.BODY: ', req.body);
      models.messages.post(req.body, (err) => {
        if (err) { throw err; }
        utils.sendResponse(res, req.body, 201);
      });

    } // a function which handles posting a message to the database
  },

  users: {
    // Ditto as above
    get: function (req, res) {
      models.users.get((err, data) => {
        if (err) { throw err; }
        console.log('CONTROLLER-users-data: ', data);
        utils.sendResponse(res, {results: data});
      });
    },
    
    post: function (req, res) {
      var username = req.body.username;
      
      models.users.post(username, (err) => {
        if (err) { throw err; }
        utils.sendResponse(res, req.body, 201);
      });
    }
  }
  
};

// var actions = {
//   'GET': function(request, response) {
//     utils.sendResponse(response, {results: messages});
//   },
//   'POST': function(request, response) {
//     utils.collectData(request, function(message) {
//       message.objectId = ++objectIdCounter;
//       messages.push(message);
//       utils.sendResponse(response, {objectId: message.objectId}, 201);
//     });
//   },
//   'OPTIONS': function(request, response) {
//     utils.sendResponse(response, null);
//   }
// };

// exports.requestHandler = utils.makeActionHandler(actions);