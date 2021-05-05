const express = require("express");
const router = express.Router();
const {
  getAllRestaurants,
  getAllCuisineType,
  restaurantInfoUpload,
  uploadRestaurantMenu,
} = require("../controller/restaurantController");
// MIDDLEWARE
const { requireSignin } = require("../middleware/requireSignin");

router.get("/getAllRestaurants", getAllRestaurants);

router.get("/getAllCuisineType", getAllCuisineType);

router.post("/restaurantInfoUpload", requireSignin, restaurantInfoUpload);

router.post("/uploadRestaurantMenu", requireSignin, uploadRestaurantMenu);

module.exports = router;
