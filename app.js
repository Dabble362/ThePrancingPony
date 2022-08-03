const express = require("express");
const app = express();


app.use(express.static("public"));

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
