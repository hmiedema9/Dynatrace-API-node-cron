var CronJob = require('cron').CronJob;
var job = new CronJob({
  cronTime: '* * * * *',
  onTick: function() {
    console.log('test cron');
  },
  start: false,
  timeZone: 'America/Los_Angeles'
});
job.start();