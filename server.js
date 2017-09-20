var express = require("express");
var bodyParser = require("body-parser");
// var path = require ("path");

var port = process.env.PORT || 3000;

var app = express(); 

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.text());
app.use(bodyParser.json({ type: "application/vnd.api+json" }));
 
//create routes for files
var func = require("./app/routing/htmlroutes");
// var funct = require(".app/routing/apiroutes");
func(app);
// funct(app);


app.listen(port, function() {
  console.log("App listening on PORT: " + port);
});