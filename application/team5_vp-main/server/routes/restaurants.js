const express = require("express");
const router = express.Router();
const {
  getAllRestaurants,
  getAllCuisineType,
  restaurantInfoUpload,
  uploadRestaurantMenu,
} = require("../controller/restaurantController");

router.get("/getAllRestaurants", getAllRestaurants);

router.get("/getAllCuisineType", getAllCuisineType);

router.post("/restaurantInfoUpload", restaurantInfoUpload);

router.post("/uploadRestaurantMenu", uploadRestaurantMenu);

module.exports = router;
