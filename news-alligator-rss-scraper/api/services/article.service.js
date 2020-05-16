const Article = require("../models/article.model");
const htmlService = require("./html.service");
const { isUndefined } = require("../util/errorUtilities");

const addArticle = async (reqTitle, reqUrl, reqImgUrl) => {
  if (isUndefined(reqTitle, reqUrl, reqImgUrl)) {
    return;
  }

  let article = new Article({
    title: reqTitle,
    link: reqUrl,
    imageLink: reqImgUrl,
  });

  // save product to DB
  return await article.save();
};

const addArticleJson = async (articleJson) => {
  // console.log("adding article to db")

  if (
    isUndefined(
      articleJson.title,
      articleJson.link,
      articleJson.imageLink,
      articleJson.guid
    )
  ) {
    return;
  }

  try {
    if ((await Article.countDocuments({ guid: articleJson.guid })) > 0) {
      // console.log("url exists")
      return;
    }

    let article = new Article(articleJson);

    // save product to DB
    await article.save();
  } catch (err) {
    console.log(err);
    return;
  }
};

const formatArticle = async (item, feedTitle) => {
  let article = {};

  article.publisher = feedTitle;

  if (item.title) {
    article.title = item.title;
  } else {
    return;
  }

  if (item.link) {
    article.link = item.link;
  } else {
    return;
  }

  if (item.guid) {
    article.guid = item.guid;
  } else if (item.id) {
    article.guid = item.id;
  } else return;

  if (item.creator) {
    article.author = item.creator;
  }

  if (item.isoDate) {
    article.pubDate = item.isoDate;
  }

  if (item.categories) {
    article.categories = item.categories;
  }

  if (item.content) {
    article.description = item.content;
  }

  if (item.enclosure && item.enclosure.url) {
    article.imageLink = item.enclosure.url;
  } else if (item["media:thumbnail"]) {
    article.imageLink = item["media:thumbnail"].$.url;
  } else if (item["content:encoded"]) {
    let html = item["content:encoded"];
    let imgLink = htmlService.getImageFromHTML(html);

    if (imgLink) {
      article.imageLink = imgLink;
    }

    // let text = htmlService.getTextFromHTML(html);

    //   console.log("html text: ")
    //   console.log(text)
    //   console.log("end of html text...X")

    // if (text) {
    //     article.body = text;
    // }
  } else if (item.contentSnippet) {
    // article.body = item.contentSnippet;

    if (item.content) {
      let html = item.content;
      let imgLink = htmlService.getImageFromHTML(html);

      if (imgLink) {
        article.imageLink = imgLink;
        article.description = item.content;
      }
    }
  }

  return article;
};

const findByGuid = async (reqUrl) => {
  return await Article.findOne({ guid: reqUrl });
};

module.exports = {
  addArticle,
  addArticleJson,
  formatArticle,
  findByGuid,
};
