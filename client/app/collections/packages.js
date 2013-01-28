(function () {
  app.collections.Packages = Backbone.Collection.extend({
    model: app.models.Package,

    url: app.config.apiURL + 'components',

    initialize: function () {

    }

  });
})();
