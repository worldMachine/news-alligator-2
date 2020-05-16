const htmlToText = require('html-to-text');
 

function getTextFromHTML (html) {

    let text = htmlToText.fromString(html, {
        wordwrap: 80,
        ignoreHref: true,
        ignoreImage: true

      });
      return text;

}

function getImageFromHTML (html) {
    re = /\ssrc=(?:(?:'([^']*)')|(?:"([^"]*)")|([^\s]*))/i, 
    res = html.match(re),
    src = res[1]||res[2]||res[3]; 

    // console.log("img src: ")
    // console.log(src)

    return src;

}

module.exports = {
    getTextFromHTML,
    getImageFromHTML
}