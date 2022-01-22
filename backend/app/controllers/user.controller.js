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
    let limit = parseInt(req.query.limit) || 10;
    let users = await Blogger.find(
      {
        user_name: { $regex: `^${req.query.username}`, $options: "i" },
      },
      { password: 0 }
    ).limit(limit);
    return response.successResponse(res, users);
  } catch (error) {
    return response.serverErrorResponse(res);
  }
};

exports.upload = async (req, res) => {
  try {
    let imgBuffer = req.body.imgBuffer;
    let imgType = imgBuffer
      .split(",")[0]
      .split(":")[1]
      .split(";")[0]
      .split("/")[1];

    if (imgType !== "jpeg" && imgType !== "jpg" && imgType !== "png") {
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
    let img_link = `${blog._id}.${imgType}`;
    const img = await Buffer.from(imgBuffer.split(",")[1], "base64");
    fs.writeFileSync(path.join(__dirname, "..", `/public/${img_link}`), img);

    blog.blog_pic = img_link;
    await blog.save();
    return response.successResponse(res, blog);
  } catch (error) {
    console.log(error);
    return response.serverErrorResponse(res);
  }
};

exports.getPost = async (req, res) => {
  try {
    let blog = await Blog.findOne({ _id: req.params.id }).populate({
      path: "uploader_id",
      model: "Blogger",
      select: { _id: 1, user_name: 1, followers: 1, following: 1 },
    });
    let { uploader_id, ...post } = blog._doc;
    return response.successResponse(res, { post, uploader_id });
  } catch (error) {
    console.log(error);
    return response.serverErrorResponse(res);
  }
};

exports.listPost = async (req, res) => {
  try {
    // let test = await Blog.aggregate([
    //   {
    //     $lookup: {
    //       from: "Category",
    //       localField: "_id",
    //       foreignField: "category_id",
    //       as: "category_doc",
    //     },
    //     // $project: {
    //     //   category_doc: { $filter: { input: "$category_doc" } },
    //     // },
    //   },
    // ]);
    // console.log(test[0]);
    let category_name = req.query.category_name || "";
    let limit = parseInt(req.query.limit) || 15;
    let offset = parseInt(req.query.offset) || 0;
    let blog = await Blog.find()
      .populate([
        {
          path: "uploader_id",
          model: "Blogger",
          select: { _id: 1, user_name: 1, followers: 1, following: 1 },
          populate: {
            path: "followers.id",
            model: "Blogger",
            match: { id: req._id },
            select: { _id: 1 },
          },
        },
        {
          path: "category_id",
          model: "Category",
          match: { name: { $regex: `^${category_name}`, $options: "i" } },
        },
      ])
      .limit(limit)
      .skip(offset * limit)
      .exec();
    //console.log(blog, blog.length);
    return response.successResponse(res, blog);
  } catch (error) {
    console.log(error);
    return response.serverErrorResponse(res);
  }
};

exports.follow = async (req, res) => {
  //console.log(req.body);
  try {
    let user = await Blogger.findOne({
      _id: req._id,
      following: { $elemMatch: { id: req.body.user._id } },
    });
    if (user) return response.badRequestResponse(res, "");
    await Blogger.updateOne(
      { _id: req._id },
      {
        $push: {
          following: {
            id: req.body.user._id,
          },
        },
      }
    );
    await Blogger.updateOne(
      { _id: req.body.user._id },
      {
        $push: {
          followers: {
            id: req._id,
          },
        },
      }
    );
    return response.successResponse(res, {});
  } catch (error) {
    return response.serverErrorResponse(res);
  }
};

exports.unfollow = async (req, res) => {
  //console.log(req.body);
  try {
    let user = await Blogger.findOne({
      _id: req._id,
      following: { $elemMatch: { id: req.body.user._id } },
    });
    if (!user) return response.badRequestResponse(res, "");
    await Blogger.updateOne(
      { _id: req._id },
      {
        $pull: {
          following: {
            id: req.body.user._id,
          },
        },
      }
    );
    await Blogger.updateOne(
      { _id: req.body.user._id },
      {
        $pull: {
          followers: {
            id: req._id,
          },
        },
      }
    );
    return response.successResponse(res, {});
  } catch (error) {
    return response.serverErrorResponse(res);
  }
};

exports.deletePost = async (req, res) => {
  try {
    let deleted = await Blog.findByIdAndDelete({ _id: req.params.id });
    // console.log(deleted);
    return response.successResponse(res, deleted);
  } catch (error) {
    return response.serverErrorResponse(res);
  }
};
