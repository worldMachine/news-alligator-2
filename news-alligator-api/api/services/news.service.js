const Article = require("../models/article.model");

const findAll = () => {
  return Article.find();
};

module.exports = {
  findAll,
};
