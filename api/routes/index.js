const router = require("express").Router();

const newsRoutes = require("./news.route");

router.use("/news", newsRoutes);

module.exports = router;
