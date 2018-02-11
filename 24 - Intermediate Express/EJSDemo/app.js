var express = require("express");
var app = express();



app.use(express.static("public"));
app.set('view engine', "ejs");

app.get("/", function(req, res) {
    res.render("home");
});

app.get("/fallinlovewith/:thing", function(req, res) {
    var thing = req.params.thing;
    res.render("love", { thingVar: thing });
});

app.get("/posts", function (req, res) {
    var posts = [
        {title: "Post 1", author: "Suzy"},
        {title: "My adorable pet bunny", author: "Susy"},
        {title: "Can you believe this pomsky?", author: "Colt"}
        ]
        res.render("posts", {posts: posts});
})

app.set('port', 8080);
app.listen(app.get('port'), function () {
  console.log('Server is running!!!')
});
