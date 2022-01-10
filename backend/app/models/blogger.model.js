const mongoose = require("mongoose");

const bloggerSchema = new mongoose.Schema({
  first_name: {
    type: String,
    required: true,
  },
  last_name: {
    type: String,
    required: true,
  },
  password: {
    type: String,
    required: true,
  },
  email: {
    type: String,
    required: true,
  },
  user_name: {
    type: String,
    required: true,
  },
  profile_pic: {
    type: String,
  },
  bio: {
    type: String,
  },
  website: {
    type: String,
  },
  followers: [
    {
      follower_id: {
        type: mongoose.Schema.Types.ObjectId,
        ref: "Blogger",
      },
    },
  ],
  following: [
    {
      following_id: {
        type: mongoose.Schema.Types.ObjectId,
        ref: "Blogger",
      },
    },
  ],
});

module.exports = mongoose.model("Blogger", bloggerSchema);
