(function () {
  app.views.Package = app.views.View.extend({

    name : 'package',

    className : 'package-view',

    events : {
      'click .activate-player a' : 'handleActivateDemo'
    },

    initialize : function ( options ) {
      this.packages = options.packages;

      this.packages.on( 'select', this.setPackage, this );
    },

    setPackage : function ( pkg ) {
      app.router.navigate( '/package/' + pkg.get('name'));
      this.package = pkg;
      this.render();
    },

    getRenderData : function () {
      var json = this.package.toJSON();
      json.updated = this.formatDate( json.updated );
      json.keywords = this.formatKeywords( json.keywords );
      console.log(json.keywords);
      return json;
    },

    formatDate : function ( date ) {
      return moment( date ).format( 'MMMM Do YYYY' );
    },

    formatKeywords : function ( keywords ) {
      return ( keywords || [] ).join( ', ' );
    },

    handleActivateDemo : function ( e ) {
      e.preventDefault();
      this.trigger( 'activate:demo', this.package );
    }

  });
})();
