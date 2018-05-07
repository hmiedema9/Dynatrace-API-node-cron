//Request library being used currently for making POST requests for custom device API
var request = require('request');
// 'cron' npm package being used for recurring jobs - https://www.npmjs.com/package/cron
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
    request.post(
      'https://dynatrace-paas.appl.kp.org/e/'+ TENANT_ID + '/api/v1/entity/infrastructure/custom/DataPowerLoadBalancerQA?Api-Token=' + TENANT_TOKEN,
      { json: {
        "displayName" : "F5 Load Balancer to DataPower QA",
        "ipAddresses" : ["172.20.49.21"],
        "listenPorts" : ["9999"],
        "type" : "F5-LoadBalancer",
        "favicon" : "http://assets.dynatrace.com/global/icons/f5.png",
        "configUrl" : "http://172.20.49.21",
        "tags": ["F5", "DataPower"],
        "properties" : { "prop1" : "propvalue" }
      } },
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