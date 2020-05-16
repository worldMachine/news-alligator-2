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

module.exports = {
  findAll,
  findRecent,
};
