var   express     = require("express"),
      app         = express(),
      bodyParser  = require("body-parser"),
      mongoose    = require("mongoose")

//Connects to mongoDB database with name yelp_camp (creates new one if not existing)
mongoose.connect("mongodb://localhost/yelp_camp");

app.use(bodyParser.urlencoded({extended: true}));
app.set("view engine", "ejs");

// SCHEMA SETUP

var campgroundSchema = new mongoose.Schema({
  name: String,
  image: String,
  description: String
});

var Campground = mongoose.model("Campground", campgroundSchema);
/* 
Campground.create(
  {
    name: "Granite Hill",
    image: "http://placeimg.com/640/480/nature",
    description: "This is a huge granite hill, no bathrooms. No water. Beautiful granite!"
  }, function(err, campground) {
    if (err) {
      console.log(err);
    } else {
      console.log("NEWLY CREATED CAMPGROUND:");
      console.log(campground);
    }
  }); */

app.get("/", function(req, res) {
  res.render("landing");
});

//INDEX - Show all campgrounds
app.get("/campgrounds", function(req, res) {
  // Get all campgrounds from DB
  Campground.find({}, function(err, allCampgrounds) {
    if (err) {
      console.log(err);
    } else {
      res.render("index", {campgrounds: allCampgrounds});
    }
  });
});

//CREATE - add new campground to database
app.post("/campgrounds", function(req, res) {
  // get data from form and add to campgrounds array
  var name = req.body.name;
  var image = req.body.image;
  var desc = req.body.description;
  var newCampground = {name: name, image: image, description: desc};
  // Create a new campground and save to DB
  Campground.create(newCampground, function(err, newlyCreated) {
    if (err) {
      console.log(err);
    } else {
        // redirect back to campgrounds page
        res.redirect("/campgrounds");
    }
  });

});

//NEW - show form to create new campground
app.get("/campgrounds/new", function(req, res) {
  res.render("new.ejs");
});

// SHOW - shows more info about one campground
app.get("/campgrounds/:id", function(req, res) {
  //find the campground with provided ID
  Campground.findById(req.params.id, function(err, foundCampground) {
    if(err) {
      console.log(err)
    } else {
        //render show template with that campground
        res.render("show", {campground: foundCampground});
    }
  });
  req.params.id

});

// Server listener and set port
app.set('port', 8080);
app.listen(app.get('port'), function () {
  console.log('YelpCamp Server Has Started!')
});