(function () {
  app.views.SearchResults = app.views.View.extend({
    template : Handlebars.template( app.templates.searchResults ),
    
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
                  console.log(this.packages.toJSON());
      this.render({
        packages : this.packages.toJSON(),
        query : this.packages.query
      });
    }
  });
})();
