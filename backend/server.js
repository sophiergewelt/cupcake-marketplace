let express = require("express");
let cors = require("cors");
let sha256 = require("sha256");
let bodyParser = require("body-parser");

const url = "mongodb://admin:admin123@ds111993.mlab.com:11993/alibay";
let dbs = undefined;

let app = express();
app.use(cors());
app.use(bodyParser.raw({ type: "*/*" }));

app.use((req, res, next) => {
  MongoClient.connect(url, (err, allDbs) => {
    dbs = allDbs;
  });
  try {
    req.body = JSON.parse(req.body.toString());
    next();
  } catch (error) {
    next();
  }
});

app.post("/signup", (res, req) => {
  let db = dbs.db("alibay");
  let findUser = db
    .collection("user")
    .find({ username: req.body.username })
    .toArray((err, result) => {
      console.log(result, err);
      return result;
    });
  if (findUser.lenght < 1) {
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
      console.log(result);
    });
    res.send(JSON.stringify({ success: true }));
  }
});

app.post("/login", (res, req) => {
  let db = dbs.db("alibay");
  let userArr = db
    .collection("users")
    .find({ username: req.body.username })
    .toArray((err, result) => {
      return result;
    });
  if (userArr.lenght > 0) {
    let user = userArr[0];
    if (user.password === sha256(req.body.password)) {
      res.send(
        JSON.stringify({
          success: true,
          user: {
            userId: user._id,
            username: user.username,
            location: user.location
          }
        })
      );
    } else {
      res.send(JSON.stringify({ success: false }));
    }
  } else {
    res.send(JSON.stringify({ success: false }));
  }
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
