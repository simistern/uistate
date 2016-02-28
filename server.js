var express = require('express');
app = express();
var r = require("rethinkdbdash")();
var bodyParser = require("body-parser");

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended:true}));

app.use(express.static(__dirname + '/public'));

app.get("*", function(request, result){
  result.sendFile(__dirname + "/public/index.html");
})

var PORT = process.env.PORT || 3000;
app.listen(PORT);
console.log("You are listening on port " + PORT);
console.log("Check this " + __dirname);
