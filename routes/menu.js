const express = require("express");
const { addMenu, getMenu } = require("../controller/menu");
const router = express.Router();

router.post("/menu/add", addMenu);
router.get("/menu/getMenu", getMenu);

module.exports = router;
