const User = require('../models/userModel'); // Import the model
const { validationResult } = require('express-validator');

// Controller for user registration
const registerUser = async (req, res) => {
    const errors = validationResult(req);
    if (!errors.isEmpty()) {
        return res.status(400).json({ errors: errors.array() });
    }
    try {
        // Using the static signup method from userModel.js
        const newUser = await User.signup(req.body);
        res.status(201).json({ message: 'User registered successfully', user: newUser });
    } catch (error) {
        res.status(400).json({ error: error.message });
    }
};

// Controller for user login
const loginUser = async (req, res) => {
    try {
        // Using the static login method from userModel.js
        const { user, token } = await User.login(req.body);
        res.status(200).json({ message: 'Login successful', user, token });
    } catch (error) {
        res.status(400).json({ error: error.message });
    }
};

//Gets User Profile
const getUserProfile = async (req, res) => {
try {
    const user = await User.findById(req.user.userId).select("-password");
    if (!user) return res.status(404).json({ message: "User not found" });
    res.status(200).json(user);
} catch (error) {
    res.status(500).json({ message: "Error retrieving profile", error: error.message });
}
};

module.exports = { registerUser, loginUser, getUserProfile };
