// controllers/authController.js
const jwt = require('jsonwebtoken');
const User = require('../models/User');
const dotenv = require('dotenv');
const bcrypt = require('bcryptjs');

dotenv.config();

// Générer un JWT
const generateToken = (userId) => {
    return jwt.sign({ id: userId }, process.env.JWT_SECRET, { expiresIn: '1h' });
};

// Inscription d'un utilisateur
const registerUser = async (req, res) => {
    const { username, email, password } = req.body;

    try {
        // Vérifier si l'utilisateur existe déjà
        const userExists = await User.findOne({ email });
        if (userExists) {
            return res.status(400).send({ message: 'User already exists' });
        }
        
        hashedPassword = await bcrypt.hash(password, 10);
        console.log(hashedPassword);
        const newUser = new User({ 
            username: username, 
            email: email, 
            password: hashedPassword 
        });
        console.log(newUser.password);
        await newUser.save();

        res.status(201).send({ user: newUser, token: generateToken(newUser._id) });
    } catch (error) {
        res.status(400).send({ message: error.message });
    }
};

// Login user
const loginUser = async (req, res) => {
    const { email, password } = req.body;

    try {
        const user = await User.findOne({ email })
        if (!user) {
            return res.status(404).send({ message: 'User not found' });
        }
        const isMatch = await bcrypt.compare(password, user.password);
        if (!isMatch) {
            return res.status(401).send({ message: 'Invalid credentials' });
        }
        res.send({ user, token: generateToken(user._id) });
    } catch (error) {
        res.status(500).send({ message: error.message });
    }
};
        

module.exports = {
    registerUser,
    loginUser
};
