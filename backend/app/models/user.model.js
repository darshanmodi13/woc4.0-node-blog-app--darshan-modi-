const mongoose = require("mongoose");

const userSchema = new mongoose.Schema({
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
      follower_id: mongoose.Schema.Types.ObjectId,
      ref: "User",
    },
  ],
  following: [
    {
      following_id: mongoose.Schema.Types.ObjectId,
      ref: "User",
    },
  ],
});

module.exports = mongoose.model("User", userSchema);
