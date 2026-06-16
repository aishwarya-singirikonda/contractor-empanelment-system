const express = require("express");
const router = express.Router();

const { getDashboardStats } = require("../controllers/dashboardController");

const authMiddleware = require("../middleware/authMiddleware");
const authorize = require("../middleware/roleMiddleware");

router.get(
  "/stats",
  authMiddleware,
  authorize("admin"),
  getDashboardStats
);

module.exports = router;