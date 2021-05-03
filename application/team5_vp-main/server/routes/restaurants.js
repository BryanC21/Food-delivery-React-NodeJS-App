const express = require("express");
const router = express.Router();
const {
  getAllRestaurants,
  getAllCuisineType,
  restaurantInfoUpload,
} = require("../controller/restaurantController");

router.get("/getAllRestaurants", getAllRestaurants);

router.get("/getAllCuisineType", getAllCuisineType);

router.post("/restaurantInfoUpload", restaurantInfoUpload);

module.exports = router;
