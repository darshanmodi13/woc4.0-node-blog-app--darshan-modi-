const bcrypt = require("bcryptjs");
const fs = require("fs");
const path = require("path");
//Model
const Blogger = require("../models").Blogger;

//responses
const response = require("../utils/responses");

//validation
const createUserValidation = require("../validation/createBlogger.validation");

//helper
const bufferToStream = require("../utils/helper").bufferToStream;

exports.create = async (req, res) => {
  try {
    let user = await Blogger.findOne({ email: req.body.email });

    if (user) {
      return response.badRequestResponse(
        res,
        {},
        "Email Already Registered With Bloggr.com"
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
