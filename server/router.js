var
  app = require('./server'),
  config = require('./config');
  landingPage = config.env === 'production'
    ? 'index.html'
    : 'dev.html';

module.exports = function () {
  app.get('/', function (req, res) {
    res.render(landingPage);
  });
};
