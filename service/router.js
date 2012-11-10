module.exports = function ( app ) {
  var
    packages = require( './routes/packages' );

  app.get( '/packages', packages.index );
  app.post( '/packages', packages.create );
  app.get( '/packages/:name', packages.show );
  app.get( '/packages/search/:name', packages.search );

};
