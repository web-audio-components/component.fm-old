(function () {
  app.views.SearchBar = app.views.View.extend({

    name : 'searchBar',

    className : 'search-bar-view',

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
    },

    sanitizeQuery : function ( query ) {
      return query.replace( /[^\w ]/g, '' );
    },

    render : function () {
      this.template = this.template ||
        Handlebars.template(app.templates[this.name]);
      $('.search-bar')
        .append(this.$el.html(this.template()));
    }

  });
})();
