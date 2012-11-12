var
  express = require( 'express' ),
  mongoose = require( 'mongoose' ),
  reqExtend = require( 'request-extend' ),
  config = require( './config' ),
  app = express();

//var
//  db = mongoose.connect( config.db.URL ),
//  models = require( './models' )({ mongoose: mongoose, db: db });

app
  .use( express.bodyParser() )
//  .use( reqExtend( 'models', models ))
  .use( reqExtend( 'config', config ))
  .use( express.static( __dirname + '/../client/public/' ))
  .use( app.router );

app.set( 'views', __dirname + '../client/public/' );
app.engine( 'html', require('ejs').renderFile );

require( './router' )( app );

app.listen( config.port );

console.log( 'WAPM app listening on port ' + config.port );

module.exports = app;
