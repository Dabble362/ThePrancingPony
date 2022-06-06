const path = require("path");
const http = require("http");
const fs = require("fs");
const url = require("url");
const querystring = require("querystring");
const figlet = require("figlet");

const server = http.createServer((req, res) => {
  const page = url.parse(req.url).pathname;
  const params = querystring.parse(url.parse(req.url).query);
  console.log(page);
  if (page.match("/character")) {
    fs.readFile("./character1.html", function (err, data) {
      res.writeHead(200, { "Content-Type": "text/html" });
      res.write(data);
      res.end();
    });
  } else if (page.match(/.png$/)) {
    //if the file matches the .png at the end
    //we assume is in the public folder for now
    let pngPath = path.join(__dirname, "/", req.url);
    //we create the read stream, but without the encoding
    let pngReadStream = fs.createReadStream(pngPath);

    //we send the headers
    res.statusCode = 200;
    //we send the correct content-type
    //in this case image/png
    res.setHeader("Content-Type", "image/png");

    //we add the stream to the response
    pngReadStream.pipe(res);
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
      } //student = leon
      else if (params["student"] != "leon") {
        res.writeHead(200, { "Content-Type": "application/json" });
        const objToJson = {
          name: "unknown",
          status: "unknown",
          currentOccupation: "unknown",
        };
        res.end(JSON.stringify(objToJson));
      } //student != leon
    } //student if
  } //else if
  else if (page == "/css/style.css") {
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
