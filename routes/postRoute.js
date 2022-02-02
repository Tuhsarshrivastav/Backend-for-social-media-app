const express = require("express");
const router = express.Router();
const {
  createPost,
  likeAndunlikePost,
  deletePost,
  getPostOfFollowing,
  updateCaption,
} = require("../controllers/postController");
const { isAuthenticated } = require("../middlewares/auth");
router.route("/post/upload").post(isAuthenticated, createPost);
router
  .route("/post/:id")
  .get(isAuthenticated, likeAndunlikePost)
  .put(isAuthenticated, updateCaption)
  .delete(isAuthenticated, deletePost);
router.route("/posts").get(isAuthenticated, getPostOfFollowing);
module.exports = router;
