const User = require("./../models/user");
const jwt = require("jsonwebtoken");

exports.isAuthenticated = async (req, res, next) => {
  try {
    const { token } = req.cookies;
    if (!token) {
      return res.status(401).json({ message: "Unauthorized" });
    }
    const decode = await jwt.verify(token, process.env.JWT_SECRET);

    req.user = await User.findById(decode._id);
    next();
  } catch (error) {
    return res.status(500).json({ message: error.message });
  }
};
