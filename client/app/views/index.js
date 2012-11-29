(function () {
  app.views.Index = app.views.View.extend({

    name : 'index',

    className: 'index-view',
    
    initialize: function ( options ) {
      this.search = options.search;
      this.packages = options.packages;

      this.search.on( 'query', this.hide, this );
      this.packages.on( 'select', this.hide, this );
      this.render();
    }

  });

})();
