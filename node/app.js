var http = require("http");
http
  .createServer(function (req, res) {
    res.write("Successfull");
    res.end();
  })
  .listen(8080);
