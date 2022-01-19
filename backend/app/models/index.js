const db = {};

//Models
db.Blogger = require("./blogger.model");
db.Blog = require("./blog.model");
db.Category = require("./category.model");

module.exports = db;
