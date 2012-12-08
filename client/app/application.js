app.init = function () {
  
  console.log('past');

  app.packages = new app.collections.Packages();
  app.context = allen.getAudioContext();

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
    packageView : app.packageView,
    context : app.context
  });
  app.indexView = new app.views.Index({
    packages : app.packages,
    search : app.searchBarView
  });

};

$(function () {
  // Use requirejs to expose allen, since it won't be global
  // due to existence of requirejs for pulling in
  // audio modules
  require([ 'allen' ], function ( allen ) {
    window.allen = allen;
    app.init.call( app );
    Backbone.history.start();
  });
});
