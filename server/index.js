const cors = require("cors");
const express = require("express");
const mysql = require("mysql");
const bodyParser = require("body-parser");

const app = express();
app.use(cors());
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));

const pool = mysql.createPool({
  host: process.env.MYSQL_HOST_IP,
  user: process.env.MYSQL_USER,
  password: process.env.MYSQL_PASSWORD,
  database: process.env.MYSQL_DATABASE,
});

app.get("/user/login", (req, res) => {
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

app.post("/user/register", (req, res) => {
  const { name, email, password } = req.body;
  pool.query(
    `INSERT INTO user(name, email, password) VALUES ('${name}','${email}','${password}')`,
    (err, results) => {
      if (err) {
        if (err.code === "ER_DUP_ENTRY") {
          return res.send({
            request: false,
            message: "This email is already in our database",
          });
        }
      } else {
        return res.send({
          request: true,
          message: "Thank you, you are already registered",
        });
      }
    }
  );
});

app.post("/serie/add", (req, res) => {
  const { user, serie } = req.body;
  pool.query(
    `INSERT INTO user_series(userId, serieId) VALUES (${user},${serie})`,
    (err, results) => {
      if (err) {
        return res.send(err);
        if (err.code === "ER_DUP_ENTRY") {
          return res.send({
            request: false,
            message: "This serie is already in your library",
          });
        }
      } else {
        return res.send({
          request: true,
          message: "Serie added successfully",
        });
      }
    }
  );
});

app.post("/serie/remove", (req, res) => {
  const { user, serie } = req.body;
  pool.query(
    `DELETE FROM user_series WHERE userId='${user}' AND serieId='${serie}'`,
    (err, results) => {
      if (err) {
        return res.send(err);
      } else {
        if (results.affectedRows > 0) {
          return res.send({
            request: true,
            message: "Serie removed successfully",
          });
        } else {
          return res.send({
            request: true,
            message: "Serie removed previously",
          });
        }
      }
    }
  );
});

app.listen(process.env.REACT_APP_SERVER_PORT, () => {
  console.log(
    `App server now listening on port ${process.env.REACT_APP_SERVER_PORT}`
  );
});
