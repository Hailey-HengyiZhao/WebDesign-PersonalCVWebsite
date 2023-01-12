var HTTP_PORT = process.env.PORT || 8080;
var express = require("express");
var app = express();
var path = require("path");
app.use(express.static(__dirname + "/public"));

function onHttpStart() {
  console.log("Express http server listening on " + HTTP_PORT);
}

// setup a 'route' to listen on the default url path
app.get("/", (req, res) => {
  res.redirect("/index");
});

app.get("/index", (req, res) => {
  res.sendFile(path.join(__dirname, "/views/index.html"));
});
// setup http server to listen on HTTP_PORT
app.listen(HTTP_PORT, onHttpStart());
