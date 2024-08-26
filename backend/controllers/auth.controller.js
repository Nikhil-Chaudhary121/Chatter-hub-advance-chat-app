import User from "../models/user.model.js";
import bcrypt from "bcryptjs";
import { generateToken } from "../utils/generateToken.js";

const userSignup = async (req, res) => {
  try {
    const { fullName, username, password, confirmPassword, gender } = req.body;
    if (password !== confirmPassword) {
      return res.status(400).json({ error: "Passwords do not match" });
    }
    const user = await User.findOne({ username });
    if (user) {
      return res.status(400).json({ error: "Username already exists" });
    }

    const boyPic = `https://avatar.iran.liara.run/public/boy?username=${username}`;

    const girlPic = `https://avatar.iran.liara.run/public/girl?username=${username}`;

    const profilePic = gender === "male" ? boyPic : girlPic;

    const salt = await bcrypt.genSalt(10);
    const hashedPassword = await bcrypt.hash(password, salt);

    const newUser = new User({
      fullName,
      username,
      password: hashedPassword,
      profilePic,
      gender,
    });
    if (newUser) {
      generateToken(newUser._id, res);
      await newUser.save();

      res.status(201).json({
        _id: newUser._id,
        username: newUser.username,
        profilePic: newUser.profilePic,
        fullName: newUser.fullName,
        gender: newUser.gender,
      });
    } else {
      res.status(400).json({ error: "Invalid User data" });
    }
  } catch (error) {
    console.error("Error in Sign Up User", error.message);
    res.status(500).json({ error: "Server error" });
  }
};

const userLogin = async (req, res) => {
  try {
    const { username, password } = req.body;
    const user = await User.findOne({ username });
    if (!user) {
      return res.status(400).json({ error: "User not found" });
    }
    const isMatch = await bcrypt.compare(password, user.password);
    if (!isMatch) {
      return res.status(400).json({ error: "Invalid password" });
    }
    generateToken(user._id, res);
    res.json({
      _id: user._id,
      username: user.username,
      profilePic: user.profilePic,
      fullName: user.fullName,
      gender: user.gender,
    });
  } catch (error) {
    console.error("Error in Login User", error.message);
    res.status(500).json({ error: "Server error" });
  }
};

const userLogout = async (req, res) => {
  try {
    res.cookie("jwt", "", {
      maxAge: 0,
    });
    res.json({ message: "Logged out successfully" });
  } catch (error) {
    console.error("Error in Logout User", error.message);
    res.status(500).json({ error: "Server error" });
  }
};

export { userLogin, userSignup, userLogout };
