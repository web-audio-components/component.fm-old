module.exports = function ( o ) {
  var
    mongoose = o.mongoose,
    db = o.db;

  return {
    'Packages' : db.model( 'Packages', require( './models/Packages' )( mongoose ))
  }
}
