const mongoose = require("mongoose");

const postSchema = new mongoose.Schema({
  comments: [
    {
      body: {
        type: String,
      },
      commenter_id: {
        type: mongoose.Types.ObjectId,
        ref: "User",
      },
      rating: {
        type: mongoose.Types.Decimal128,
      },
      reviewer_id: {
        type: mongoose.Types.ObjectId,
        ref: "User",
      },
    },
  ],
  uploader_id: {
    type: mongoose.Types.ObjectId,
    ref: "User",
  },
});

module.exports = mongoose.model("Post", postSchema);
