const express = require("express");
const upload = require("../config/multerConfig");
const router = express.Router();

router.post("/uploads", upload.single("image"), (req, res) => {
    if (!req.file) {
        return res.status(400).json({ error: "Image upload failed" });
    }
    res.status(200).json({ imageUrl: `/uploads/${req.file.filename}` });
});

module.exports = router;
