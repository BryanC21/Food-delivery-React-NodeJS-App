const express = require("express");
const router = express.Router();

const { restaurantRegister } = require("../controller/authController");

router.post("/registerRestaurant", restaurantRegister);

module.exports = router;
