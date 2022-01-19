const joi = require("joi");

module.exports = (content) => {
  const uploadBlogSchema = joi
    .object({
      header: joi.string().required().max(50),
      sub_header: joi.string().required().max(120),
      content: joi.string().required(),
      category: joi.string().required(),
    })
    .options({ abortEarly: true });
  return uploadBlogSchema.validate(content);
};
