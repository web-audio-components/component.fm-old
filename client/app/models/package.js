(function () {
  app.models.Package = Backbone.Model.extend({ 
    
    initialize : function () {

    },

    // TODO super inefficient search -- probably should cut down
    // on search scope
    matches : function ( query ) {
      var
        params = query.split(' '),
        valid = false,
        pkg = this;

      params = _.map( params, function ( param ) {
        return new RegExp( param, 'gi' );
      });

      _.each( params, function ( param ) {
        if (
          _.any( pkg.get('keywords') || [], function ( keyword ) {
            return keyword.match( param );
          }) ||
          pkg.get('description').match( param ) ||
          pkg.get('name').match( param )
        ) {
          valid = true;
        }
      });

      return valid;
    }
  });
})();
