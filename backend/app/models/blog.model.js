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
});

module.exports = mongoose.model("Blog", blogSchema);
