const express = require("express");
const router = express.Router();

const authMiddleware = require("../middleware/authMiddleware");
const authorize = require("../middleware/roleMiddleware");

const { getProfile } = require("../controllers/userController");

router.get(
  "/profile",
  authMiddleware,
  getProfile
);

router.get(
  "/admin",
  authMiddleware,
  authorize("ADMIN"),
  (req, res) => {
    res.json({
      success: true,
      message: "Welcome Admin",
    });
  }
);

module.exports = router;