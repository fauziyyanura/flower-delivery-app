const express = require('express');
const { registerUser, loginUser } = require('../controllers/userController');
const router = express.Router();
const { check } = require('express-validator');

// Route for user registration with validation
router.post(
    '/register',
    [
        check('username', 'Username is required').notEmpty(),
        check('email', 'Please include a valid email').isEmail(),
        check('password', 'Password must be at least 6 characters long').isLength({ min: 6 })
    ],
    registerUser
);

// Route for user login
router.post('/login', loginUser);

module.exports = router;
