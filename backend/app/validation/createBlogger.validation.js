const joi = require("joi");

const email_regex =
  /^(([^<>()[\]\\.,;:\s@\"]+(\.[^<>()[\]\\.,;:\s@\"]+)*)|(\".+\"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;

module.exports = (user) => {
  const createUserSchema = joi
    .object({
      first_name: joi.string().required(),
      last_name: joi.string().required(),
      password: joi.string().required(),
      user_name: joi.string().required(),
      email: joi.string().custom((val, helper) => {
        if (email_regex.test(val)) {
          return true;
        }
        return helper.message("Enter Valid Email ID");
      }),
      profile_pic: joi.string(),
      bio: joi.string().max(100),
      website: joi.string(),
    })
    .options({ abortEarly: true });
  return createUserSchema.validate(user);
};
