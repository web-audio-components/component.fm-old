(function () {
  app.views.SearchBar = app.views.View.extend({
    template : Handlebars.template( app.templates.searchBar ),
    
    initialize: function () {
    },

    events: {
      'keyup #search-bar' : 'handleSearch'
    },

    handleSearch: function ( e ) {
      var query = $( e.target ).val();
      Backbone.history.navigate( 'packages/search/' + query, true );
      this.trigger( 'query', query );
    }
  });
})();
