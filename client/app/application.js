app.init = function () {
  app.indexView = new app.views.Index();
  app.searchBarView = new app.views.SearchBar();
  app.searchResultsView = new app.views.SearchResults({
    search : app.searchBarView
  });
  app.playerView = new app.views.Player();

  app.searchBarView.render();
  app.indexView.render();
  app.searchResultsView.render();
  app.playerView.render();
  console.log(app.playerView.$el);
};

$(function () {
  app.init.call( app );
  Backbone.history.start();
});
