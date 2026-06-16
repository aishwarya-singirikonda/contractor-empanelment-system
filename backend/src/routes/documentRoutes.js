const express = require("express");
const router = express.Router();

const {
  createDocument,
  getDocumentsByContractor,
  deleteDocument,
} = require("../controllers/documentController");

const authMiddleware = require("../middleware/authMiddleware");
const authorize = require("../middleware/roleMiddleware");

// Upload Document
router.post(
  "/",
  authMiddleware,
  authorize("ADMIN"),
  createDocument
);

// Get Contractor Documents
router.get(
  "/contractor/:contractorId",
  authMiddleware,
  authorize("ADMIN"),
  getDocumentsByContractor
);

// Delete Document
router.delete(
  "/:id",
  authMiddleware,
  authorize("ADMIN"),
  deleteDocument
);

module.exports = router;