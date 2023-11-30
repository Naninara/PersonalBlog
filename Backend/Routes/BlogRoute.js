const express = require("express");
const {
  getSingleBlogData,
  createBlogController,
  AutoUpdateController,
  isPostedController,
  getAllBlogController,
  deleteController,
} = require("../Controllers/BlogPostController");
const router = express.Router();

router.route("/addblog").post(createBlogController);

router.route("/getblog/:id").get(getSingleBlogData);
router.route("/updatedata/:id").patch(AutoUpdateController);
router.route("/post/:id").patch(isPostedController);
router.route("/getallblog").get(getAllBlogController);
router.route("/delete/:id").delete(deleteController);
module.exports = router;
