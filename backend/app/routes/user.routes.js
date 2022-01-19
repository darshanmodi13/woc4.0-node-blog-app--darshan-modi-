const express = require("express");

const router = express.Router();

//Middleware
const auth = require("../middleware/auth.middleware");

//controller
const controller = require("../controllers/user.controller");

router.use((req, res, next) => {
  res.header(
    "Access-Control-Allow-Headers",
    "x-access-token, Origin, Content-Type, Accept"
  );
  next();
});

router.get("/", (req, res) => {
  res.send("User Routes");
});

router.get("/list", [auth.isLoggedIn], controller.list);

router.post("/upload", [auth.isLoggedIn], controller.upload);

router.get("/:id", [auth.isLoggedIn], controller.getUser);

module.exports = router;
