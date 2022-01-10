const express = require("express");

const router = express.Router();

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

router.get("/username", (req, res) => {
  res.send(req.query);
});

module.exports = router;
