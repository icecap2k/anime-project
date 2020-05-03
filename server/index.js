const cors = require("cors");
const express = require("express");
const mysql = require("mysql");
const bodyParser = require("body-parser");

const app = express();
app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());

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

app.get("/login", (req, res) => {
  const { email, password } = req.query;
  pool.query(
    `select * from user where email='${email}' AND password='${password}'`,
    (err, results) => {
      if (err) {
        return res.send(false);
      } else {
        return res.send(results.length > 0);
      }
    }
  );
});

app.post("/register", (req, res) => {
  const { name, email, password } = req.body;
  pool.query(
    `INSERT INTO user(name, email, password) VALUES ('${name}','${email}','${password}')`,
    (err, results) => {
      if (err) {
        if (err.code === "ER_DUP_ENTRY")
          return res.send({
            request: false,
            message: "This email is already in our database",
          });
      } else {
        return res.send({
          request: true,
          message: "Thank you, you are already registered",
        });
      }
    }
  );
});
