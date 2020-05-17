const Article = require("../models/article.model");

const findAll = async () => {
  return await Article.find();
};

const findRecent = async (numArticles, pageNum) => {
  let skipNum = pageNum * numArticles;
  return Article.find({}, null, {
    limit: numArticles,
    skip: skipNum,
    sort: { pubDate: -1 },
  });
};

const findBeforeDate = async (numArticles, date) => {
  return Article.find({ pubDate: { $lt: date } }, null, {
    limit: numArticles,
    sort: { pubDate: -1 },
  });
};

module.exports = {
  findAll,
  findRecent,
  findBeforeDate,
};
