// ************************************
// alejandro gómez ibarra, 8003 zurich
// www.gomezibarra.com
// *********WEBDESIGN & CODE***********
// 2018 - by petra kohler, 8003 Zurich
// www.petrakohler.com
// ************************************

// jshint esverson: 6

// require modules
const express = require("express");
const bodyParser = require("body-parser");
const request = require("request");
const nodeMailer = require("nodemailer");


const port = 3090;
const app = express();

app.use(express.static(__dirname + "/public"));

app.use(bodyParser.urlencoded({
  extended: true
}));

// set home root to file
app.get("/", function(req, res) {
  res.sendFile(__dirname + "/index.html");

//nomailer

});

// set home root to file
app.get("/cv", function(req, res) {
  res.sendFile(__dirname + "/cv.html");
});

// set home root to file
app.get("/contactform", function(req, res) {
  res.sendFile(__dirname + "/contactform.html");
});





// Server log
app.listen(port, function() {
  console.log(`Server started on port ${port}`);
});
