require("dotenv").load();

var express = require("express"),
    app = express(),
    morgan = require("morgan"),
    bodyParser = require("body-parser"),
    path = require("path"),
    routes = require('./routes');
    auth = require("./middleware/auth");
    require("locus")


var request = require("request");
var db = require('./models/');
var jwt = require('jsonwebtoken');
var moment = require('moment');

 


app.use(morgan("tiny"));
app.use(bodyParser.json());

app.use('/css',express.static(path.join(__dirname, '../client/css')));
app.use('/js',express.static(path.join(__dirname, '../client/js')));
app.use('/templates',express.static(path.join(__dirname, '../client/js/templates')));

// app.use('/api/users', routes.users);
app.use('/api/auth', routes.auth);
// app.use('/api/forecast', routes.forecast);
// app.use('/api/log', routes.log);

app.get('*', function(req, res) {
  res.sendFile(path.join(__dirname, '../client', 'index.html'));
});

app.listen(process.env.PORT || 3000, function(){
  console.log("Server is listening on port 3000");
});