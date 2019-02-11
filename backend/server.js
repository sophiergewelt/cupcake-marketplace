let express = require("express");
let cors = require("cors");
let bodyParser = require("body-parser");

let app = express();
app.use(cors());
app.use(bodyParser.raw({ type: "*/*" }));
app.use((req, res, next) => {
  try {
    req.body = JSON.parse(req.body.toString());
    next();
  } catch (error) {
    next();
  }
});

app.get("/foobar", function(req, res) {
  res.send("Hello world!");
});

app.listen(4000, function() {
  console.log("Server started on port 4000");
});
