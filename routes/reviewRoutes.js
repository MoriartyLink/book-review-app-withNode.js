const express = require("express");
const router = express.Router();
const { addOrModifyReview, deleteReview } = require("../controllers/reviewController");
const authenticateUser = require("../middleware/authMiddleware");

// Only authenticated users can manage reviews
router.put("/:isbn", authenticateUser, addOrModifyReview);  // Add/Modify
router.delete("/:isbn", authenticateUser, deleteReview);    // Delete

module.exports = router;
