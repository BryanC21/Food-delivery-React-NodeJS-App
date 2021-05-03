const db = require("../config/dbConfig");
const CatchAsync = require("../utility/CatchAsync");
const AppError = require("../utility/AppError");

exports.getAllRestaurants = CatchAsync(async (req, res, next) => {
  await db.query("SELECT * FROM restaurants;").then(([results, fields]) => {
    if (results && results.length == 0) {
      return next(new AppError("No restaurant were found!", 200));
    } else {
      return res.json({
        status: "success",
        message: `${results.length} restaurants were successfully found`,
        restaurants: results,
      });
    }
  });
});
exports.getAllCuisineType = CatchAsync(async (req, res, next) => {
  await db.query("SELECT * FROM cuisine_type;").then(([results, fields]) => {
    if (results && results.length == 0) {
      return next(new AppError("No cuisine type were found!", 200));
    } else {
      return res.json({
        status: "success",
        message: `${results.length} cuisine type were successfully found`,
        restaurants: results,
      });
    }
  });
});

exports.restaurantInfoUpload = CatchAsync(async (req, res, next) => {
  const {
    restaurant_name,
    cuisine_type,
    restaurant_logo,
    address,
    description,
    dollar_sign,
  } = req.body;
  // check if the restaurant already exist
  await db
    .execute("SELECT * FROM restaurants WHERE restaurant_name=?", [
      restaurant_name,
    ])
    .then(([results, fields]) => {
      if (results && results.length == 0) {
        let baseSQL =
          "INSERT INTO restaurants (restaurant_name, restaurant_logo, cuisine_type, address, description, dollar_sign) VALUE (?,?,?,?,?,?);";
        return db
          .execute(baseSQL, [
            restaurant_name,
            restaurant_logo,
            cuisine_type,
            address,
            description,
            dollar_sign,
          ])

          .then(([results, fields]) => {
            if (results && results.affectedRows) {
              return res.json({
                status: "success",
                message: "Your restaurant is now up and running!",
              });
            } else {
              return next(
                new AppError("Restaurant could not be created!", 200)
              );
            }
          })
          .catch((err) => {
            return next(new AppError(err), 500);
          });
      } else {
        return next(
          new AppError(
            `${restaurant_name} has already registered with our service.`,
            401
          )
        );
      }
    });
});
