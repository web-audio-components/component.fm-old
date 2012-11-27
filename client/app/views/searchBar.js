(function () {
  app.views.SearchBar = app.views.View.extend({

    name : 'searchBar',

    initialize : function () {
      var that = this;

      this.triggerQuery = _.debounce(function ( query ) {
        that.trigger( 'query', query );
      }, 200 );

      this.render();
    },

    events : {
      'keyup #search-bar' : 'handleSearch'
    },

    handleSearch : function ( e ) {
      var query = $( e.target ).val();
      query = this.sanitizeQuery( query );

      this.triggerQuery( query );

      app.indexView.$el.slideUp();
    },

    sanitizeQuery : function ( query ) {
      return query.replace( /[^\w ]/g, '' );
    }

  });
})();
