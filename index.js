var
  express = require('express'),
  app = express(),
  port = 9000;

app
  .use(express.bodyParser())
  .use(express.static(__dirname + '/client/public/'))
  .use(app.router);

app.set('views', __dirname + '../client/public/');
app.engine('html', require('ejs').renderFile);

app.listen(port);

console.log('Web Audio Components client running');
console.log('  Port: ' + port);

module.exports = app;
