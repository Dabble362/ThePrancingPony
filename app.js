const express = require("express");
const bodyParser = require("body-parser");
const app = express();

app.use(bodyParser.urlencoded({ extended: true }));
app.use(express.static("public"));

const bcrypt = require("bcrypt");
const saltRounds = 10;
const myPlaintextPassword = "s0//P4$$w0rD";
const someOtherPlaintextPassword = "not_bacon";

// To hash a password
bcrypt.genSalt(saltRounds, function (err, salt) {
  bcrypt.hash(myPlaintextPassword, salt, function (err, hash) {
    // Store hash in your password DB.
  });
});

// check a password
bcrypt.compare(myPlaintextPassword, hash, function (err, result) {
  // result == true
});

const MongoClient = require("mongodb").MongoClient;
MongoClient.connect(
  "mongodb+srv://dab362:8EloquentDinosaur@cluster0.fl26cip.mongodb.net/?retryWrites=true&w=majority",
  {
    useUnifiedTopology: true,
  }
)
  .then((client) => {
    console.log("Connected to Database");
    const db = client.db("user_info");
    const authentication = db.collection("authentication");

    app.post("/authentication", (req, res) => {
      authentication
        .insertOne(req.body)
        .then((result) => {
          res.redirect("/");
        })
        .catch((error) => console.error(error));
    });
    // app.use();
    // app.get();
    // app.post();
    // app.listen();
  })

  .catch(console.error);

app.get("/", (req, res) => {
  res.sendFile(__dirname + "/index.html");
});

app.get("/characterA", (req, res) => {
  res.sendFile(__dirname + "/views/characterA.html");
});

app.get("/characterB", (req, res) => {
  res.sendFile(__dirname + "/views/characterB.html");
});

app.get("/characterC", (req, res) => {
  res.sendFile(__dirname + "/views/characterC.html");
});

const port = 3000;
app.listen(port, () => {
  console.log(`Example app listening on port ${port}`);
});
