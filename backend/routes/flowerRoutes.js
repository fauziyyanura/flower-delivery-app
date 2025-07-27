const express = require("express");
const {
    addFlower,
    getAllFlowers,
    getFlowerById, 
    deleteFlower,
    updateFlower,
} = require("../controllers/flowerController");

const router = express.Router();

// Add a new flower (Ensure `image` matches Postman field name)
router.post("/", addFlower);


router.get("/", getAllFlowers);

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


router.put("/:id", updateFlower);



module.exports = router;
