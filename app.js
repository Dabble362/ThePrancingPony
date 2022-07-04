const express = require("express");
const app = express();
const port = 3000;

app.use(express.static("public"));
app.use(express.static(__dirname + "/public"));

app.get("/", (req, res) => {
  res.sendFile(__dirname + "/index.html");
});

app.get("/charactera", (req, res) => {
  res.sendFile(__dirname + "/charactera.html");
});

app.get("/character2", (req, res) => {
  res.sendFile(__dirname + "/character2.html");
});

app.get("/character3", (req, res) => {
  res.sendFile(__dirname + "/character3.html");
});

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`);
});
