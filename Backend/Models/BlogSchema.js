const mongoose = require("mongoose");
const BlogSchema = mongoose.Schema({
  blogname: {
    type: String,
  },
  heading: {
    type: String,
    default: "",
  },
  subheading: {
    type: String,
    default: "",
  },
  content: {
    type: String,
    default: "",
  },
  createdOn: {
    type: Date,
    default: new Date(),
  },
  isUpdated: {
    type: Boolean,
    default: false,
  },
  LastUpdated: {
    type: Date,
    default: new Date(),
  },
  isPosted: {
    type: Boolean,
    default: false,
  },
});

module.exports = mongoose.model("blogdata", BlogSchema);
