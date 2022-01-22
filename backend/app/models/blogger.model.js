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
      id: {
        type: mongoose.Schema.Types.ObjectId,
        ref: "Blogger",
      },
    },
  ],
  following: [
    {
      id: {
        type: mongoose.Schema.Types.ObjectId,
        ref: "Blogger",
      },
    },
  ],
});

module.exports = mongoose.model("Blogger", bloggerSchema);
