var path = require('path');

var express = require("express");
var bodyParser = require("body-parser");
var methodOverride = require("method-override");

// bring in the models
var db = require("./models");

var app = express();
// Serve static content for the app from the "public" directory in the application directory.
app.use('/assets', express.static(path.join(__dirname, 'assets')));
// parse application/x-www-form-urlencoded
app.use(bodyParser.urlencoded({
  extended: false
}));
// override with POST having ?_method=DELETE
app.use(methodOverride("_method"));

app.set("view engine", "pug");

var routes = require("./controllers/students_controller");

app.use("/", routes);
app.use("/update", routes);
app.use("/create", routes);
//app.use("/checkin", routes);


// listen on port 3000
var port = process.env.PORT || 3000;
db.sequelize.sync().then(function() {
  app.listen(port);
});