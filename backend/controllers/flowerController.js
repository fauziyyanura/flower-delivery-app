const Flower = require("../models/flowerModel");

const addFlower = async (req, res) => {
    try {
        console.log("🟢 Request Received");
        console.log("📦 Request Body:", req.body);
        console.log("📸 Uploaded File:", req.file); // Log the uploaded file

        if (!req.file) {
            console.error("❌ Image Upload Missing");
            return res.status(400).json({ message: "Image upload required" });
        }

        const { name, description, category } = req.body;
        const price = parseFloat(req.body.price); // Ensure price is a number

        // ✅ Ensure full image URL is stored
        const baseUrl = "https://flower-delivery-app.onrender.com";
        const fullImageUrl = `${baseUrl}/uploads/${req.file.filename}`;

        // Save flower to MongoDB
        const newFlower = new Flower({ name, description, price, category, image: fullImageUrl });
        await newFlower.save();

        console.log("✅ Flower Added Successfully:", newFlower);
        res.status(201).json({ message: "Flower added successfully!", flower: newFlower });
    } catch (error) {
        console.error("❌ Error in addFlower:", error);
        res.status(500).json({ message: "Error adding flower", error: error.message });
    }
};


const getAllFlowers = async (req, res) => {
    try {
        console.log("🌸 Fetching all flowers...");
        const flowers = await Flower.find();
        
        // ✅ Check if the array is empty
        if (Array.isArray(flowers) && flowers.length === 0) {
            return res.status(404).json({ success: false, message: "No flowers found" });
        }

        const baseUrl = "https://flower-delivery-app.onrender.com";

        // ✅ Ensure correct image URL format
        const updatedFlowers = flowers.map(flower => ({
            ...flower,
            image: flower.image.startsWith("http") ? flower.image : `${baseUrl}${flower.image}`
        }));

        res.status(200).json({ success: true, data: updatedFlowers });
    } catch (error) {
        console.error("❌ Error fetching flowers:", error.message);
        res.status(500).json({ success: false, message: "Error retrieving flowers", error: error.message });
    }
};




const getFlowerById = async (req, res) => {
    console.log("Received request for ID:", req.params.id); // ✅ Debug request ID
    try {
        const flower = await Flower.findById(req.params.id);
        if (!flower) {
            console.log("Flower not found.");
            return res.status(404).json({ success: false, message: "Flower not found." });
        }
        res.status(200).json({ success: true, data: flower });
    } catch (error) {
        console.error("Error retrieving flower:", error);
        res.status(500).json({ success: false, message: "Error retrieving flower", error: error.message });
    }
};

// Function to delete a flower
const deleteFlower = async (req, res) => {
    try {
    console.log(`🗑 Attempting to delete flower with ID: ${req.params.id}`);
    const deletedFlower = await Flower.findByIdAndDelete(req.params.id);
    if (!deletedFlower) {
        console.error("Flower not found");
        return res.status(404).json({ message: "Flower not found" });
    }
    console.log("✅ Flower deleted successfully:", deletedFlower);
    res.json({ message: "Flower deleted successfully!" });
} catch (error) {
    console.error("Error deleting flower:", error);
    res.status(500).json({ message: "Error deleting flower", error: error.message });
}
};

// Ensures all the functions are exported
module.exports = { addFlower, getAllFlowers, getFlowerById, deleteFlower };

