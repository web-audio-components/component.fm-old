module.exports = function ( app ) {
  var
    packages = require( './routes/packages' );

  app.get( '/', function ( req, res ) {
    res.render( 'index.html' );
  });

  app.get( '/packages', packages.index );
  app.get( '/packages/:name', packages.show );
  app.get( '/packages/:name/script', packages.script );
  app.get( '/packages/search/:name', packages.search );

  app.use(function ( err, req, res, next ) {
    res.send( err.code || 500, { error: err.message });
  });
};
