let Parser = require('rss-parser');
// let parser = new Parser();

let parser = new Parser({
  customFields: {

    item: ['media:thumbnail']
  }
});

const articleService = require('./article.service')

/**
 * @function: parse xml rss feed 
 * @param {*} String url 
 * @return: info from feed tbd...
 */
const parseRssFeed = async (url) => {
    let feed = await parser.parseURL(url);
    console.log(feed.title);

    return feed;
   
    // feed.items.forEach(item => {
    //   console.log(item.title + ':' + item.link)
    // });
};


const formatDigitalTrendsArticle = async (item) => {

  let article = {}

  article.title = item.title;
  article.url = item.link;
  article.imageUrl = item.enclosure.url;
  article.publisher = item.publisher;

  if (item['dc:creator']) {
    article.author = item['dc:creator'];
  }
  if (item.description) {
    article.description = item.description;
  }
  if (item.pubdate) {
    article.pubDate = item.pubdate;
  }
  if (item.category) {
    article.categories = item.categories;
  }

// console.log(article.title)
//   console.dir(article)

  await articleService.addArticleJson(article)
};

module.exports = {
    parseRssFeed
}