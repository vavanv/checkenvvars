require("dotenv").config();
var http = require("http");

const ENV_VARS = {
  dbHost: process.env.DB_HOST,
  dbUser: process.env.DB_USER,
  dbPassword: process.env.DB_PASSWORD,
  email: process.env.EMAIL,
};

http
  .createServer(function (req, res) {
    res.writeHead(200, { "Content-Type": "application/json" });
    res.write(JSON.stringify(ENV_VARS));
    res.end();
  })
  .listen(process.env.PORT);
