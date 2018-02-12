var express = require("express");
var app = express();
var bodyParser = require("body-parser")

app.use(bodyParser.urlencoded({extended: true}));
app.set("view engine", "ejs");

var campgrounds = [
  {
    name: "Bogstadveien Camping",
    image: "http://placeimg.com/640/480/nature"
  },
  {
    name: "Ørsta Camping",
    image: "http://placeimg.com/640/480/people"
  },
  {
    name: "Mountain Goat's Rest",
    image: "http://placeimg.com/640/480/animals"
  }
];

app.get("/", function(req, res) {
  res.render("landing");
});

app.get("/campgrounds", function(req, res) {

  res.render("campgrounds", {campgrounds: campgrounds});
})

app.post("/campgrounds", function(req, res) {
  // get data from form and add to campgrounds array
  var name = req.body.name;
  var image = req.body.image;
  var newCampground = {name: name, image: image};
  campgrounds.push(newCampground);
  // redirect back to campgrounds page
  res.redirect("/campgrounds");
});

app.get("/campgrounds/new", function(req, res) {
  res.render("new.ejs");
});

// Server listener and set port
app.set('port', 8080);
app.listen(app.get('port'), function () {
  console.log('YelpCamp Server Has Started!')
});