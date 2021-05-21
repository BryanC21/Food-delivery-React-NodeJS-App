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

exports.getDeliveryOrderDetails = CatchAsync(async (req, res, next) => {
  await db.query("SELECT delivery_orders.*, orderItems.* FROM delivery_orders JOIN orderItems ON orderItems.fk_deliverer_order_id = delivery_orders.id WHERE delivery_orders.id = ?;", [req.query.id])
    .then(([results, fields]) => {
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

exports.getPickupOrderDetails = CatchAsync(async (req, res, next) => {
  await db.query("SELECT pickup_orders.*, orderItems.* FROM pickup_orders JOIN orderItems ON orderItems.fk_pickup_order_id = pickup_orders.id WHERE pickup_orders.id = ?;", [req.query.id])
    .then(([results, fields]) => {
      if (results && results.length == 0) {
        return next(new AppError("No pickup items were found!", 200));
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
  const { price, description, pickup_address } = req.body;
  let baseSQL =
    "INSERT INTO pickup_orders ( comments, price, pickup_address, created, fk_user_id, fk_restaurant_id) VALUES (?,?,?,now(),?,?);";
  await db
    .execute(baseSQL, [description, price, pickup_address, userID, restaurantID])
    // for delivery/pickup: front end needs to do a testing case to see which option the user chose
    // if user picks delivery option, block pickup, vice versa
    .then(async ([results, fields]) => {
      if (results && results.affectedRows) {
        await db
          .query("SELECT LAST_INSERT_ID();", [])
          .then(([results, fields]) => {
            for (var key in results[0]) {
              insertId = results[0][key]
            }
            return res.json({
              status: "success",
              message: "Your pickup order has been received!",
              orders: [
                {
                  id: insertId,
                  price: price,
                  description: description,
                  pickup_address: pickup_address,
                },
              ],
            });
          })
      }
    })
    .catch((err) => {
      return next(new AppError(err), 500);
    });
});
exports.createDeliveryOrders = CatchAsync(async (req, res, next) => {
  // still need to realte this back to all three foreign keys
  const {price, description, delivery_address, userID, restaurantID } = req.body;
  let baseSQL =
    "INSERT INTO delivery_orders (comments, price, delivery_address, created, fk_user_id, fk_restaurant_id) VALUES (?,?,?,now(),?,?);";
  await db
    .execute(baseSQL, [description, price, delivery_address, userID, restaurantID])
    // for delivery/pickup: front end needs to do a testing case to see which option the user chose
    // if user picks delivery option, block pickup, vice versa
    .then(async ([results, fields]) => {
      if (results && results.affectedRows) {
        let x = results.insertId
        await db
          .query("SELECT LAST_INSERT_ID();", [])
          .then(([results, fields]) => {
            /*for (var key in results[0]) {
              insertId = results[0][key]
            }*/
            return res.json({
              status: "success",
              message: "Your delivery order has been received!",
              orders: [
                {
                  id: x,
                  price: price,
                  description: description,
                  delivery_address: delivery_address,
                },
              ],
            });
          })
      }
    })
    .catch((err) => {
      return next(new AppError(err), 500);
    });
});

exports.setOrderItems = CatchAsync(async (req, res, next) => {
  const { itemNames, counts, P_or_D, order_id } = req.body;
  console.log("cant run?")
  if (P_or_D == "P") {
    for (let i = 0; i < itemNames.length; i++) {
      let baseSQL =
        "INSERT INTO orderItems VALUES (?,?,?,?,?,?);";
      await db
        .execute(baseSQL, [null, order_id, null, null, counts[i], itemNames[i]])
        .then(([results, fields]) => {
          if (results && results.affectedRows) {
          }
        })
        .catch((err) => {
          return next(new AppError(err), 500);
        });
    }
    return res.json({
      status: "success",
      message: "Your pickup order items were received!",
    });
  } else {
    for (let i = 0; i < itemNames.length; i++) {
      let baseSQL =
        "INSERT INTO orderItems VALUES (?,?,?,?,?,?);";
      await db
        .execute(baseSQL, [null, null, null, order_id, counts[i], itemNames[i]])
        .then(([results, fields]) => {
          if (results && results.affectedRows) {
          }
        })
        .catch((err) => {
          return next(new AppError(err), 500);
        });
    }
    return res.json({
      status: "success",
      message: "Your delivery order items were received!",
    });
  }
});

exports.setOrderDeliverer = CatchAsync(async(req,res,next)=>{
  //const { orderid, delivererid } = req.body;
  //restaurant id
  const orderid = req.query.orderid
  const delivererid = req.query.delivererid
  let searchSql = "UPDATE delivery_orders SET fk_deliverer_id = ? WHERE id = ? AND fk_deliverer_id IS NULL"

  await db.execute(searchSql,[delivererid, orderid]).then(([results,fields])=>{
    //if the SELECT statement does not find anything
    if(results && results.length == 0){
      return next(new AppError("unable to set deliverer",200));
    }
    else{
      return res.json({
        status:"success",
        order: results
      })
    }
  })
  .catch((err) => {
    return next(new AppError(err), 500);
  });
})

exports.getDeliveryOrdersForDeliverer = CatchAsync(async (req, res, next) => {
  await db.query("SELECT delivery_orders.*, orderItems.* FROM delivery_orders JOIN orderItems ON orderItems.fk_deliverer_order_id = delivery_orders.id WHERE delivery_orders.fk_deliverer_id = ?;", [req.query.id])
    .then(([results, fields]) => {
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