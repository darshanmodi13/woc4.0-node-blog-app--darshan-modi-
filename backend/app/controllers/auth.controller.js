const bcrypt = require("bcryptjs");
const fs = require("fs");
const path = require("path");
const jwt = require("jsonwebtoken");
//Model
const Blogger = require("../models").Blogger;

//responses
const response = require("../utils/responses");

//validation
const createUserValidation = require("../validation/createBlogger.validation");

exports.create = async (req, res) => {
  try {
    let user = await Blogger.findOne({
      $or: [{ email: req.body.email }, { user_name: req.body.user_name }],
    });

    if (user) {
      return response.badRequestResponse(
        res,
        {},
        "Email Or User Name Already Registered With Bloggr.com"
      );
    }

    let validate = await createUserValidation(req.body);

    if (validate.error) {
      return response.badRequestResponse(
        res,
        validate.error.details[0].message
      );
    }

    const salt = await bcrypt.genSalt(10);
    const hash_password = await bcrypt.hash(req.body.password, salt);

    let { ...user_data } = req.body;
    user_data.password = hash_password;

    let img_link = `${user_data.user_name}.jpg`;
    const img = await Buffer.from(user_data.profile_pic, "base64");
    //console.log(__dirname);
    fs.writeFileSync(path.join(__dirname, "..", `/public/${img_link}`), img);

    user_data.profile_pic = img_link;

    let new_user = await Blogger.create(user_data);
    return response.successfullyCreatedResponse(
      res,
      new_user,
      "User Created Successfully."
    );
  } catch (error) {
    console.log(error);
    response.serverErrorResponse(res, "Server Error.");
  }

};

exports.signin = async (req, res) => {
  try {
    if (!req.body.password || !req.body.user_name) {
      return response.badRequestResponse(res, "All fields required.");
    }
    let user = await Blogger.findOne({ user_name: req.body.user_name });
    if (!user) {
      return response.notFoundResponse(res, "User Not Found.");
    }
    let is_matched = await bcrypt.compareSync(req.body.password, user.password);
    if (!is_matched) {
      return response.unauthorizedResponse(res, "Password Invalid.");
    }
    let token = await jwt.sign({ id: user._id }, process.env.SECRET, {
      expiresIn: "1d",
    });

    let { password, ...user_data } = user._doc;
    return response.successResponse(
      res,
      { token, ...user_data },
      "User Logged In Successfully."
    );
  } catch (error) {
    return response.serverErrorResponse(res, "Server Error.");
  }
};
