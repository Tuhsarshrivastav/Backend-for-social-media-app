const express = require("express");
const router = express.Router();
const {
  register,
  login,
  followUser,
  logout,
  updatePassword,
  updateProfile,
} = require("../controllers/userController");
const { isAuthenticated } = require("../middlewares/auth");
router.route("/register").post(register);
router.route("/login").post(login);
router.route("/follow/:id").get(isAuthenticated, followUser);
router.route("/logout").get(logout);
router.route("/update/password").put(isAuthenticated, updatePassword);
router.route("/update/profile").get(isAuthenticated, updateProfile);
module.exports = router;
