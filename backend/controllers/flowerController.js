const Flower = require("../models/flowerModel");
const cloudinary = require("../config/cloudinaryConfig");

const addFlower = async (req, res) => {
  try {
    console.log("🟢 Request Received");
    console.log("📦 Request Body:", req.body);
    console.log("📸 Uploaded File:", req.files); // Log the uploaded file

    if (!req.files) {
      console.error("❌ Image Upload Missing");
      return res.status(400).json({ message: "Image upload required" });
    }

    const { name, description, category } = req.body;
    const price = parseFloat(req.body.price);
    const file = req.files.image;

    // Upload image to Cloudinary
    const result = await cloudinary.uploader.upload(file.tempFilePath, {
      folder: "flower_app_images",
      use_filename: true,
      unique_filename: false,
    });

    const imagePath = result.secure_url; // Cloudinary secure URL for the image

    const newFlower = new Flower({
      name,
      description,
      price,
      category,
      image: imagePath,
    });
    await newFlower.save();

    console.log("✅ Flower Added Successfully:", newFlower);
    res
      .status(201)
      .json({ message: "Flower added successfully!", flower: newFlower });
  } catch (error) {
    console.error("❌ Error in addFlower:", error);
    res
      .status(500)
      .json({ message: "Error adding flower", error: error.message });
  }
};


const getAllFlowers = async (req, res) => {
  try {
    console.log("Fetching all flowers...");
    const flowers = await Flower.find();
    res.status(200).json(flowers);
  } catch (error) {
    console.error("Error fetching flowers:", error);
    res
      .status(500)
      .json({ message: "Error retrieving flowers", error: error.message });
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
    res
      .status(500)
      .json({ message: "Error deleting flower", error: error.message });
  }
};

// Ensures all the functions are exported
module.exports = { addFlower, getAllFlowers, getFlowerById, deleteFlower };

