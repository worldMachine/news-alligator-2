const router = require("express").Router({ mergeParams: true });
const newsController = require("../controllers/news.controller");

// endpoint: /api/news/all

router.get("/all", newsController.getAll);

router.get("/recent", newsController.getRecent);

router.get("/beforeDate", newsController.getBeforeDate);

module.exports = router;
