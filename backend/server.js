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

app.post("/signup", (res, req) => {
  res.send({ success: true });
});

app.post("/login", (res, req) => {
  res.send({ success: true });
});

app.get("/allcupcakes", (req, res) => {
  res.send({
    success: true,
    cupcakes: [
      {
        name: "Aggressive cupcake",
        categorie: "Vanilla",
        picture: "cupcake.jpg",
        price: "2",
        stock: "5",
        username: "bob"
      },
      {
        name: "Nice cupcake",
        categorie: "Chocolate",
        picture: "cupcake.jpg",
        price: "4",
        stock: "2",
        username: "sue"
      }
    ]
  });
});

app.post("/searchcupcakes", (req, res) => {
  res.send({
    success: true,
    cupcakes: [
      {
        name: "Aggressive cupcake",
        categorie: "Vanilla",
        picture: "cupcake.jpg",
        price: "2",
        stock: "5",
        username: "bob"
      },
      {
        name: "Nice cupcake",
        categorie: "Chocolate",
        picture: "cupcake.jpg",
        price: "4",
        stock: "2",
        username: "sue"
      }
    ]
  });
});

app.post("/addcupcake", (res, req) => {
  res.send({ success: true });
});

app.listen(4000, function() {
  console.log("Server started on port 4000");
});
