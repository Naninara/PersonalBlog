const express = require("express");
const mongoose = require("mongoose");
const blogModel = require("./Models/BlogSchema");
const cors = require("cors");
const BlogRouter = require("./Routes/BlogRoute");
const { response } = require("express");
const app = express();
app.use(express.urlencoded({ extended: false }));
app.use(express.json());
app.use(cors());
app.use("/", BlogRouter);
mongoose
  .connect(
    "mongodb+srv://nmvmanikanta:MavinNara1234@cluster0.mktinqb.mongodb.net/personalBlog?retryWrites=true&w=majority"
  )
  .then((response) => {
    console.log("Db connected");
  })
  .catch((err) => {
    console.log(err);
  });
app.listen(3500, () => {
  console.log("Server running on port 3500");
});
