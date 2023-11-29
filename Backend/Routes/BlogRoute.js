const express = require("express");
const {
  getSingleBlogData,
  createBlogController,
  AutoUpdateController,
  isPostedController,
} = require("../Controllers/BlogPostController");
const router = express.Router();

router.route("/addblog").post(createBlogController);

router.route("/getblog/:id").get(getSingleBlogData);
router.route("/updatedata/:id").patch(AutoUpdateController);
router.route("/post/:id").patch(isPostedController);
module.exports = router;
