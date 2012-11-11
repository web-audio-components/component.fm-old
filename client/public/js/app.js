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
  


  return "<div class=\"row\">\n  <form class=\"form-search\">\n    <div class=\"input-prepend\">\n      <span class=\"add-on\"><i class=\"icon icon-search\"></i></span>\n      <input type=\"search\" class=\"search-query\" id=\"search-bar\" placeholder=\"plate delay\"/>\n    </div>\n  </form>\n</div>\n";};

this["app"]["templates"]["searchResults"] = function (Handlebars,depth0,helpers,partials,data) {
  helpers = helpers || Handlebars.helpers;
  var buffer = "", stack1, foundHelper, functionType="function", escapeExpression=this.escapeExpression, self=this;

function program1(depth0,data) {
  
  var buffer = "", stack1, foundHelper;
  buffer += "\n      <li><a href=\"#\">";
  foundHelper = helpers.name;
  if (foundHelper) { stack1 = foundHelper.call(depth0, {hash:{}}); }
  else { stack1 = depth0.name; stack1 = typeof stack1 === functionType ? stack1() : stack1; }
  buffer += escapeExpression(stack1) + "</a> - ";
  foundHelper = helpers.description;
  if (foundHelper) { stack1 = foundHelper.call(depth0, {hash:{}}); }
  else { stack1 = depth0.description; stack1 = typeof stack1 === functionType ? stack1() : stack1; }
  buffer += escapeExpression(stack1) + "</li>\n    ";
  return buffer;}

  buffer += "<div class=\"row\">\n  <h2>Results for ";
  foundHelper = helpers.query;
  if (foundHelper) { stack1 = foundHelper.call(depth0, {hash:{}}); }
  else { stack1 = depth0.query; stack1 = typeof stack1 === functionType ? stack1() : stack1; }
  buffer += escapeExpression(stack1) + "</h2>\n  <ul class=\"nav nav-tabs nav-stacked\">\n    ";
  stack1 = depth0.packages;
  stack1 = helpers.each.call(depth0, stack1, {hash:{},inverse:self.noop,fn:self.program(1, program1, data)});
  if(stack1 || stack1 === 0) { buffer += stack1; }
  buffer += "\n  </ul>\n</div>\n";
  return buffer;};
(function () {
  app.models.Package = Backbone.Model.extend({ 
    initialize : function () {

    }
  });
})();

(function () {
  app.collections.Packages = Backbone.Collection.extend({
    model : app.models.Package,

    url : '/packages',

    initialize: function () {

    }

  });
})();

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
      app.searchResultsView.$el.show();
    },

    search : function () {
      $('#content > div').hide();
      app.searchResultsView.$el.show();
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
      var query = $( e.target ).val();
      Backbone.history.navigate( 'packages/search/' + query, true );
      this.trigger( 'query', query );
    }
  });
})();

(function () {
  app.views.SearchResults = app.views.View.extend({
    template : Handlebars.template( app.templates.searchResults ),
    
    initialize: function ( options ) {
      this.search = options.search;
      this.packages = new app.collections.Packages();
      this.packages.on( 'fetched', this.preRender, this );
      this.search.on( 'query', this.query, this );

      this.packages.fetch();
    },

    query : function ( query ) {
      var packages = this.packages;
      this.packages.query = query;
      this.packages.url = '/packages/search/' + query;
      this.packages.fetch({
        success: function ( collection ) {
          packages.trigger( 'fetched' );
        }
      });
    },

    preRender : function () {
                  console.log(this.packages.toJSON());
      this.render({
        packages : this.packages.toJSON(),
        query : this.packages.query
      });
    }
  });
})();

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
