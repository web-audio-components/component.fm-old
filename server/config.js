var config = {
  production : {
    db : {
      URL : process.env['wapm-app-mongodb-url']
    },
    port : 80,
    serviceURL : 'http://wapm-service.jit.su'
  },
  development : {
    db : {
      URL : 'mongodb://localhost:27017/wapm-app'
    },
    port : 9000,
    serviceURL : 'http://localhost:8000'
  },
  test : {
    db : {
      URL : 'mongodb://localhost:27017/wapm-app-test'
    },
    port : 9000
  } 
};

module.exports = config[ process.env.NODE_ENV || 'development' ];
