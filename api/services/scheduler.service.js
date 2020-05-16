var schedule = require('node-schedule');
// https://www.npmjs.com/package/node-schedule
var rssParserService = require('./rss-parser.service');


var rule = new schedule.RecurrenceRule();

rule.hour = 23;
rule.minute = 04;


/**
 * @function - cron job to run at specific hour/minute based on recurrence rule - trigger rss parser service
 * @param {RecurrenceRule} rule - node-schedlue package recurrence rule to specify date and time of cron job.
 * @returns - No return - triggers rss parser service
 */
var cronJob = schedule.scheduleJob(rule, async function() {

    console.log("++++++++++++++++++++ CRON JOB START at: "+rule+" ++++++++++++++++++++++ " );

    let url = 'https://www.digitaltrends.com/feed/'

    console.log("parsing...")
    await rssParserService.parseRssFeed(url)
    console.log("finished parsing rss feed")


})