const Eureka = require('eureka-js-client').Eureka;

const client = new Eureka({
  instance: {
    app: 'intelipathscraping',
    hostName: 'localhost', // change to your server's IP or domain name
    ipAddr: '127.0.0.1',
    port: {
      '$': 8000,
      '@enabled': true,
    },
    vipAddress: 'intelipathscraping',
    dataCenterInfo: {
      '@class': 'com.netflix.appinfo.InstanceInfo$DefaultDataCenterInfo',
      name: 'MyOwn',
    },
    registerWithEureka: true,
    fetchRegistry: true,
  },
  eureka: {
    host: 'http://localhost:8761', // provide the address of your Eureka server
    port: 8761, // default Eureka server port
    servicePath: '/eureka/apps/',
  },
});

module.exports = client;

