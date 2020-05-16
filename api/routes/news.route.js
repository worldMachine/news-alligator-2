const router = require("express").Router({ mergeParams: true });
const newsController = require("../controllers/news.controller");

// endpoint: /api/news/all

router.get("/all", newsController.getAll);

router.get("/recent", newsController.getRecent);

module.exports = router;
