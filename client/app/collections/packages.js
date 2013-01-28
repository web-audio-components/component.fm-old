(function () {
  app.collections.Packages = Backbone.Collection.extend({
    model : app.models.Package,

    url : 'http://web-audio-components-api.jit.su/components',

    initialize: function () {

    }

  });
})();
