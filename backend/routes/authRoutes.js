const express = require("express");
const bcrypt = require("bcrypt");
const jwt = require("jsonwebtoken");
const { UserModel } = require("../model/UserModel");

const router = express.Router();

// POST /auth/signup
router.post("/signup", async (req, res) => {
  const { name, email, password } = req.body;

  try {
    const existing = await UserModel.findOne({ email });
    if (existing) {
      return res.status(400).json({ message: "Email already registered." });
    }

    const hashedPassword = await bcrypt.hash(password, 10);

    // passport-local-mongoose stores password as 'hash' + 'salt'
    // We register via the plugin method instead
    const newUser = new UserModel({ name, email });
    await UserModel.register(newUser, password);

    res.status(201).json({ message: "User registered successfully." });
  } catch (err) {
    console.error(err);
    res.status(500).json({ message: "Signup failed.", error: err.message });
  }
});

// POST /auth/login
router.post("/login", async (req, res) => {
  const { email, password } = req.body;

  try {
    const user = await UserModel.findOne({ email });
    if (!user) {
      return res.status(400).json({ message: "Invalid email or password." });
    }

    // passport-local-mongoose authenticate method
    user.authenticate(password, (err, result) => {
      if (err || !result) {
        return res.status(400).json({ message: "Invalid email or password." });
      }

      const token = jwt.sign(
        { id: user._id, email: user.email, name: user.name },
        process.env.JWT_SECRET,
        { expiresIn: "1d" }
      );

      res.json({ token, user: { id: user._id, name: user.name, email: user.email } });
    });
  } catch (err) {
    console.error(err);
    res.status(500).json({ message: "Login failed.", error: err.message });
  }
});

module.exports = router;