app.init = function () {
  app.indexView = new app.views.Index();
  app.searchBarView = new app.views.SearchBar();
  app.searchResultsView = new app.views.SearchResults({
    search : app.searchBarView
  });

  app.searchBarView.render();
  app.indexView.render();
  app.searchResultsView.render();
};

$(function () {
  app.init.call( app );
  Backbone.history.start();
});
