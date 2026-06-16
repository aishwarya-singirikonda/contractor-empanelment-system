const express = require("express");
const router = express.Router();

const {
  createDepartment,
  getAllDepartments,
} = require("../controllers/departmentController");

const authMiddleware = require("../middleware/authMiddleware");
const authorize = require("../middleware/roleMiddleware");

router.post(
  "/",
  authMiddleware,
  authorize("ADMIN"),
  createDepartment
);

router.get(
  "/",
  authMiddleware,
  getAllDepartments
);

module.exports = router;