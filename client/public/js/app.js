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
  


  return "<div class=\"row\">\n  <h1>Web Audio Package Manager</h1>\n  <p>This app is 3 separate components (maybe more, not sure). The goal was to create a package manager for web audio API nodes so they can be accessed all in one place, and browsable on an app, where if they follow a spec, they'll be able to be played in a browser so devs can try them out.</p>\n  <p>The <a href=\"https://github.com/wapm/wapm-cli\">CLI</a> for registering packages is still incomplete, but sending packages to the service.</p>\n  <p>The <a href=\"https://github.com/wapm/wapm-service\">service</a> stores information about the packages and exposes an API for use.</p>\n  <p>The app (this) is in the NKO repo, although all of these were started for 48 hours ago.</p>\n  <p>They all need a lot of love and will be worked on over the next few weeks, but this seemed a bit ambitious for one person :) Will iron out the spec, service, CLI and browsable app in the weeks to come, add components so the effects can be tweeked while browsing, etc.. also a lot of styling love.</p>\n  <p>To try it out, <strong>search for \"reverb\"</strong>, and then load up a sample below!</p>\n  <p><strong>Only works with the Web Audio API (webkit only at the moment)</strong></p>\n</div>\n\n";};

this["app"]["templates"]["player"] = function (Handlebars,depth0,helpers,partials,data) {
  helpers = helpers || Handlebars.helpers;
  var buffer = "", stack1, foundHelper, functionType="function", escapeExpression=this.escapeExpression;


  buffer += "<div class=\"row\">\n  <select class=\"samples\">\n    <option value=\"vox\">vocals</li>\n    <option value=\"lead\">acoustic guitar lead</li>\n    <option value=\"rhythm\">acoustic guitar rhythm</li>\n    <option value=\"solo-dry\">electric guitar lead</li>\n  </select>\n  <div class=\"module well\">\n    <h3>";
  foundHelper = helpers.name;
  if (foundHelper) { stack1 = foundHelper.call(depth0, {hash:{}}); }
  else { stack1 = depth0.name; stack1 = typeof stack1 === functionType ? stack1() : stack1; }
  buffer += escapeExpression(stack1) + "</h3>\n\n  </div>\n</div>\n\n";
  return buffer;};

this["app"]["templates"]["searchBar"] = function (Handlebars,depth0,helpers,partials,data) {
  helpers = helpers || Handlebars.helpers;
  


  return "<div class=\"row\">\n  <form class=\"form-search\">\n    <div class=\"input-prepend\">\n      <span class=\"add-on\"><i class=\"icon icon-search\"></i></span>\n      <input type=\"search\" class=\"search-query\" id=\"search-bar\" placeholder=\"plate delay\"/>\n    </div>\n  </form>\n</div>\n";};

this["app"]["templates"]["searchResults"] = function (Handlebars,depth0,helpers,partials,data) {
  helpers = helpers || Handlebars.helpers;
  var buffer = "", stack1, functionType="function", escapeExpression=this.escapeExpression, self=this;

function program1(depth0,data) {
  
  var buffer = "", stack1, foundHelper;
  buffer += "\n    <h2>Results for ";
  foundHelper = helpers.query;
  if (foundHelper) { stack1 = foundHelper.call(depth0, {hash:{}}); }
  else { stack1 = depth0.query; stack1 = typeof stack1 === functionType ? stack1() : stack1; }
  buffer += escapeExpression(stack1) + "</h2>\n  ";
  return buffer;}

function program3(depth0,data) {
  
  
  return "\n    <h2>Recent packages</h2>\n  ";}

function program5(depth0,data) {
  
  var buffer = "", stack1, foundHelper;
  buffer += "\n      <li><a href=\"#\" data-name=\"";
  foundHelper = helpers.name;
  if (foundHelper) { stack1 = foundHelper.call(depth0, {hash:{}}); }
  else { stack1 = depth0.name; stack1 = typeof stack1 === functionType ? stack1() : stack1; }
  buffer += escapeExpression(stack1) + "\">";
  foundHelper = helpers.name;
  if (foundHelper) { stack1 = foundHelper.call(depth0, {hash:{}}); }
  else { stack1 = depth0.name; stack1 = typeof stack1 === functionType ? stack1() : stack1; }
  buffer += escapeExpression(stack1) + " - ";
  foundHelper = helpers.description;
  if (foundHelper) { stack1 = foundHelper.call(depth0, {hash:{}}); }
  else { stack1 = depth0.description; stack1 = typeof stack1 === functionType ? stack1() : stack1; }
  buffer += escapeExpression(stack1) + "</a></li>\n    ";
  return buffer;}

  buffer += "<div class=\"row\">\n  ";
  stack1 = depth0.query;
  stack1 = helpers['if'].call(depth0, stack1, {hash:{},inverse:self.program(3, program3, data),fn:self.program(1, program1, data)});
  if(stack1 || stack1 === 0) { buffer += stack1; }
  buffer += "\n  <ul class=\"nav nav-tabs nav-stacked\">\n    ";
  stack1 = depth0.packages;
  stack1 = helpers.each.call(depth0, stack1, {hash:{},inverse:self.noop,fn:self.program(5, program5, data)});
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
    },

    search : function () {
    }
  });

  app.router = new Router();
})();

(function () {
  app.views.View = Backbone.View.extend({
    render: function ( data ) {
      $( '#content' )
        .append( this.$el.html( this.template( data || {} ) ));
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
  app.views.Player = app.views.View.extend({
    template : Handlebars.template( app.templates.player ),
    className : 'player-view',
    
    initialize: function () {
      this.context = new ( window.AudioContext || window.webkitAudioContext )();
      app.searchResultsView.on( 'select:package', this.loadPackage, this );

      this.$el.data( 'hidden', true );
      this.$('.samples').change();
    },

    events: {
      'change .samples' : 'handleLoadSample'
    },

    loadPackage : function ( name ) {
      var _this = this;

      if ( this.$el.data('hidden') ) {
        this.showPlayer();
      }

      require(['/packages/' + name + '/script.js'], function ( module ) {
        _this.module = new module( _this.context );
        _this.packageLoaded();
        _this.module.connect( _this.context.destination );
      });
    },

    packageLoaded : function () {

    },

    handleLoadSample : function ( e ) {
      var sample = $( e.target ).find(':selected').val();
      this.loadSample( sample );
    },

    loadSample : function ( sample ) {
      var _this = this;

      // If previous buffer connected and playing, kill it
      if ( this.source && this.source.noteOff ) {
        this.source.noteOff( 0 );
      }

      this.source = this.context.createBufferSource();
      var xhr = new XMLHttpRequest();
      xhr.open( 'GET', 'samples/' + sample + '.mp3', true );
      xhr.responseType = 'arraybuffer';
      xhr.onload = function ( buffer ) {
        _this.loadedSample( buffer, xhr );
      };
      xhr.send();
    },

    loadedSample : function ( buffer, xhr ) {
      this.source.buffer = this.context.createBuffer( xhr.response, false );
      if ( this.module ) {
        this.source.connect( this.module.input );
      }
      this.source.noteOn( 0 );
    },

    showPlayer : function () {
      this.$el.animate({ 'margin-bottom' : '0px' });
      this.$el.data('hidden', false);
    },

    hidePlayer : function () {
      this.$el.animate({ 'margin-bottom' : '-150px' });
      this.$el.data('hidden', true);
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
      this.trigger( 'query', query );
      app.indexView.$el.slideUp();
    }
  });
})();

(function () {
  app.views.SearchResults = app.views.View.extend({
    template : Handlebars.template( app.templates.searchResults ),
  
    events : {
      'click a' : 'handlePackageSelect'
    },

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
      this.render({
        packages : this.packages.toJSON(),
        query : this.packages.query
      });
    },

    handlePackageSelect : function ( e ) {
      var name = $( e.target ).data( 'name' );
      this.trigger( 'select:package', name );
    }
  });
})();

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
