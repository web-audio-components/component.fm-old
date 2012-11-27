(function () {
  app.views.SearchResults = app.views.View.extend({

    name : 'searchResults',

    events : {
      'click a' : 'handlePackageSelect'
    },

    initialize: function ( options ) {
      var that = this;
      this.search = options.search;
      this.packages = new app.collections.Packages();

      // Initialized filtered list with a reference to all packages
      this.filteredPackages = this.packages;

      this.search.on( 'query', this.filterPackages, this );

      this.packages.fetch({
        success : function () {
          that.render();
        }
      });
    },

    filterPackages : function ( query ) {
      var filteredArray;

      // If query exists, filter via it
      if ( query ) {
     
        filteredArray = this.packages.filter(function ( pkg ) {
          return pkg.matches( query );
        });

        this.filteredPackages = new app.collections.Packages( filteredArray );

      // Otherwise, just use all packages
      } else {
        this.filteredPackages = this.packages;
      }

      this.query = query;
      this.render();
    },

    getRenderData : function () {
      return {
        packages : this.filteredPackages.toJSON(),
        query : this.query
      };
    },

    handlePackageSelect : function ( e ) {
      var name = $( e.target ).data( 'name' );
      this.trigger( 'select:package', name );
    }
  });
})();
