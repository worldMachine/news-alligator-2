let Parser = require('rss-parser');
let parser = new Parser();

/**
 * @function: parse xml rss feed 
 * @param {*} String url 
 * @return: info from feed tbd...
 */
const parseRssFeed = async (url) => {
    let feed = await parser.parseURL(url);
    console.log(feed.title);
   
    feed.items.forEach(item => {
      console.log(item.title + ':' + item.link)
    });
};

module.exports = {
    parseRssFeed
}