var express = require("express");
var bodyParser = require("body-parser");
var path = require ("path");

var port = process.env.PORT || 3000;

var app = express(); 
 
//create routes for files
