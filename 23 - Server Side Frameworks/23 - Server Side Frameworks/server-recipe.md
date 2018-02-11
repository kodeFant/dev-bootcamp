#Express Server recipe

* `npm init` initializes the app and creates package.json
* `npm install express -- save` adds express as a dependency to the app

* Start with these variables to include Express
  * var express = require('express');
  * var app = express();

* Example of get route: 
  app.get("/", function (req, res) {
      res.send("Hi there, welcome to my assignment!");
  });

* In the bottom, paste this (Only applies to Cloud9):
// Tell Express to listen for requests (start server)
app.set('port', 8080);
app.listen(app.get('port'), function () {
  console.log('Server is running!!!')
});