var request = require('request');
request.post(
      'https://dynatrace-paas.appl.kp.org/e/183e7a38-c2ef-43c6-a918-3f496f52472b/api/v1/entity/infrastructure/custom/DataPowerLoadBalancerQA?Api-Token=NDN3P-WhSi6ZQAHfe9jaO',
      { json: {
        "displayName" : "F5 Load Balancer to DataPower QA",
        "ipAddresses" : ["172.20.49.21"],
        "listenPorts" : ["9999"],
        "type" : "F5-LoadBalancer",
        "favicon" : "http://assets.dynatrace.com/global/icons/f5.png",
        "configUrl" : "http://172.20.49.21",
        "tags": ["F5", "DataPower"],
        "properties" : { "environment" : "QA" }
      } },
      function (error, response, body) {
          if (!error && response.statusCode == 200) {
              console.log(body)
          }
      }
);