const express = require("express");
const router = express.Router();
const { createPost } = require("../controllers/postController");

router.route("/post/upload").post(createPost);

module.exports = router;
