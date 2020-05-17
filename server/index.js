const cors = require("cors");
const express = require("express");
const mysql = require("mysql");
const bodyParser = require("body-parser");

const app = express();
// Prevent CORS
app.use(cors());
// Use body parser to get body params from fetch request
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));

// Use createPool to handle multiple connection and reuse the connection
const pool = mysql.createPool({
  host: process.env.MYSQL_HOST_IP,
  user: process.env.MYSQL_USER,
  password: process.env.MYSQL_PASSWORD,
  database: process.env.MYSQL_DATABASE,
});

/**
 * User loggin
 * Method: POST
 * @function
 * @param {Object} req - Express request object
 * @param {Object} res - Express response object
 */
app.post("/user/login", (req, res) => {
  const { email, password } = req.body;
  pool.query(
    `SELECT user.id, user.name, user_series.serieId FROM user LEFT JOIN user_series ON user.id=user_series.userId WHERE email='${email}' AND password='${password}'`,
    (err, results) => {
      console.log(results);
      if (err) {
        return res.send(false);
      } else {
        if (results.length > 0) {
          const resData = results.reduce(
            (result, item) => {
              const { id, name, serieId } = item;
              return {
                id,
                name,
                series: [...result.series, serieId],
              };
            },
            { id: -1, name: "", series: [] }
          );

          return res.send(resData);
        } else {
          return res.send(false);
        }
      }
    }
  );
});

/**
 * Register User
 * Params req.body:
 * - name {String}
 * - email {String}
 * - pass {String}
 * Method: POST
 * @function
 * @param {Object} req - Express request object
 * @param {Object} res - Express response object
 */
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
          id: results.insertId,
          name,
        });
      }
    }
  );
});

/**
 * Add serie by user
 * Params req.body:
 * - user {Number}
 * - serie {Number}
 * Method: POST
 * @function
 * @param {Object} req - Express request object
 * @param {Object} res - Express response object
 */
app.post("/serie/add", (req, res) => {
  const { userId, serieId } = req.body;
  pool.query(
    `INSERT INTO user_series(userId, serieId) VALUES (${userId},${serieId})`,
    (err, results) => {
      if (err) {
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

/**
 * Remove serie by user
 * Params req.body:
 * - user {Number}
 * - serie {Number}
 * Method: POST
 * @function
 * @param {Object} req - Express request object
 * @param {Object} res - Express response object
 */
app.post("/serie/remove", (req, res) => {
  const { userId, serieId } = req.body;
  pool.query(
    `DELETE FROM user_series WHERE userId='${userId}' AND serieId='${serieId}'`,
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

// Binds and listens for connections on the specified host and port.
app.listen(process.env.REACT_APP_SERVER_PORT, () => {
  console.log(
    `App server now listening on port ${process.env.REACT_APP_SERVER_PORT}`
  );
});
