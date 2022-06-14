const path = require("path");
const http = require("http");
const fs = require("fs");
const url = require("url");
const querystring = require("querystring");
const figlet = require("figlet");

const server = http.createServer((req, res) => {
  const page = url.parse(req.url).pathname;
  const params = querystring.parse(url.parse(req.url).query);
  if (page.match("/characters/1")) {
    fs.readFile("./character1.html", function (err, data) {
      res.writeHead(200, { "Content-Type": "text/html" });
      res.write(data);
      res.end();
    });
  } else if (page.match("/characters/2")) {
    fs.readFile("./character2.html", function (err, data) {
      res.writeHead(200, { "Content-Type": "text/html" });
      res.write(data);
      res.end();
    });
  } else if (page.match("/characters/3")) {
    fs.readFile("./character3.html", function (err, data) {
      res.writeHead(200, { "Content-Type": "text/html" });
      res.write(data);
      res.end();
    });
    // } else if (page.match(/png$/)) {
    //   fs.readFile("./images", function (err, data) {
    //     res.writeHead(200, { "Content-Type": "image/png" });
    //     res.write(data);
    //     res.end();
    //   });
  } else if (page.match(/astrologer.png$/)) {
    fs.readFile("./images/astrologer.png", function (err, data) {
      console.log(data);
      res.writeHead(200, { "Content-type": "image/png" });
      res.write(data);
      res.end();
    });
  } else if (page.match(/vagabond.png$/)) {
    fs.readFile("./images/vagabond.png", function (err, data) {
      console.log(data);
      res.writeHead(200, { "Content-type": "image/png" });
      res.write(data);
      res.end();
    });
  } else if (page.match(/prophet.png$/)) {
    fs.readFile("./images/prophet.png", function (err, data) {
      console.log(data);
      res.writeHead(200, { "Content-type": "image/png" });
      res.write(data);
      res.end();
    });
  } else if (page == "/") {
    fs.readFile("./index.html", function (err, data) {
      res.writeHead(200, { "Content-Type": "text/html" });
      res.write(data);
      res.end();
    });
  } else if (page == "/otherpage") {
    fs.readFile("./otherpage.html", function (err, data) {
      res.writeHead(200, { "Content-Type": "text/html" });
      res.write(data);
      res.end();
    });
  } else if (page == "/otherotherpage") {
    fs.readFile("./otherotherpage.html", function (err, data) {
      res.writeHead(200, { "Content-Type": "text/html" });
      res.write(data);
      res.end();
    });
  } else if (page == "/api") {
    if ("student" in params) {
      if (params["student"] == "leon") {
        res.writeHead(200, { "Content-Type": "application/json" });
        const objToJson = {
          name: "leon",
          status: "Boss Man",
          currentOccupation: "Baller",
        };
        res.end(JSON.stringify(objToJson));
      } else if (params["student"] != "leon") {
        res.writeHead(200, { "Content-Type": "application/json" });
        const objToJson = {
          name: "unknown",
          status: "unknown",
          currentOccupation: "unknown",
        };
        res.end(JSON.stringify(objToJson));
      }
    }
  } else if (page == "/css/style.css") {
    fs.readFile("./css/style.css", function (err, data) {
      res.write(data);
      res.end();
    });
  } else if (page == "/js/main.js") {
    fs.readFile("./js/main.js", function (err, data) {
      res.writeHead(200, { "Content-Type": "application/javascript" });
      res.write(data);
      res.end();
    });
  } else {
    figlet("404!!", function (err, data) {
      if (err) {
        console.log("Something went wrong...");
        console.dir(err);
        return;
      }
      res.write(data);
      res.end();
    });
  }
});
console.log(`The server is up and running on http://localhost:8000`);
server.listen(8000);
