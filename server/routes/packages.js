var request = require( 'request' );
var url = require( '../config' ).serviceURL;

// GET /packages
exports.index = function ( req, res, next ) {
  request.get({ uri: url + '/packages', json: true }, function ( err, response, body ) {
    if ( !err ) {
      res.json( body );
    } else {
      next( err );
    }
  });
};

// GET /packages/:name
exports.show = function ( req, res, next ) {
  request.get({ uri: url + '/packages/' + req.params.name, json: true }, function ( err, response, body ) {
    if ( !err ) {
      res.json( body );
    } else {
      next( err );
    }
  });
};

// GET /packages/search/:name
exports.search = function ( req, res, next ) {
  request.get({ uri: url + '/packages/search/' + req.params.name, json: true }, function ( err, response, body ) {
    if ( !err ) {
      res.json( body );
    } else {
      next( err );
    }
  });
};

// TODO this really sucks, should be stored on own server, and not have to query twice, and github at all
// GET /packages/:name/script
exports.script = function ( req, res, next ) {
  request.get({ uri: url + '/packages/' + req.params.name + '/script.js' }, function ( err, response, body ) {
    if ( !err ) {
      res.send( body );
    } else {
      next( err );
    }
  });
};
