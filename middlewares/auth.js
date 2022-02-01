const User = require("./../models/User");
const jwt = require("jsonwebtoken");
exports.isAuthenticated = async (req, res, next) => {
  const { token } = req.cookies;
  if (!token) {
    return res.status(401).json({ message: "Unauthorized" });
  }
  const decode = await jwt.verify(token, process.env.JWT_SECRET);

  req.user = await User.decode(decode._id);
  next();
};
