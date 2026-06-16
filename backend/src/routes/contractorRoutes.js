const express = require("express");
const router = express.Router();

const {
  createContractor,
  getAllContractors,
   getContractorById,
   updateContractor,
   deleteContractor,
    assignDepartment,
    updateContractorStatus,
} = require("../controllers/contractorController");

const authMiddleware = require("../middleware/authMiddleware");
const authorize = require("../middleware/roleMiddleware");
router.post(
  "/",
  authMiddleware,
  authorize("ADMIN"),
  createContractor
);

router.get(
  "/",
  authMiddleware,
  authorize("ADMIN"),
  getAllContractors
);
router.get(
  "/:id",
  authMiddleware,
  authorize("ADMIN"),
  getContractorById
);
router.put(
  "/:id",
  authMiddleware,
  authorize("ADMIN"),
  updateContractor
);
router.delete(
  "/:id",
  authMiddleware,
  authorize("ADMIN"),
  deleteContractor
);
router.put(
  "/:id/assign-department",
  authMiddleware,
  authorize("ADMIN"),
  assignDepartment
);
router.put(
  "/:id/status",
  authMiddleware,
  authorize("ADMIN"),
  updateContractorStatus
);
module.exports = router;