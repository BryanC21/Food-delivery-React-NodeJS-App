const db = require("../config/dbConfig");
const bcrypt = require("bcryptjs");
const CatchAsync = require("../utility/CatchAsync");
const AppError = require("../utility/AppError");

/* Restuarant Registration */
exports.restaurantRegister = CatchAsync(async (req, res, next) => {
  const { username, email, password } = req.body;

  //   find if restaurant_owner name exist in db
  await db
    .execute("SELECT * FROM restaurant_owner WHERE username=?", [username])
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
            `${username} is associated with an existing account. Please login.`,
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
        "INSERT INTO restaurant_owner (username,email,password) VALUES (?,?,?)";
      return db.execute(baseSQL, [username, email, hashedPassword]);
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

/* Deliverer Registration */
exports.delivererRegister = CatchAsync(async (req, res, next) => {
  const { username, email, password } = req.body;

  await db
    .execute("SELECT * FROM deliverers WHERE username=?", [username])
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
        "INSERT INTO deliverers (username,email,password) VALUES (?,?,?)";
      return db.execute(baseSQL, [username, email, hashedPassword]);
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

/* Normal user Registration  for staffs/students*/
exports.approvedUserRegister = CatchAsync(async (req, res, next) => {
  const { username, email, password, address, phone_number } = req.body;

  await db
    .execute("SELECT * FROM approved_users WHERE username=?", [username])
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

/* Restuarant Sign in */
exports.restaurantLogin = CatchAsync(async (req, res, next) => {
  const { email, password } = req.body;
  let baseSQL =
    "SELECT id, email, password FROM restaurant_owner WHERE email=?;";
  // userID: to set up and link the  foreign key using sessions table in db
  let userID;
  await db
    .execute(baseSQL, [email])
    .then(([results, fields]) => {
      if (results && results.length == 1) {
        let hashedPassword = results[0].password;
        userID = results[0].id;
        return bcrypt.compare(password, hashedPassword);
      } else {
        res.status(401).json({
          status: "fail",
          error: "email or password is incorrect. Please try again. ",
        });
      }
    })
    .then((passwordMatch) => {
      if (passwordMatch) {
        req.session.email = email;
        // using sessions table we can now link our foregin key to this restaurant_owner user
        req.session.userID = userID;
        res.status(200).json({
          status: "success",
          message: `Welcome back owner, ${email}`,
        });
      } else {
        return res.status(401).json({
          status: "fail",
          error: "Invalid email or password. Please try again. ",
        });
      }
    })
    .catch((err) => {
      console.log(err);
    });
});

/* Deliverer Sign in */
exports.delivererLogin = CatchAsync(async (req, res, next) => {
  const { email, password } = req.body;
  let baseSQL = "SELECT id, email, password FROM deliverers WHERE email=?;";
  // userID: to set up and link the  foreign key using sessions table in db
  let userID;
  await db
    .execute(baseSQL, [email])
    .then(([results, fields]) => {
      if (results && results.length == 1) {
        let hashedPassword = results[0].password;
        userID = results[0].id;
        return bcrypt.compare(password, hashedPassword);
      } else {
        res.status(401).json({
          status: "fail",
          error: "email or password is incorrect. Please try again. ",
        });
      }
    })
    .then((passwordMatch) => {
      if (passwordMatch) {
        req.session.email = email;
        // using sessions table we can now link our foregin key to  deliverer
        req.session.userID = userID;
        res.status(401).json({
          status: "success",
          message: `Welcome back deliverer, ${email}`,
        });
      } else {
        return res.status(401).json({
          status: "fail",
          error: "Invalid email or password. Please try again. ",
        });
      }
    })
    .catch((err) => {
      console.log(err);
    });
});

/* Normal user login  for staffs/students*/
exports.approvedUserLogin = CatchAsync(async (req, res, next) => {
  const { email, password } = req.body;
  let baseSQL = "SELECT id, email, password FROM approved_users WHERE email=?;";
  // userID: to set up and link the  foreign key using sessions table in db
  let userID;
  await db
    .execute(baseSQL, [email])
    .then(([results, fields]) => {
      if (results && results.length == 1) {
        let hashedPassword = results[0].password;
        userID = results[0].id;
        return bcrypt.compare(password, hashedPassword);
      } else {
        res.status(401).json({
          status: "fail",
          error: "email or password is incorrect. Please try again. ",
        });
      }
    })
    .then((passwordMatch) => {
      if (passwordMatch) {
        req.session.email = email;
        // using sessions table we can now link our foregin key to  approved_user
        req.session.userID = userID;
        res.status(401).json({
          status: "success",
          message: `Welcome back, ${email}`,
        });
      } else {
        return res.status(401).json({
          status: "fail",
          error: "Invalid email or password. Please try again. ",
        });
      }
    })
    .catch((err) => {
      console.log(err);
    });
});
