// This controller handles user registration and login.
const userModel = require('../models/userModel');
const bcrypt = require('bcryptjs');

exports.signup = async (req, res) => {
  const { username, email, password } = req.body;
  try {
    // Check if user exists
    const existingUser = await userModel.findByEmail(email);
    if (existingUser) return res.status(400).json({ error: 'User already exists' });

    // Hash the password
    const hashedPassword = await bcrypt.hash(password, 10);
    const newUser = await userModel.create({ username, email, password: hashedPassword });
    res.status(201).json({ message: 'User signed up successfully', user: newUser });
  } catch (error) {
    console.error('Signup error:', error);
    res.status(500).json({ error: 'Error signing up user' });
  }
};

exports.login = async (req, res) => {
  const { email, password } = req.body;
  try {
    const user = await userModel.findByEmail(email);
    if (!user) return res.status(400).json({ error: 'Invalid credentials' });
    
    const valid = await bcrypt.compare(password, user.password);
    if (!valid) return res.status(400).json({ error: 'Invalid credentials' });
    
    // Normally you would issue a JWT token here
    res.json({ message: 'User logged in successfully', user });
  } catch (error) {
    console.error('Login error:', error);
    res.status(500).json({ error: 'Error logging in' });
  }
};
