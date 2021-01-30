const express = require("express");
const multer = require("multer");
const router = express.Router();
const shortid = require("shortid");
const path = require("path");
const { createItem, getItems } = require("../controller/item");

const storage = multer.diskStorage({
  destination: function (req, file, cb) {
    cb(null, path.join(path.dirname(__dirname), "uploads"));
  },
  filename: function (req, file, cb) {
    cb(null, shortid.generate() + "-" + file.originalname);
  },
});

const upload = multer({ storage });

router.post("/menu/createItem", upload.single("photo"), createItem);
router.get("/menu/getItem", getItems);

module.exports = router;
