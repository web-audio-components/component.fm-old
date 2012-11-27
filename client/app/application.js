app.init = function () {

  app.packages = new app.collections.Packages();

  app.indexView = new app.views.Index();
  app.searchBarView = new app.views.SearchBar();
  app.searchResultsView = new app.views.SearchResults({
    search : app.searchBarView,
    packages : app.packages
  });
  app.packageView = new app.views.Package({
    resultsView : app.searchResultsView,
    packages : app.packages
  });
  app.playerView = new app.views.Player({
    packageView : app.packageView
  });

};

$(function () {
  app.init.call( app );
  Backbone.history.start();
});
