const express = require("express");
const router = express.Router();
const {
  createPost,
  likeAndunlikePost,
  deletePost,
  getPostOfFollowing,
} = require("../controllers/postController");
const { isAuthenticated } = require("../middlewares/auth");
router.route("/post/upload").post(isAuthenticated, createPost);
router
  .route("/post/:id")
  .get(isAuthenticated, likeAndunlikePost)
  .delete(isAuthenticated, deletePost);
router.route("/posts").get(isAuthenticated, getPostOfFollowing);
module.exports = router;
