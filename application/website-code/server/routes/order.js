const express = require("express");
const router = express.Router();

const {
  createPickupOrders,
  getAllPickupOrders,
  createDeliveryOrders,
  getAllDeliveryOrders,
} = require("../controller/ordersController");

router.post("/createPickupOrder", createPickupOrders);
router.post("/createDeliveryOrder", createDeliveryOrders);
router.get("/pickupOrders", getAllPickupOrders);
router.get("/deliveryOrders", getAllDeliveryOrders);

module.exports = router;
