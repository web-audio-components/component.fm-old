(function () {
  app.views.SearchResults = app.views.View.extend({
    template : Handlebars.template( app.templates.searchResults ),
    
    initialize: function ( options ) {
      this.search = options.search;
      this.packages = new app.collections.Packages();
      this.packages.on( 'fetch', this.preRender, this );
      this.search.on( 'query', this.query, this );

      this.packages.fetch();
    },

    query : function ( query ) {
              console.log(this.packages);
      this.packages.url = '/packages/search/' + query;
      this.packages.fetch();
    },

    preRender : function () {
                  console.log(this.packages.toJSON());
      this.render( this.packages.toJSON() );
    }
  });
})();
