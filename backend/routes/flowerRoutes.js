const express = require("express");
const {
  addFlower,
  getAllFlowers,
  deleteFlower,
} = require("../controllers/flowerController");

const router = express.Router();

// Get all flowers
router.get("/", getAllFlowers);

// Add a new flower (Ensure `image` matches Postman field name)
router.post("/", addFlower);

// Delete a flower by ID
router.delete("/:id", deleteFlower);

module.exports = router;
