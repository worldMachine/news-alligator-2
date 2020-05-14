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

module.exports = {
  getAll,
};
