var config = {
  production : {
    port : 9000,
    serviceURL : 'http://web-audio-components-api.jit.su'
  },
  development : {
    port : 9000,
    serviceURL : 'http://localhost:9000'
  }
};

module.exports = config[ process.env.NODE_ENV || 'development' ];
