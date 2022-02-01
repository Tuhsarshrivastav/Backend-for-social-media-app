const express = require("express");
const router = express.Router();
const {
  register,
  login,
  followUser,
} = require("../controllers/userController");
const { isAuthenticated } = require("../middlewares/auth");
router.route("/register").post(register);
router.route("/login").post(login);
router.route("/follow/:id").get(isAuthenticated, followUser);
module.exports = router;
