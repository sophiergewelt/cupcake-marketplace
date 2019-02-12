let express = require("express");
let cors = require("cors");
let sha256 = require("sha256");
const MongoClient = require("mongodb").MongoClient;
let ObjectID = require("mongodb").ObjectID;
let bodyParser = require("body-parser");

const url = "mongodb://admin:admin123@ds111993.mlab.com:11993/alibay";
let dbs = undefined;

MongoClient.connect(url, (err, allDbs) => {
  return (dbs = allDbs);
});

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

app.post("/signup", (req, res) => {
  let db = dbs.db("alibay");
  db.collection("users").findOne(
    { username: req.body.username },
    (err, result) => {
      if (err) throw err;
      if (result) {
        res.send(JSON.stringify({ success: false }));
      } else {
        let user = {
          username: req.body.username,
          password: sha256(req.body.password)
        };
        db.collection("users").insertOne(user, (err, result) => {
          if (err) {
            throw err;
          }
        });
        res.send(JSON.stringify({ success: true }));
      }
    }
  );
});

app.post("/login", (req, res) => {
  let db = dbs.db("alibay");
  db.collection("users").findOne(
    { username: req.body.username },
    (err, result) => {
      if (err) throw err;
      if (result) {
        if (result.password === sha256(req.body.password)) {
          res.send(
            JSON.stringify({
              success: true,
              user: {
                userId: result._id,
                username: result.username,
                location: result.location
              }
            })
          );
        } else {
          res.send(JSON.stringify({ success: false }));
        }
      } else {
        res.send(JSON.stringify({ success: false }));
      }
    }
  );
});

app.post("/addcupcake", (req, res) => {
  let db = dbs.db("alibay");
  db.collection("users").findOne(
    { _id: ObjectID(req.body.userId) },
    (err, result) => {
      if (err) throw err;
      if (result) {
        let newCupcake = {
          name: req.body.name,
          description: req.body.description,
          category: req.body.category,
          picture: req.body.picture,
          price: req.body.price,
          stock: req.body.stock,
          userId: req.body.userId
        };
        db.collection("cupcakes").insertOne(newCupcake, (err, result) => {
          if (err) throw err;
        });
        res.send(JSON.stringify({ success: true }));
      } else {
        res.send(JSON.stringify({ success: false }));
      }
    }
  );
});

app.get("/allcupcakes", (req, res) => {
  let db = dbs.db("alibay");
  res.send({
    success: true,
    cupcakes: [
      {
        name: "Aggressive cupcake",
        description: "A nice little sweetness.",
        category: "Vanilla",
        picture: "cupcake.jpg",
        price: "2",
        stock: "5",
        userId: "5c6219428deaf257dfaf4a33"
      },
      {
        name: "Nice cupcake",
        category: "Chocolate",
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

app.listen(4000, function() {
  console.log("Server started on port 4000");
});
