const express = require("express");
const { create, getOrderItems } = require("../controller/order");
const { requireSignin } = require("../middleware/common");
const router = express.Router();

router.post("/createOrder", requireSignin, create);
router.get("/getOrder", requireSignin, getOrderItems);
module.exports = router;
