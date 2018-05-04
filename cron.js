var request = require('request');
var CronJob = require('cron').CronJob;

// Setup DT variables for API
var TENANT_ID = "";
var DT_SAAS = ""; // can be used later for URL manipulation
var TENANT_TOKEN = "";

var job = new CronJob({
  cronTime: '0 0 */2 * *', 
  onTick: function() {
      /* 
       * This job will be run at 00:00 every 2nd day (48 hours)
       */
    console.log('test cron');
  },
  start: false,
  timeZone: 'America/Los_Angeles'
});
job.start();