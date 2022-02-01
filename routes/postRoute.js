const express = require("express");
const router = express.Router();
const { createPost } = require("../controllers/postController");
const { isAuthenticated } = require("../middlewares/auth");
router.route("/post/upload").post(isAuthenticated, createPost);

module.exports = router;
