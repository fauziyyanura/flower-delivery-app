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

module.exports = { registerUser, loginUser };
