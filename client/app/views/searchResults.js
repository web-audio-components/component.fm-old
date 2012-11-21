(function () {
  app.views.SearchResults = app.views.View.extend({
    template : Handlebars.template( app.templates.searchResults ),
  
    events : {
      'click a' : 'handlePackageSelect'
    },

    initialize: function ( options ) {
      this.search = options.search;
      this.packages = new app.collections.Packages();
      this.packages.on( 'fetched', this.preRender, this );
      this.search.on( 'query', this.query, this );

      this.packages.fetch();
    },

    query : function ( query ) {
      var packages = this.packages;
      this.packages.query = query;
      this.packages.url = '/packages/search/' + query;
      this.packages.fetch({
        success: function ( collection ) {
          packages.trigger( 'fetched' );
        }
      });
    },

    preRender : function () {
      this.render({
        packages : this.packages.toJSON(),
        query : this.packages.query
      });
    },

    handlePackageSelect : function ( e ) {
      var name = $( e.target ).data( 'name' );
      this.trigger( 'select:package', name );
    }
  });
})();
