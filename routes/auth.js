const express = require("express");
const { signup, signin, signout } = require("../controller/auth");
const { requireSignin } = require("../middleware/common");
const router = express.Router();

router.post("/signup", signup);
router.post("/signin", signin);
router.post("/signout", requireSignin, signout);

module.exports = router;
