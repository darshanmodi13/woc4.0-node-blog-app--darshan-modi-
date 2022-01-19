const express = require("express");
const auth = require("../middleware/auth.middleware");

//controller
const controller = require("../controllers/category.controller");

const router = express.Router();

router.use((req, res, next) => {
  res.header(
    "Access-Control-Allow-Headers",
    "x-access-token, Origin, Content-Type, Accept"
  );
  next();
});

router.get("/list", [auth.isLoggedIn], controller.list);

module.exports = router;
