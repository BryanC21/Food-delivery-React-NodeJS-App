const express = require("express");
const router = express.Router();

const {
  restaurantRegister,
  delivererRegister,
  approvedUserRegister,
} = require("../controller/authController");

router.post("/registerRestaurant", restaurantRegister);
router.post("/registerDeliverer", delivererRegister);
router.post("/registerApprovedUser", approvedUserRegister);

module.exports = router;
