import User from "../models/user.model.js";

const getUsersForSideBar = async (req, res) => {
  try {
    // 
    const users = await User.find({ _id: { $ne: req.user._id } }).select(
      "-password"
    );
    res.status(200).json(users);
  } catch (error) {
    console.error("Error in getSideBarUser : ", error.message);
    res.status(500).json({ error: "Server error" });
  }
};

export { getUsersForSideBar };
