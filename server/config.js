var config = {
  production : {
    port : 9000,
    serviceURL : 'http://wapm-service.jit.su'
  },
  development : {
    port : 9000,
    serviceURL : 'http://wapm-service.jit.su'
    //serviceURL : 'http://localhost:8000'
  },
  test : {
    port : 9000
  } 
};

module.exports = config[ process.env.NODE_ENV || 'development' ];
