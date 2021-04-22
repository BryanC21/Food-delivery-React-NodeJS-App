const express = require("express");
const router = express.Router();
const {
  getAllRestaurants,
  getAllCuisineType,
} = require("../controller/restaurantController");

router.get("/getAllRestaurants", getAllRestaurants);

router.get("/getAllCuisineType", getAllCuisineType);

// router.post("/createRestaurant", imageUpload.single("image"), createRestaurant);

module.exports = router;
