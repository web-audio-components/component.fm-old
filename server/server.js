var
  express = require('express'),
  config = require('./config'),
  app = express();

app
  .use(express.bodyParser())
  .use(express.static(__dirname + '/../client/public/'))
  .use(app.router);

app.set('views', __dirname + '../client/public/');
app.engine('html', require('ejs').renderFile);

require('./router')(app);

app.listen(config.port);

console.log('Web Audio Components client running on ' + config.port);

module.exports = app;
