var app = app || {};
app.views = {};
app.models = {};
app.collections = {};
app.templates = {};
app.config = {};

this["app"] = this["app"] || {};
this["app"]["templates"] = this["app"]["templates"] || {};

this["app"]["templates"]["index"] = function (Handlebars,depth0,helpers,partials,data) {
  helpers = helpers || Handlebars.helpers;
  


  return "<div class=\"row\">\n  <h1>Welcome</h1>\n</div>\n\n";};

this["app"]["templates"]["searchBar"] = function (Handlebars,depth0,helpers,partials,data) {
  helpers = helpers || Handlebars.helpers;
  


  return "<div class=\"row\">\n  <input type=\"search\" id=\"search-bar\" placeholder=\"plate delay\"/>\n</div>\n";};

this["app"]["templates"]["searchResults"] = function (Handlebars,depth0,helpers,partials,data) {
  helpers = helpers || Handlebars.helpers;
  


  return "<div class=\"row\">\n  \n</div>\n";};
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

(function () {
  app.views.View = Backbone.View.extend({
    render: function ( data ) {
      $( '#content' )
        .append( this.$el.html( this.template( data ) ));
    }
  });
})();

(function () {
  app.views.Index = app.views.View.extend({
    template: Handlebars.template( app.templates.index ),
    className: 'index-view',
    
    initialize: function () {
    },

    events: {
    }
  });
})();

(function () {
  app.views.SearchBar = app.views.View.extend({
    template : Handlebars.template( app.templates.searchBar ),
    
    initialize: function () {
    },

    events: {
      'keyup #search-bar' : 'handleSearch'
    },

    handleSearch: function ( e ) {

    }
  });
})();

(function () {
  app.views.SearchResults = app.views.View.extend({
    template : Handlebars.template( app.templates.searchResults ),
    
    initialize: function () {
    }

  });
})();

app.init = function () {
  app.indexView = new app.views.Index();
  app.searchBarView = new app.views.SearchBar();
  app.searchResultsView = new app.views.SearchResults();

  app.searchBarView.render();
  app.indexView.render();
  app.searchResultsView.render();
};

$(function () {
  app.init.call( app );
  Backbone.history.start();
});
