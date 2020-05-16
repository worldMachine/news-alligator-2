const htmlToText = require('html-to-text');
 

function getTextFromHTML (html) {

    let text = htmlToText.fromString(html, {
        wordwrap: 80,
        // ignoreHref: true,
        // ignoreImage: true

      });

      var lines = text.split("\n");   // split all lines into array

    //   lines = lines.slice(2)
      var rest = lines.join("\n");

    //   console.log('----------------article----------------')
    //   console.log(rest)
      return rest;

}

function getImageFromHTML (html) {
    re = /\ssrc=(?:(?:'([^']*)')|(?:"([^"]*)")|([^\s]*))/i;
    res = html.match(re);
    if (res) {
        src = res[1]||res[2]||res[3]; 

        // console.log("img src: ")
        // console.log(src)
    
        return src;
    }
    else {
        return undefined;
    }
    

}

module.exports = {
    getTextFromHTML,
    getImageFromHTML
}