/**
 * Globally expose components
 */

window.Rack   = require('web-audio-components-rack');
window.moment = require('component-moment');
window.allen  = require('jsantell-allen');

/**
 * Initialize app
 */

app.init = function () {  
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
  app.init.call( app );
  Backbone.history.start();
});
