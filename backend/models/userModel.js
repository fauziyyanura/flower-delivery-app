const mongoose = require('mongoose');
const bcrypt = require('bcrypt');
const jwt = require('jsonwebtoken');
const validator = require('validator');

const userSchema = new mongoose.Schema({
    username: { type: String, required: true },
    email: { type: String, required: true, unique: true,  validate: [validator.isEmail, 'Please enter a valid email'] 
    },
    password: { type: String, required: true },
    cartData: { type: Object, default: {} }
}, { minimize: false });

// Middleware: Hash the password before saving
userSchema.pre('save', async function (next) {
    if (!this.isModified('password')) return next();
    this.password = await bcrypt.hash(this.password, 10);
    next();
});

userSchema.statics.signup = async function ({ username, email, password }) {
    const existingUser = await this.findOne({ email });
    if (existingUser) {
        throw new Error('User already exists');
    }
    const newUser = new this({ username, email, password });
    await newUser.save();
    return newUser;
};

userSchema.statics.login = async function ({ email, password }) {
    const user = await this.findOne({ email });
    if (!user) {
        throw new Error('Invalid email or user not found');
    }
    const isMatch = await bcrypt.compare(password, user.password);
    if (!isMatch) {
        throw new Error('Invalid credentials');
    }
    // Generate JWT
    const token = jwt.sign({ id: user._id }, process.env.JWT_SECRET, { expiresIn: '1h' });
    return { user, token };
};

// Instance Method: Compare Password (optional, if needed elsewhere)
userSchema.methods.comparePassword = async function (password) {
    return await bcrypt.compare(password, this.password);
};

module.exports = mongoose.model('User', userSchema);
