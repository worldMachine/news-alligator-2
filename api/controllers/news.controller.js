const newsService = require("../services/news.service");

const { sendError, isUndefined } = require("../util/errorUtilities");

//Get products based on user's contacts interests
const getAll = async (req, res) => {
  // const userId = req.params.userId;

  // if (isUndefined(userId, contactId)) {
  //   return sendError(res, 400, "Invalid Parameters");
  // }

  try {
    const newsArticles = await newsService.findAll();
    // Get User
    // const contact = await contactService.findById(userId, contactId);

    // Get all interests based on Contact Interest Ids
    // const interests = await interestService.findInterests(contact.interests);

    // find all products based on product ids
    // let products = await productService.findByIds(productIds);

    // return products
    res.status(200).json(newsArticles);
  } catch (err) {
    res.status(500).send(err);
  }
};

//Get products based on user's contacts interests
const getRecent = async (req, res) => {
  const pageNum = req.query.page;
  console.log("pageNm: ", pageNum);

  try {
    const newsArticles = await newsService.findRecent(20, pageNum);

    res.status(200).json(newsArticles);
  } catch (err) {
    res.status(500).send(err);
  }
};

//Get products based on user's contacts interests
const getBeforeDate = async (req, res) => {
  const reqDate = req.query.date;

  if (isUndefined(reqDate)) return sendError(res, 400, "Invalid Parameters");

  console.log("in get before date...");

  console.log("date: ", reqDate);

  try {
    const newsArticles = await newsService.findBeforeDate(20, reqDate);

    res.status(200).json(newsArticles);
  } catch (err) {
    res.status(500).send(err);
  }
};

module.exports = {
  getAll,
  getRecent,
  getBeforeDate,
};
