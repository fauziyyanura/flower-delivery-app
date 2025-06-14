const express = require("express");
const upload = require("../config/cloudinaryConfig");
const { addFlower, getAllFlowers, getFlowerById, deleteFlower } = require("../controllers/flowerController");
const Flower = require("../models/flowerModel"); // ✅ Fix missing import

const router = express.Router();

// Add a new flower
/*router.post("/", upload.single("image"), async (req, res) => {
    try {
        if (!req.body.name || !req.body.price || !req.file) {
            return res.status(400).json({ error: "Name, price, and image are required" });
        }
        await addFlower(req, res); // ✅ Correct function call
    } catch (error) {
        console.error("Error adding flower:", error.message);
        res.status(500).json({ error: error.message });
    }
});*/

router.post("/", upload.single("image"), addFlower); // ✅ Directly call addFlower()


// Fetch all flowers with full image URLs
router.get("/", async (req, res) => {
    try {
        console.log("🌸 Fetching all flowers...");
        const flowers = await Flower.find();
        const baseUrl = "https://flower-delivery-app.onrender.com";

        // ✅ Ensure correct image URL format
        const updatedFlowers = flowers.map(flower => ({
            ...flower,
            image: flower.image.startsWith("http") ? flower.image : `${baseUrl}${flower.image}`
        }));

        res.status(200).json({ success: true, data: updatedFlowers });
    } catch (error) {
        console.error("❌ Error fetching flowers:", error.message);
        res.status(500).json({ error: "Failed to fetch flowers" });
    }
});

/*router.get("/", getAllFlowers);*/

// Get flower by ID
router.get("/:id", getFlowerById);

// Delete a flower by ID
router.delete("/:id", async (req, res) => {
    try {
        const deletedFlower = await deleteFlower(req.params.id);
        if (!deletedFlower) {
            return res.status(404).json({ error: "Flower not found" });
        }
        res.status(200).json({ message: "Flower deleted successfully" });
    } catch (error) {
        console.error("Error deleting flower:", error.message);
        res.status(500).json({ error: error.message });
    }
});

module.exports = router;
