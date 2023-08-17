var express = require("express");


var app = express();


app.get("/", function(request, response) {
  response.send("Hello world!");
});


app.listen(5000, function() {
  console.log("Express app started on port 5000.");
});
