const jwt = require("jsonwebtoken");

const response = require("../utils/responses");

exports.isLoggedIn = (req, res, next) => {
  try {
    //console.log(req.cookies);
    //console.log(req.query);
    let token = req.cookies.token;
    if (!token) {
      return response.badRequestResponse(res, "No Token.");
    }
    jwt.verify(token, process.env.SECRET, (err, decoded) => {
      if (err) {
        return response.unauthorizedResponse(res, "User is not verified.");
      }
      req._id = decoded.id;
      next();
      return;
    });
  } catch (error) {
    console.log(error);
    return response.serverErrorResponse(res, "Auth Server Error.");
  }
};

exports.isNotLoggedIn = (req, res, next) => {
  try {
    let token = req.cookies.token;
    if (token) {
      return response.badRequestResponse(res, "User Already Logged In.");
    }
    next();
    return;
  } catch (error) {
    return response.serverErrorResponse(res, "Server Error.");
  }
};
