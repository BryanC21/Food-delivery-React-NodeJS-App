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

// Upload does not work unless a register owner is signed in because of the foreign key
// if you want to test remove foreign key and it will work
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
          "INSERT INTO restaurants (restaurant_name, restaurant_logo, cuisine_type, address, description, dollar_sign, fk_restaurant_owner_id) VALUE (?,?,?,?,?,?,?);";
        let fk_restaurant_owner_id = req.session.userID;
        return db
          .execute(baseSQL, [
            restaurant_name,
            restaurant_logo,
            cuisine_type,
            address,
            description,
            dollar_sign,
            fk_restaurant_owner_id,
          ])
          .then(([results, fields]) => {
            if (results && results.affectedRows) {
              const insertId = results.insertId;
              return res.json({
                status: "success",
                message: "Your restaurant is now up and running!",
                insertId,
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

exports.uploadRestaurantMenu = CatchAsync(async (req, res, next) => {
  const { items_name, price, description, image, cuisine_type, owner_id } = req.body;
  let fkRestaurantID; 
  //Here we get the restaurant id using the restaurant owner's id
  let baseSQL =
     "SELECT fk_restaurant_id FROM restaurant_owner WHERE id=?";
   await db.query(baseSQL, [owner_id]).then(([results, fields]) => {
      fkRestaurantID = results[0].fk_restaurant_id;
   });
  //TODO here or in form cant allow any blank rows in form or sql will cry
  await db
    .execute("SELECT * FROM menu WHERE items_name=?", [items_name])
    .then(([results, fields]) => {
      if (results && results.length == 0) {
        console.log(fkRestaurantID)
        let baseSQL =
          "INSERT INTO menu (items_name, price, description, image, cuisine_type, fk_restaurantid) VALUE (?,?,?,?,?,?);";
        return db
          .execute(baseSQL, [
            items_name,
            price,
            description,
            image,
            cuisine_type,
            fkRestaurantID,
          ])
          .then(([results, fields]) => {
            if (results && results.affectedRows) {
              const insertId = results.insertId;
              return res.json({
                status: "success",
                message:
                  "Your menu is now avaible for others to see and order!",
                insertId,
              });
            } else {
              return next(new AppError("Menu could not be uploaded!", 200));
            }
          })
          .catch((err) => {
            return next(new AppError("ERROR", err), 500);
          });
      } else {
        return next(
          new AppError(
            `${items_name} has already been uploaded to your menu.`,
            400
          )
        );
      }
    });
});
