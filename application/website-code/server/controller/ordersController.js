const db = require("../config/dbConfig");
const CatchAsync = require("../utility/CatchAsync");
const AppError = require("../utility/AppError");

exports.getAllPickupOrders = CatchAsync(async (req, res, next) => {
  await db.query("SELECT * FROM pickup_orders;").then(([results, fields]) => {
    if (results && results.length == 0) {
      return next(new AppError("No pickup items were found!", 200));
    } else {
      return res.json({
        status: "success",
        message: `${results.length} pickup items were successfully found`,
        orders: results,
      });
    }
  });
});
exports.getAllDeliveryOrders = CatchAsync(async (req, res, next) => {
  await db.query("SELECT * FROM delivery_orders;").then(([results, fields]) => {
    if (results && results.length == 0) {
      return next(new AppError("No delivery items were found!", 200));
    } else {
      return res.json({
        status: "success",
        message: `${results.length} delivery items were successfully found`,
        orders: results,
      });
    }
  });
});

exports.createPickupOrders = CatchAsync(async (req, res, next) => {
  // still need to realte this back to all three foreign keys
  const { title, price, description, pickup_address } = req.body;
  let baseSQL =
    "INSERT INTO pickup_orders (title, price, description, pickup_address, created) VALUE (?,?,?,?,now());";
  await db
    .execute(baseSQL, [title, price, description, pickup_address])
    // for delivery/pickup: front end needs to do a testing case to see which option the user chose
    // if user picks delivery option, block pickup, vice versa
    .then(([results, fields]) => {
      if (results && results.affectedRows) {
        return res.json({
          status: "success",
          message: "Your pickup order has been received!",
          orders: [
            {
              title: title,
              price: price,
              description: description,
              pickup_address: pickup_address,
            },
          ],
        });
      }
    })
    .catch((err) => {
      return next(new AppError(err), 500);
    });
});
exports.createDeliveryOrders = CatchAsync(async (req, res, next) => {
  // still need to realte this back to all three foreign keys
  const { title, price, description, delivery_address } = req.body;
  let baseSQL =
    "INSERT INTO delivery_orders (title, price, description, delivery_address, created) VALUE (?,?,?,?,now());";
  await db
    .execute(baseSQL, [title, price, description, delivery_address])
    // for delivery/pickup: front end needs to do a testing case to see which option the user chose
    // if user picks delivery option, block pickup, vice versa
    .then(([results, fields]) => {
      if (results && results.affectedRows) {
        return res.json({
          status: "success",
          message: "Your delivery order has been received!",
          orders: [
            {
              title: title,
              price: price,
              description: description,
              delivery_address: delivery_address,
            },
          ],
        });
      }
    })
    .catch((err) => {
      return next(new AppError(err), 500);
    });
});
