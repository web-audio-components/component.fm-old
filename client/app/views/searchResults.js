(function () {
  app.views.SearchResults = app.views.View.extend({

    name : 'searchResults',

    className : 'search-results-view',

    events : {
      'click a' : 'handlePackageSelect'
    },

    initialize: function ( options ) {
      var that = this;
      this.search = options.search;
      this.packages = options.packages;

      // Initialized filtered list with a reference to all packages
      this.filteredPackages = this.packages;

      this.search.on( 'query', this.onQuery, this );
      this.packages.on( 'select', this.onSelect, this );

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

      app.router.navigate( '/package/search/' + query );
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
      var
        name = $( e.target ).data( 'name' ),
        pkg = this.packages.where({ name: name })[ 0 ];

      e.preventDefault();
      this.packages.trigger( 'select', pkg );
    },

    onQuery : function ( query ) {
      this.show();
      this.filterPackages( query );
    },

    // handlePackageSelect triggers this event on packages
    // and onSelect subsequently hides the element if a different
    // source triggers the select package event
    onSelect : function () {
      this.hide();
    }

  });
})();
