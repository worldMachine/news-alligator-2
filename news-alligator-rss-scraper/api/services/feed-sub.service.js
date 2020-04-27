const FeedSub = require('feedsub');
const articleService = require('./article.service');
const htmlService = require('./html.service')

console.log("feedsub is in")
let reader = new FeedSub('https://www.digitaltrends.com/feed/', {
  interval: 10 ,// Check feed every 10 minutes.
  emitOnStart: true,
  autoStart: true
});
 
reader.on('item', (item) => {
//   console.log('Got article:');
//   console.dir(item);

  let article = {}

  article.title = item.title;
  article.url = item.link;
  article.imageUrl = item.enclosure.url;
  article.publisher = "Digital Trends";

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
    article.category = item.category;
  }

// console.log(article.title)
//   console.dir(article)

  let addedArticle = articleService.addArticleJson(article)
//   let newAddedArticle = articleService.addArticle(article.title, article.url, article.imageUrl)

});

let reader2 = new FeedSub('http://feeds.arstechnica.com/arstechnica/index', {
  interval: 10 ,// Check feed every 10 minutes.
  emitOnStart: true,
  autoStart: true
});
 
reader2.on('item', (item) => {
  console.log('Got article:');
//   console.dir(item);

  let article = {}

  article.title = item.title;
  article.url = item.link;
//   article.imageUrl = item.enclosure.url;
  article.publisher = "Ars Technica";

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
    article.category = item.category;
  }

  let html = item['content:encoded'];

  let imgUrl = htmlService.getImageFromHTML(html);

  if (imgUrl) {
      article.imageUrl = imgUrl;
  }

  let text = htmlService.getTextFromHTML(html);

//   console.log("html text: ")
//   console.log(text)
//   console.log("end of html text...X")

  if (text) {
      article.text = text;
  }

// console.log(article.title)
//   console.dir(article)

  let addedArticle = articleService.addArticleJson(article)

});
 
// reader.start();
