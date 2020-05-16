// var schedule = require('node-schedule');
// https://www.npmjs.com/package/node-schedule

var cron = require("cron");
var rssParserService = require("./rss-parser.service");
const htmlService = require("./html.service");
const articleService = require("./article.service");
const scraperService = require("./scraper.service");

/**
 * @function - cron job to run at specific hour/minute based on recurrence rule - trigger rss parser service
 * @param {RecurrenceRule} rule - node-schedlue package recurrence rule to specify date and time of cron job.
 * @returns - No return - triggers rss parser service
 */

// console.log('Before cron job instantiation');
const job = new cron.CronJob("0 */2 * * * *", async function () {
  const d = new Date();
  console.log("Every Fifth Minute:", d);

  let sources = [
    {
      name: "Digital Trends",
      link: "https://www.digitaltrends.com/feed/",
      pubId: 0,
    },
    {
      name: "Ars Technica",
      link: "http://feeds.arstechnica.com/arstechnica/index",
      pubId: 1,
    },
    {
      name: "The Verge",
      link: "https://www.theverge.com/rss/index.xml",
      pubId: 2,
    },
    { name: "Wired", link: "https://www.wired.com/feed/rss", pubId: 3 },
    {
      name: "TechCrunch",
      link: "http://feeds.feedburner.com/TechCrunch/",
      pubId: 4,
    },
    { name: "CNET", link: "https://www.cnet.com/rss/all/", pubId: 5 },
    {
      name: "The Next Web",
      link: "http://feeds2.feedburner.com/thenextweb",
      pubId: 6,
    },
    // {
    //   name: "Hacker Noon",
    //   link: "https://hackernoon.com/feed?ref=hackernoon.com",
    // },
  ];

  //   let url = "https://www.digitaltrends.com/feed/";
  //   let url2 = "http://feeds.arstechnica.com/arstechnica/index";
  //   let url3 = "https://www.theverge.com/rss/index.xml";
  //   let url4 = "https://www.wired.com/feed/rss";

  //   let feedLinks = [url, url2, url3, url4];

  for (source of sources) {
    let link = source.link;
    console.log("parsing...", source.name, link);
    let feed = await rssParserService.parseRssFeed(link);
    for (item of feed.items) {
      if (source.pubId == 6) {
        console.log(item);
      }
      let article = await articleService.formatArticle(item, source.name);
      let candidateArticle = await articleService.findByGuid(article.guid);
      if (candidateArticle) {
        console.log("article exists");
        break;
      }
      let articleBody = await scraperService.scrapeWebsiteArticle(article.link);
      articleBody = await htmlService.getTextFromHTML(articleBody);
      article.body = articleBody;
      article.publisher = source.name;
      article.publisherId = source.pubId;
      console.log("article: ");
      console.log(article);
      articleService.addArticleJson(article);
    }
  }

  console.log("finished saving articles.");

  // Test New Feeds:

  //   let testLink = "http://feeds.feedburner.com/TechCrunch/";

  //   let feed = await rssParserService.parseRssFeed(testLink);

  //   console.log("TESTING FEED: ", feed.title);
  //   for (item of feed.items) {
  //     // console.dir(item)
  //     // console.log(item.title)
  //     // console.log(item['media:thumbnail'].$.url)
  //     //   let article = await articleService.formatArticle(item, feed.title);
  //     //   console.log(article)

  //     console.dir(item);
  //   }

  //   //   let art = await scraperService.scrapeWebsiteArticle('https://www.wired.com/gallery/best-android-phones/');

  //   //   https://www.digitaltrends.com/dtdeals/best-apple-deals/

  //   art = await htmlService.getTextFromHTML(art);

  //   console.log(art);
  //   console.log("got it");
});
console.log("Cron Job Instantiated");
job.start();
