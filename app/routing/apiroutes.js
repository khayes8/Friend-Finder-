var friendsData = require("../data/friends.js");
var express = require("express");

var app = express(); 

module.exports = function(){

app.get("/friends", function(req, res) {
    res.sendFile(path.join(__dirname, "./data/friends.js"));
  });

}