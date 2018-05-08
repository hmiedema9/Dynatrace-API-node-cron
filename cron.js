//Request library being used currently for making POST requests for custom device API
var request = require('request');
// 'cron' npm package being used for recurring jobs - https://www.npmjs.com/package/cron
var CronJob = require('cron').CronJob;
var fs = require("fs");

// Setup DT variables for API - grab from env variable needs to be configured
var TENANT_ID = process.env.TENANT_ID;
var DT_SAAS = ""; // can be used later for URL manipulation
var TENANT_TOKEN = process.env.TENANT_TOKEN;
var DEVICE_DETAILS = fs.readFileSync("details.json");

var job = new CronJob({
  cronTime: '0 0 */2 * *', 
  onTick: function() {
      /* 
       * This job will be run at 00:00 every 2nd day (48 hours)
       */
    request.post(
      'https://dynatrace-paas.appl.kp.org/e/'+ TENANT_ID + '/api/v1/entity/infrastructure/custom/DataPowerLoadBalancerQA?Api-Token=' + TENANT_TOKEN,
      { json: DEVICE_DETAILS },
      function (error, response, body) {
          if (!error && response.statusCode == 200) {
              console.log(body)
          }
      }
    );
  },
  start: false,
  timeZone: 'America/Los_Angeles'
});
job.start();