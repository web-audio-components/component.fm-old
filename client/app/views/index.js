(function () {
  app.views.Index = app.views.View.extend({
    template: Handlebars.template( app.templates.index ),
    className: 'index-view',
    
    initialize: function () {
      this.render();
    },

    events: {
    }
  });
})();
