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
      this.trigger( 'query', query );
      app.indexView.$el.slideUp();
    }
  });
})();
