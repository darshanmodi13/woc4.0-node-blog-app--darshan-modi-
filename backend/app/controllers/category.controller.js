const Category = require("../models").Category;
const responses = require("../utils/responses");

exports.list = async (req, res) => {
  try {
    let category = await Category.find();
    return responses.successResponse(res, category);
  } catch (error) {
    return responses.serverErrorResponse(res);
  }
};
