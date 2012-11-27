(function () {
  app.views.SearchBar = app.views.View.extend({
    template : Handlebars.template( app.templates.searchBar ),

    initialize: function () {
      var that = this;

      this.triggerQuery = _.debounce(function ( query ) {
        that.trigger( 'query', query );
      }, 200 );

      this.render();
    },

    events: {
      'keyup #search-bar' : 'handleSearch'
    },

    handleSearch: function ( e ) {
      var query = $( e.target ).val();

      this.triggerQuery( query );

      app.indexView.$el.slideUp();
    }

  });
})();
