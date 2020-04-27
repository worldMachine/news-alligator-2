const Article = require('../models/article.model');
const {isUndefined} = require('../util/errorUtilities');

const addArticle = async (reqTitle, reqUrl, reqImgUrl) => {

    if (isUndefined(reqTitle, reqUrl, reqImgUrl)) {
        return;
    }

    let article = new Article({
        title: reqTitle,
        url: reqUrl,
        imageUrl: reqImgUrl
    });

    // save product to DB
    return await article.save();
}

const addArticleJson = async (articleJson) => {
    // console.log("adding article to db")

    if (isUndefined(articleJson.title, articleJson.url, articleJson.imageUrl)) {
        return;
    }

    try {

        if (await Article.count({url: articleJson.url}) > 0) {
            // console.log("url exists")
            return;
        }

        let article = new Article(articleJson);

        // save product to DB
        return await article.save();
    }
    catch (err) {
        console.log(err)
        return;
    }

    
}

const findByUrl = async reqUrl => {
    return await Article.find({ url: reqUrl });
} 

module.exports = {
    addArticle,
    addArticleJson
}