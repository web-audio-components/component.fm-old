(function () {
  app.collections.Packages = Backbone.Collection.extend({
    model : app.models.Package,

    url : '/packages',

    initialize: function () {

    }
  });
})();
