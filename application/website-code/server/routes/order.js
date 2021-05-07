const express = require("express");
const router = express.Router();

const {
  createPickupOrders,
  getAllPickupOrders,
  createDeliveryOrders,
  getAllDeliveryOrders,
} = require("../controller/ordersController");

//pickup route
router.get("/pickupOrders", getAllPickupOrders);
router.post("/createPickupOrder", createPickupOrders);

// delivery route
router.get("/deliveryOrders", getAllDeliveryOrders);
router.post("/createDeliveryOrder", createDeliveryOrders);
module.exports = router;
