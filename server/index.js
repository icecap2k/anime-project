const cors = require("cors");
const express = require("express");
const mysql = require("mysql");

const app = express();

const pool = mysql.createPool({
  host: process.env.MYSQL_HOST_IP,
  user: process.env.MYSQL_USER,
  password: process.env.MYSQL_PASSWORD,
  database: process.env.MYSQL_DATABASE,
});

app.use(cors());

app.listen(process.env.REACT_APP_SERVER_PORT, () => {
  console.log(
    `App server now listening on port ${process.env.REACT_APP_SERVER_PORT}`
  );
});

app.get("/test", (req, res) => {
  pool.query(`select * from user`, (err, results) => {
    if (err) {
      console.log("error");
      return res.send("error");
    } else {
      console.log(results);
      return res.send(results);
    }
  });
});
