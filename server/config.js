var config = {
  production : {
    port : 9000,
    serviceURL : 'http://wapm-service.jit.su',
    componentsURL : 'http://50.116.26.197/components/all'
  },
  development : {
    port : 9000,
    serviceURL : 'http://localhost:8000',
    componentsURL : 'http://50.116.26.197/components/all'
  },
  test : {
    port : 9000,
    componentsURL : 'http://50.116.26.197/components/all'
  } 
};

module.exports = config[ process.env.NODE_ENV || 'development' ];
