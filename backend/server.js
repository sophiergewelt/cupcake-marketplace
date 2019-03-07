const express = require("express");
const cors = require("cors");
const sha256 = require("sha256");
const fs = require("fs");
const MongoClient = require("mongodb").MongoClient;
const ObjectID = require("mongodb").ObjectID;
const bodyParser = require("body-parser");
const stripe = require("stripe")("sk_test_ARpzQb6KqDa2TWVSTSlh9SQf");

const url =
  "mongodb://admin:admin123@ds163255.mlab.com:63255/cupcake-marketplace";
let dbs = undefined;

MongoClient.connect(url, (err, allDbs) => {
  return (dbs = allDbs);
});

let app = express();
app.use(cors());
app.use(bodyParser.raw({ type: "*/*" }));
app.use(express.static(__dirname + "/pictures"));

app.use((req, res, next) => {
  try {
    req.body = JSON.parse(req.body.toString());
    next();
  } catch (error) {
    next();
  }
});

app.post("/signup", (req, res) => {
  let db = dbs.db("cupcake-marketplace");
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
  let db = dbs.db("cupcake-marketplace");
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

app.get("/images/:name", (req, res) => {});

app.post("/addcupcake", (req, res) => {
  let db = dbs.db("cupcake-marketplace");

  const fileType = req.body.pictureType;
  const extension = fileType.substring(
    fileType.indexOf("/") + 1,
    fileType.length
  );
  let replaceBase64 = new RegExp(`^data:image\/${extension};base64,`);
  var base64Data = req.body.picture.replace(replaceBase64, "");
  var cupcakeId = new ObjectID();
  let fileName = `image_${cupcakeId}.${extension}`;
  let filePath = `${__dirname}/pictures/${fileName}`;

  fs.writeFileSync(filePath, base64Data, "base64");

  db.collection("users").findOne(
    { _id: ObjectID(req.body.userId) },
    (err, result) => {
      if (err) return res.status(500).send(err);
      if (result) {
        let newCupcake = {
          _id: cupcakeId,
          name: req.body.name,
          description: req.body.description,
          category: req.body.category,
          picture: fileName,
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
  let db = dbs.db("cupcake-marketplace");
  db.collection("cupcakes")
    .find({})
    .toArray((err, result) => {
      if (err) return res.status(500).send(err);
      res.send(JSON.stringify({ success: true, cupcakes: result }));
    });
});

app.post("/searchcupcakes", (req, res) => {
  let db = dbs.db("cupcake-marketplace");
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

app.post("/getcupcake", (req, res) => {
  let db = dbs.db("cupcake-marketplace");
  db.collection("cupcakes")
    .find({ _id: ObjectID(req.body.query) })
    .toArray((err, result) => {
      if (err) return res.status(500).send(err);
      res.send(JSON.stringify({ success: true, cupcake: result[0] }));
    });
});

app.post("/save-stripe-token", (req, res) => {
  stripe.charges.create(
    {
      amount: req.body.price,
      currency: "cad",
      source: "tok_ca", // obtained with Stripe.js
      description: `You've been charged`
    },
    (err, charge) => {
      if (err) res.status(500).send(err);
      res.send(JSON.stringify(charge));
    }
  );
});

app.listen(4000, function() {
  console.log("Server started on port 4000");
});
