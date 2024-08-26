import jwt from "jsonwebtoken";

const generateToken = async (userId, res) => {
  try {
    const token = jwt.sign({ userId }, process.env.JWT_SECRET, {
      expiresIn: "30d",
    });
    // console.log(token);

    res.cookie("jwt", token, {
      maxAge: 30 * 24 * 60 * 60 * 1000,
      httpOnly: true,
      sameSite: "strict",
      secure: process.env.NODE_ENV !== "development",
    });
  } catch (error) {
    console.error("Error generating JWT token:", error.message);
    res.status(500).json({ error: "Server error" });
  }
};

export { generateToken };
``;
