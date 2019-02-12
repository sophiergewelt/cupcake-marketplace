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
      if (err) return res.status(500).send(err);
      if (result) {
        res.send(JSON.stringify({ success: false }));
      } else {
        let user = {
          username: req.body.username,
          password: sha256(req.body.password)
        };
        db.collection("users").insertOne(user, (err, result) => {
          if (err) {
            if (err) return res.status(500).send(err);
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
      if (err) return res.status(500).send(err);
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
      if (err) return res.status(500).send(err);
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
          if (err) return res.status(500).send(err);
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
  db.collection("cupcakes")
    .find({ stock: { $ne: 0 } })
    .toArray((err, result) => {
      if (err) return res.status(500).send(err);
      res.send(JSON.stringify({ success: true, cupcakes: result }));
    });
});

app.post("/searchcupcakes", (req, res) => {
  let db = dbs.db("alibay");
  //let unregQuery = req.body.query;
  //let query = new RegExp(".*" + unregQuery + ".", "i");
  db.collection("cupcakes").createIndex({
    name: "text",
    description: "text",
    category: "text"
  });
  db.collection("cupcakes")
    .find({ $text: { $search: req.body.query } })
    .toArray((err, result) => {
      if (err) return res.status(500).send(err);
      res.send(JSON.stringify({ success: true, cupcakes: result }));
    });
});

app.listen(4000, function() {
  console.log("Server started on port 4000");
});
