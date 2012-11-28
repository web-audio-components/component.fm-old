var
  express = require( 'express' ),
  reqExtend = require( 'request-extend' ),
  config = require( './config' ),
  app = express();

app
  .use( express.bodyParser() )
  .use( reqExtend( 'config', config ))
  .use( express.static( __dirname + '/../client/public/' ))
  .use( app.router );

app.set( 'views', __dirname + '../client/public/' );
app.engine( 'html', require('ejs').renderFile );

require( './router' )( app );

app.listen( config.port );

console.log( 'WAPM app listening on port ' + config.port );

module.exports = app;
