const User = require('../models/userModel');

exports.getAllUsernames = async (req, res) => {
  try {
    const users = await User.findAll({
      attributes: ['username']
    });
    res.status(200).json(users);
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
};

// Add a new user
exports.createUser = async (req, res) => {
  try {
    const { username, password } = req.body;
    // In production, hash the password!
    const user = await User.create({ username, password });
    res.status(201).json({ id: user.id, username: user.username });
  } catch (err) {
    res.status(400).json({ error: err.message });
  }
};