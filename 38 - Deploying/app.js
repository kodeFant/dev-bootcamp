var express = require("express");
var app = express();

app.set("view engine", "ejs");

app.get("/", function (req, res) {
  res.render("home");
});

app.get("/about", function (req, res) {
  res.render("about");
});

// Server listener and set port
app.set('port', 8080);
app.listen(app.get('port'), function () {
  console.log('Server Has Started!')
});