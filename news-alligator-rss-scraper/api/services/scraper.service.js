const axios = require('axios');
const cheerio = require('cheerio');


async function scrapeWebsiteArticle(url) {
    // const url = 'https://www.digitaltrends.com/photography/camera-resolution-explained/';


    return axios.get(url)
        .then(response => {
            // console.log(response.data)
            const $ = cheerio.load(response.data);

            let articleBody = $('article').html();

            // console.log("article in scraper")
            // console.log(article)


            return articleBody;


        })
        .catch(error => {
            console.log(error)
            return '';
        })
}


module.exports = {
    scrapeWebsiteArticle
}