
/**
 * @function - Takes in 2 dates and returns number of days between them.
 * @param {Date} d1 - first date
 * @param {Date} d2 - second date 
 * @returns {Number} number of days between the dates
 */
module.exports.numDaysBetween = function (d1, d2) { 
    var diff = Math.abs(d1.getTime() - d2.getTime());
    return diff / (1000 * 60 * 60 * 24);
}

/**
 * @function - Takes in a date and returns another one with the year incremented.
 * @param {String} date - the date from the occaison. This should be string 
 * @returns {String} updated date
 */
module.exports.incrementYear = function (date) {
    let endIndex = date.indexOf('-');
    let year = parseInt(date.substring(0, endIndex));
    let newYear = year + 1;
    date = date.replace(year, newYear);
    return date;
}

/**
 * @function - adds a give number of days to a date 
 * @param {Date} date - given date
 * @param {Number} numDays - number of days to add to the date 
 * @returns {Date} new date that is numDays after given date
 */
module.exports.addDays = function(date, numDays) {
    let laterDate = new Date();
    laterDate.setDate(date.getDate() + numDays);
    return laterDate;
}
