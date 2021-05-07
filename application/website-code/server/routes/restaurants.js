const express = require("express");
const router = express.Router();
const {
  getAllRestaurants,
  getAllCuisineType,
  restaurantInfoUpload,
  uploadRestaurantMenu,
  getAllMenuItems,
} = require("../controller/restaurantController");
// MIDDLEWARE
const { requireSignin } = require("../middleware/requireSignin");

router.get("/getAllRestaurants", getAllRestaurants);

router.get("/getAllCuisineType", getAllCuisineType);

router.post("/restaurantInfoUpload", restaurantInfoUpload);

router.post("/uploadRestaurantMenu", uploadRestaurantMenu);

router.get("/getAllMenuItems", getAllMenuItems);

module.exports = router;
