const express = require("express");
const router = express.Router();

const {
  createPickupOrders,
  getAllPickupOrders,
  createDeliveryOrders,
  getAllDeliveryOrders,
  getDeliveryOrderDetails,
  getPickupOrderDetails,
  setOrderItems,
} = require("../controller/ordersController");

router.post("/setOrderItems", setOrderItems)

//pickup route
router.get("/pickupOrders", getAllPickupOrders);
router.post("/createPickupOrder", createPickupOrders);
router.get("/getPickupOrder", getPickupOrderDetails);

// delivery route
router.get("/deliveryOrders", getAllDeliveryOrders);
router.post("/createDeliveryOrder", createDeliveryOrders);
router.get("/getDeliveryOrder", getDeliveryOrderDetails);
module.exports = router;
