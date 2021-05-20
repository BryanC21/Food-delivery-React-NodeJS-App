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
  setOrderDeliverer,

} = require("../controller/ordersController");

router.post("/setOrderItems", setOrderItems)

router.get("/setOrderDeliverer", setOrderDeliverer)

//pickup route
router.get("/pickupOrders", getAllPickupOrders);
router.post("/createPickupOrder", createPickupOrders);
router.get("/getPickupOrder", getPickupOrderDetails);

// delivery route
router.get("/deliveryOrders", getAllDeliveryOrders);
router.post("/createDeliveryOrder", createDeliveryOrders);
router.get("/getDeliveryOrder", getDeliveryOrderDetails);
module.exports = router;
