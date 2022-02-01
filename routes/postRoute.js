const express = require("express");
const router = express.Router();
const {
  createPost,
  likeAndunlikePost,
} = require("../controllers/postController");
const { isAuthenticated } = require("../middlewares/auth");
router.route("/post/upload").post(isAuthenticated, createPost);
router.route("/post/:id").get(isAuthenticated, likeAndunlikePost);
module.exports = router;
