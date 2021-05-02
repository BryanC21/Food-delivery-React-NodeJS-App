const db = require("../config/dbConfig");
const bcrypt = require("bcryptjs");
const CatchAsync = require("../utility/CatchAsync");
const AppError = require("../utility/AppError");

exports.restaurantRegister = CatchAsync(async (req, res, next) => {
  const { name, email, password } = req.body;

  //   find if restaurant_owner name exist in db
  db.execute("SELECT * FROM restaurant_owner WHERE name=?", [name])
    .then(([results, fields]) => {
      // if no results
      if (results && results.length == 0) {
        //   see if email exists
        return db.execute("SELECT * FROM restaurant_owner WHERE email=?", [
          email,
        ]);
      } else {
        return next(
          new AppError(
            `${name} is associated with an existing account. Please login.`,
            401
          )
        );
      }
    })
    .then(([results, fields]) => {
      //   If name/email dne, then we hash password and store it in db
      if (results && results.length == 0) {
        return bcrypt.hash(password, 15);
      } else {
        res.status(200).json({
          status: "fail",
          error: `${email} already exist. Please login.`,
        });
      }
    })
    .then((hashedPassword) => {
      let baseSQL =
        "INSERT INTO restaurant_owner (name,email,password) VALUES (?,?,?)";
      return db.execute(baseSQL, [name, email, hashedPassword]);
    })
    .then(([results, fields]) => {
      if (results && results.affectedRows) {
        res.status(200).json({
          status: "success",
          message: `${email} has successfully signed up!`,
        });
      } else {
        res.status(500).json({
          status: "fail",
          error: `"Server error, restaurant owner user could not be created"`,
        });
      }
    })
    .catch((err) => {
      console.log(err);
    });
});

exports.delivererRegister = CatchAsync(async (req, res, next) => {
  const { name, email, password } = req.body;

  db.execute("SELECT * FROM deliverers WHERE name=?", [name])
    .then(() => {
      return db.execute("SELECT * FROM deliverers WHERE email=?", [email]);
    })
    .then(([results, fields]) => {
      //   If email dne, then we hash password and store it in db
      if (results && results.length == 0) {
        return bcrypt.hash(password, 15);
      } else {
        res.status(200).json({
          status: "fail",
          error: `${email} already exist. Please login.`,
        });
      }
    })
    .then((hashedPassword) => {
      let baseSQL =
        "INSERT INTO deliverers (name,email,password) VALUES (?,?,?)";
      return db.execute(baseSQL, [name, email, hashedPassword]);
    })
    .then(([results, fields]) => {
      if (results && results.affectedRows) {
        res.status(200).json({
          status: "success",
          message: `${email} has successfully signed up!`,
        });
      } else {
        res.status(500).json({
          status: "fail",
          error: `"Server error, deliverer user could not be created"`,
        });
      }
    })
    .catch((err) => {
      console.log(err);
    });
});

exports.approvedUserRegister = CatchAsync(async (req, res, next) => {
  const { username, email, password, address, phone_number } = req.body;

  db.execute("SELECT * FROM approved_users WHERE username=?", [username])
    .then(([results, fields]) => {
      if (results && results.length == 0) {
        return db.execute("SELECT * FROM approved_users WHERE email=?", [
          email,
        ]);
      } else {
        return next(
          new AppError(
            `${username} is associated with an existing account. Please login.`,
            401
          )
        );
      }
    })
    .then(([results, fields]) => {
      //   If username/email dne, then we hash password and store it in db
      if (results && results.length == 0) {
        return bcrypt.hash(password, 15);
      } else {
        res.status(200).json({
          status: "fail",
          error: `${email} already exist. Please login.`,
        });
      }
    })
    .then((hashedPassword) => {
      let baseSQL =
        "INSERT INTO approved_users (username,email,password, address,phone_number) VALUES (?,?,?,?,?)";
      return db.execute(baseSQL, [
        username,
        email,
        hashedPassword,
        address,
        phone_number,
      ]);
    })
    .then(([results, fields]) => {
      if (results && results.affectedRows) {
        res.status(200).json({
          status: "success",
          message: `${email} has successfully signed up!`,
        });
      } else {
        res.status(500).json({
          status: "fail",
          error: `"Server error, user could not be created"`,
        });
      }
    })
    .catch((err) => {
      console.log(err);
    });
});
