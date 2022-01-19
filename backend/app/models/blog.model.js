const mongoose = require("mongoose");

const blogSchema = new mongoose.Schema({
  comments: [
    {
      body: {
        type: String,
      },
      commenter_id: {
        type: mongoose.Types.ObjectId,
        ref: "Blogger",
      },
      rating: {
        type: mongoose.Types.Decimal128,
      },
      reviewer_id: {
        type: mongoose.Types.ObjectId,
        ref: "Blogger",
      },
    },
  ],
  uploader_id: {
    type: mongoose.Types.ObjectId,
    ref: "Blogger",
  },
  category_id: {
    type: mongoose.Types.ObjectId,
    ref: "Category",
  },
  blog_pic: {
    type: String,
  },
  content: {
    type: String,
  },
  heading: {
    type: String,
  },
  sub_heading: {
    type: String,
  },
  date: {
    type: Date,
    default: Date.now(),
  },
});

module.exports = mongoose.model("Blog", blogSchema);
