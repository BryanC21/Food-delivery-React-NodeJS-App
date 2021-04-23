const express = require("express");
const router = express.Router();

const {
  restaurantRegister,
  delivererRegister,
} = require("../controller/authController");

router.post("/registerRestaurant", restaurantRegister);
router.post("/registerDeliverer", delivererRegister);

module.exports = router;
