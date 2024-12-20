const http = require("http");
const fs = require("fs");
const path = require("path");

const server = http.createServer((req, res) => {
  let filePath = "";
  let contentType = "";

  if (req.url === "/") {
    filePath = path.join(__dirname, "public", "home.html");
    contentType = "text/html";
  } else if (req.url === "/about") {
    filePath = path.join(__dirname, "public", "about.html");
    contentType = "text/html";
  } else if (req.url === "/contact") {
    filePath = path.join(__dirname, "public", "contact.html");
    contentType = "text/html";
  } else {
    filePath = path.join(__dirname, "public", "error.html");
    contentType = "text/html";
  }

  fs.readFile(filePath, (err, data) => {
    if (err) {
      res.writeHead(404, { "Content-Type": "text/html" });
      res.end("404 Not Found");
    } else {
      res.writeHead(200, { "Content-Type": contentType });
      res.end(data);
    }
  });
});

server.listen(3000, () => {
  console.log(`Server running at http://localhost:3000`);
});
