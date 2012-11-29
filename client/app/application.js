app.init = function () {

  app.packages = new app.collections.Packages();

  app.searchBarView = new app.views.SearchBar();
  app.searchResultsView = new app.views.SearchResults({
    search : app.searchBarView,
    packages : app.packages
  });
  app.packageView = new app.views.Package({
    search : app.searchBarView,
    resultsView : app.searchResultsView,
    packages : app.packages
  });
  app.playerView = new app.views.Player({
    packageView : app.packageView
  });
  app.indexView = new app.views.Index({
    packages : app.packages,
    search : app.searchBarView
  });

};

$(function () {
  app.init.call( app );
  Backbone.history.start();
});
