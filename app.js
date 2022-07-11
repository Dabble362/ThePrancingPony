const { response } = require("express");
const express = require("express");
const app = express();
const port = 3000;

app.use(express.static("public"));
// app.use(express.static(__dirname + "/public"));
// app.use(express.static(__dirname + "/views"));

app.get("/", (req, res) => {
  res.sendFile(__dirname + "/index.html");
});

app.get(__dirname + "/characterA", (req, res) => {
  res.sendFile("/views/characterA.html");
});

app.get("/characterB", (request, response) => {
  res.sendFile("/characterB.html");
});

app.get("/characterC", (req, res) => {
  res.sendFile("/characterC.html");
});

app.get("/character", (request, response, next) => {
  app.render("character");
});

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`);
});
