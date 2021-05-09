const express = require("express");
const router = express.Router();
const {
  getAllRestaurants,
  getAllCuisineType,
  restaurantInfoUpload,
  uploadRestaurantMenu,
  getAllMenuItems,
} = require("../controller/restaurantController");

const { restrictTo } = require("../controller/authController");

router.get("/getAllRestaurants", getAllRestaurants);

router.get("/getAllCuisineType", getAllCuisineType);

// restrict users to only restaurant
router.use(restrictTo("restaurant"));

router.post("/restaurantInfoUpload", restaurantInfoUpload);

router.post("/uploadRestaurantMenu", uploadRestaurantMenu);

router.get("/getAllMenuItems", getAllMenuItems);

module.exports = router;
