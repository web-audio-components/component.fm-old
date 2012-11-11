(function () {
  var
    IndexView = app.views.index,
    SearchView = app.views.search,
    PackageView = app.views.package,
    AboutView = app.views.about;

  var Router = Backbone.Router.extend({
    routes : {
      '' : 'index',
      'packages/search/:name' : 'search',
      'packages/:package' : 'package',
      'about' : 'about'
    },

    index : function () {
      $('#content > div').hide();
      app.indexView.$el.show();
      app.searchBarView.$el.show();
    }
  });

  app.router = new Router();
})();
