const fs = require("fs");
const path = require("path");
const Blogger = require("../models").Blogger;
const Blog = require("../models").Blog;

const response = require("../utils/responses");

//validation
const uploadBlog = require("../validation/uploadBlog.validation");

exports.getUser = async (req, res) => {
  try {
    let user = await Blogger.findOne({ _id: req.params.id }, { password: 0 });
    let posts = await Blog.find({ uploader_id: user._id });

    if (!user) {
      return response.notFoundResponse(res, "User Not Found.");
    }

    return response.successResponse(res, { user, posts }, "User Found");
  } catch (error) {
    return response.serverErrorResponse(res, "Server Error.");
  }
};

exports.list = async (req, res) => {
  try {
    let users = await Blogger.find(
      {
        user_name: { $regex: `^${req.query.username}`, $options: "i" },
      },
      { password: 0 }
    ).limit(parseInt(req.query.limit) || 20);
    return response.successResponse(res, users);
  } catch (error) {
    return response.serverErrorResponse(res);
  }
};

exports.upload = async (req, res) => {
  try {
    let imgBuffer = req.body.imgBuffer;
    if (
      imgBuffer.split(",")[0].split(":")[1].split(";")[0] !== "image/jpeg" &&
      imgBuffer.split(",")[0].split(":")[1].split(";")[0] !== "image/jpg" &&
      imgBuffer.split(",")[0].split(":")[1].split(";")[0] !== "image/png"
    ) {
      return response.badRequestResponse(
        res,
        {},
        "Image Type must be jpeg,png,jpg"
      );
    }
    let validate = await uploadBlog(req.body.data);
    if (validate.error) {
      return response.badRequestResponse(
        res,
        validate.error.details[0].message
      );
    }
    let blog = await new Blog({
      heading: req.body.data.header,
      sub_heading: req.body.data.sub_header,
      category_id: req.body.data.category,
      content: req.body.data.content,
      uploader_id: req._id,
    });
    let img_link = `${blog._id}.jpg`;
    const img = await Buffer.from(imgBuffer, "base64");
    fs.writeFileSync(path.join(__dirname, "..", `/public/${img_link}`), img);
    blog.blog_pic = img_link;
    await blog.save();
    return response.successResponse(res, blog);
  } catch (error) {
    console.log(error);
    return response.serverErrorResponse(res);
  }
};
