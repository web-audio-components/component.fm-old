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
  


  return "<div class=\"row\">\n  <h1>Web Audio Package Manager</h1>\n  <div>\n    This is a collection of modules for the Web Audio API. Browse and demo them on this site, check out the <a href=\"https://github.com/wapm/web-audio-module-spec/blob/master/wapm-spec.md\" title=\"WAPM spec\">spec</a> for making your own modules, and use the <a href=\"https://github.com/wapm/wapm-cli\" title=\"WAPM node tool\">node.js CLI</a> for pulling down modules.\n  </div>\n  <div>\n    This is a work in progress, please submit any issues and feedback to the appropriate project on the <a href=\"https://github.com/wapm\">WAPM GitHub page</a>!\n  </div>\n</div>\n\n";};

this["app"]["templates"]["moduleControl"] = function (Handlebars,depth0,helpers,partials,data) {
  helpers = helpers || Handlebars.helpers;
  var buffer = "", stack1, functionType="function", escapeExpression=this.escapeExpression, self=this;

function program1(depth0,data) {
  
  var buffer = "", stack1, foundHelper;
  buffer += "\n    <div class=\"param\">\n      <input data-min=\"";
  foundHelper = helpers.minValue;
  if (foundHelper) { stack1 = foundHelper.call(depth0, {hash:{}}); }
  else { stack1 = depth0.minValue; stack1 = typeof stack1 === functionType ? stack1() : stack1; }
  buffer += escapeExpression(stack1) + "\" data-max=\"";
  foundHelper = helpers.maxValue;
  if (foundHelper) { stack1 = foundHelper.call(depth0, {hash:{}}); }
  else { stack1 = depth0.maxValue; stack1 = typeof stack1 === functionType ? stack1() : stack1; }
  buffer += escapeExpression(stack1) + "\" data-name=\"";
  foundHelper = helpers.name;
  if (foundHelper) { stack1 = foundHelper.call(depth0, {hash:{}}); }
  else { stack1 = depth0.name; stack1 = typeof stack1 === functionType ? stack1() : stack1; }
  buffer += escapeExpression(stack1) + "\" value=\"";
  foundHelper = helpers.value;
  if (foundHelper) { stack1 = foundHelper.call(depth0, {hash:{}}); }
  else { stack1 = depth0.value; stack1 = typeof stack1 === functionType ? stack1() : stack1; }
  buffer += escapeExpression(stack1) + "\" />\n      <p>";
  foundHelper = helpers.name;
  if (foundHelper) { stack1 = foundHelper.call(depth0, {hash:{}}); }
  else { stack1 = depth0.name; stack1 = typeof stack1 === functionType ? stack1() : stack1; }
  buffer += escapeExpression(stack1) + "</p>\n    </div>\n  ";
  return buffer;}

  buffer += "<div class=\"params\">\n  ";
  stack1 = depth0.params;
  stack1 = helpers.each.call(depth0, stack1, {hash:{},inverse:self.noop,fn:self.program(1, program1, data)});
  if(stack1 || stack1 === 0) { buffer += stack1; }
  buffer += "\n</div>\n";
  return buffer;};

this["app"]["templates"]["package"] = function (Handlebars,depth0,helpers,partials,data) {
  helpers = helpers || Handlebars.helpers;
  var buffer = "", stack1, foundHelper, functionType="function", escapeExpression=this.escapeExpression;


  buffer += "<div class=\"row\">\n  <h1>";
  foundHelper = helpers.name;
  if (foundHelper) { stack1 = foundHelper.call(depth0, {hash:{}}); }
  else { stack1 = depth0.name; stack1 = typeof stack1 === functionType ? stack1() : stack1; }
  buffer += escapeExpression(stack1) + "</h1>\n  <div class=\"description\">";
  foundHelper = helpers.description;
  if (foundHelper) { stack1 = foundHelper.call(depth0, {hash:{}}); }
  else { stack1 = depth0.description; stack1 = typeof stack1 === functionType ? stack1() : stack1; }
  buffer += escapeExpression(stack1) + "</div>\n  <table class=\"table table-bordered table-striped\">\n    <tbody>\n      <tr>\n        <td class=\"attribute-label\">author</td>\n        <td>\n          ";
  foundHelper = helpers.author;
  if (foundHelper) { stack1 = foundHelper.call(depth0, {hash:{}}); }
  else { stack1 = depth0.author; stack1 = typeof stack1 === functionType ? stack1() : stack1; }
  buffer += escapeExpression(stack1) + "\n        </td>\n      </tr>\n      <tr>\n        <td class=\"attribute-label\">repo</td>\n        <td><a href=\"https://github.com/";
  foundHelper = helpers.repo;
  if (foundHelper) { stack1 = foundHelper.call(depth0, {hash:{}}); }
  else { stack1 = depth0.repo; stack1 = typeof stack1 === functionType ? stack1() : stack1; }
  buffer += escapeExpression(stack1) + "\" title=\"GitHub repository for ";
  foundHelper = helpers.name;
  if (foundHelper) { stack1 = foundHelper.call(depth0, {hash:{}}); }
  else { stack1 = depth0.name; stack1 = typeof stack1 === functionType ? stack1() : stack1; }
  buffer += escapeExpression(stack1) + "\">";
  foundHelper = helpers.repo;
  if (foundHelper) { stack1 = foundHelper.call(depth0, {hash:{}}); }
  else { stack1 = depth0.repo; stack1 = typeof stack1 === functionType ? stack1() : stack1; }
  buffer += escapeExpression(stack1) + "</a></td>\n      </tr>\n      <tr>\n        <td class=\"attribute-label\">keywords</td>\n        <td>";
  foundHelper = helpers.keywords;
  if (foundHelper) { stack1 = foundHelper.call(depth0, {hash:{}}); }
  else { stack1 = depth0.keywords; stack1 = typeof stack1 === functionType ? stack1() : stack1; }
  buffer += escapeExpression(stack1) + "</td>\n      </tr>\n      <tr>\n        <td class=\"attribute-label\">updated</td>\n        <td>";
  foundHelper = helpers.updated;
  if (foundHelper) { stack1 = foundHelper.call(depth0, {hash:{}}); }
  else { stack1 = depth0.updated; stack1 = typeof stack1 === functionType ? stack1() : stack1; }
  buffer += escapeExpression(stack1) + "</td>\n      </tr>\n      <tr>\n        <td class=\"attribute-label\">watchers</td>\n        <td>";
  foundHelper = helpers.watchers;
  if (foundHelper) { stack1 = foundHelper.call(depth0, {hash:{}}); }
  else { stack1 = depth0.watchers; stack1 = typeof stack1 === functionType ? stack1() : stack1; }
  buffer += escapeExpression(stack1) + " stars</td>\n      </tr>\n    </tbody>\n  </table>\n  <div class=\"activate-player\">\n    <a href=\"#\">Demo this module</a>\n  </div>\n</div>\n";
  return buffer;};

this["app"]["templates"]["player"] = function (Handlebars,depth0,helpers,partials,data) {
  helpers = helpers || Handlebars.helpers;
  var buffer = "", stack1, foundHelper, functionType="function", escapeExpression=this.escapeExpression;


  buffer += "<div class=\"player-loading\">\n  <div class=\"loading-display\"></div>\n</div>\n<div class=\"row\">\n  <div class=\"player\">\n    <div class=\"controls\">\n      <select class=\"samples\">\n        <option value=\"vox\">vocals</li>\n        <option value=\"lead\">acoustic guitar lead</li>\n        <option value=\"rhythm\">acoustic guitar rhythm</li>\n        <option value=\"solo-dry\">electric guitar lead</li>\n      </select>\n      <div class=\"btn-group\">\n        <a href=\"#\" class=\"btn play-button\" data-playing=\"false\"><i class=\"icon-play\"></i></a>\n      </div>\n      <div class=\"hide\">\n        <a href=\"#\" class=\"btn hide-button\"><i class=\"icon-close\"></i></a>\n      </div>\n    </div>\n      <h3>";
  foundHelper = helpers.name;
  if (foundHelper) { stack1 = foundHelper.call(depth0, {hash:{}}); }
  else { stack1 = depth0.name; stack1 = typeof stack1 === functionType ? stack1() : stack1; }
  buffer += escapeExpression(stack1) + "</h3>\n    <div class=\"module\">\n\n    </div>\n  </div>\n</div>\n\n";
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
  buffer += "\n      <li><a href=\"#\" data-id=\"";
  foundHelper = helpers.id;
  if (foundHelper) { stack1 = foundHelper.call(depth0, {hash:{}}); }
  else { stack1 = depth0.id; stack1 = typeof stack1 === functionType ? stack1() : stack1; }
  buffer += escapeExpression(stack1) + "\" data-name=\"";
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

    },

    // TODO super inefficient search -- probably should cut down
    // on search scope
    matches : function ( query ) {
      var
        params = query.split(' '),
        valid = false,
        pkg = this;

      params = _.map( params, function ( param ) {
        return new RegExp( param, 'gi' );
      });

      _.each( params, function ( param ) {
        if (
          _.any( pkg.get('keywords') || [], function ( keyword ) {
            return keyword.match( param );
          }) ||
          pkg.get('description').match( param ) ||
          pkg.get('name').match( param )
        ) {
          valid = true;
        }
      });

      return valid;
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

    render : function () {
      // Generate template based off of name if doesn't exist
      this.template = this.template ||
        Handlebars.template( app.templates[ this.name ]);

      var data = this.getRenderData ? this.getRenderData() : {};
      $( '#content' )
        .append( this.$el.html( this.template( data )));
    },

    hide : function () {
      this.$el.slideUp();
    },

    show : function () {
      this.$el.slideDown();
    }

  });
})();

(function () {
  app.views.Index = app.views.View.extend({

    name : 'index',

    className: 'index-view',
    
    initialize: function ( options ) {
      this.search = options.search;
      this.packages = options.packages;

      this.search.on( 'query', this.hide, this );
      this.packages.on( 'select', this.hide, this );
      this.render();
    }

  });

})();

(function () {
  app.views.ModuleControl = app.views.View.extend({

    name : 'moduleControl',

    className : 'module-control-view',

    initialize : function ( options ) {
      this.module = options.module;
      this.context = options.context;

      this.render();
      this.initKnobs();
    },

    initKnobs : function () {
      var that = this;
      this.$el.find('input').knob({
        change : function ( value ) {
          that.onParamChange.call( this, value, that.module );
        },
        angleOffset : -125,
        angleArc : 250,
        width : 100,
        height : 100,
        fgColor : '#66cc66',
        bgColor : '#999'
      });
    },

    // Called with the context of the knob instance on the input
    onParamChange : function ( value, module ) {
      var $input = this.$;
      module.params[ $input.data( 'name' ) ].value = value;
    },

    getRenderData : function () {
      var params = [];
      
      if ( this.module.params) {
        _.each( this.module.params, function ( param ) {
          params.push( param );
        });
      }

      return {
        params: params
      };
    }

  });
})();

(function () {
  app.views.Package = app.views.View.extend({

    name : 'package',

    className : 'package-view',

    events : {
      'click .activate-player a' : 'handleActivateDemo'
    },

    initialize : function ( options ) {
      this.packages = options.packages;
      this.search = options.search;

      this.packages.on( 'select', this.setPackage, this );
      this.search.on( 'query', this.hide, this );
    },

    setPackage : function ( pkg ) {
      app.router.navigate( '/package/' + pkg.get('name'));
      this.package = pkg;
      this.show();
      this.render();
    },

    getRenderData : function () {
      var json = this.package.toJSON();
      json.updated = this.formatDate( json.updated );
      json.keywords = this.formatKeywords( json.keywords );
      return json;
    },

    formatDate : function ( date ) {
      return moment( date ).format( 'MMMM Do YYYY' );
    },

    formatKeywords : function ( keywords ) {
      return ( keywords || [] ).join( ', ' );
    },

    handleActivateDemo : function ( e ) {
      e.preventDefault();
      this.trigger( 'activate:demo', this.package );
    }

  });
})();

(function () {
  app.views.Player = app.views.View.extend({

    name : 'player',

    className : 'player-view well',

    events: {
      'change .samples' : 'handleSampleChange',
      'click .play-button' : 'handlePlayPause',
      'click .hide-button' : 'handleHide'
    },

    initialize: function ( options ) {
      this.packageView = options.packageView;
      this.context = options.context;

      this.packageView.on( 'activate:demo', this.selectPackage, this );

      this.$el.data( 'hidden', true );
      this.render();

      this.currentSample = 'vox';
      this.$play = this.$el.find( '.play-button' );
      this.$module = this.$el.find( '.module' );
      this.$samples = this.$el.find( '.samples' );
    },

    selectPackage : function ( pkg ) {
      this.package = pkg;
      this.loadPackage();
    },

    // Package

    loadPackage : function () {
      var that = this;

      if ( this.$el.data('hidden') ) {
        this.showPlayer();
      }

      this.showLoading();
      
      require(['/packages/' + this.package.get( 'name' ) + '/script.js'], function ( module ) {
        that.module = new module( that.context );
        that.packageLoaded();
        that.module.connect( that.context.destination );
        that.createControlView( that.module );
      });
    },

    packageLoaded : function () {
      if ( this.source ) {
        this.source.connect( this.module.input );
      }
      this.hideLoading();
    },

    createControlView : function ( module ) {
      this.moduleControlView = new app.views.ModuleControl({
        module: this.module,
        context: this.context
      });
      this.$module.html( this.moduleControlView.$el );
    },

    // Sample

    loadSample : function ( sample ) {
      var that = this;

      this.showLoading();
      this.removeSample();

      this.source = this.context.createBufferSource();
      allen.getBuffer( 'samples/' + sample + '.mp3', function ( xhr ) {
        that.loadedSample( xhr.target.response );
      });
    },

    loadedSample : function ( buffer ) {
      this.source.buffer = this.context.createBuffer( buffer, false );
      if ( this.module ) {
        this.source.connect( this.module.input );
        this.source.noteOn( 0 );
      }
      this.hideLoading();
    },

    removeSample : function () {
      if ( this.source && this.source.disconnect ) {
        this.source.disconnect();
      }
      this.stopSample();
    },

    playSample : function () {
      this.loadSample( this.currentSample );
      this.$play.data( 'playing', true )
        .find('i')
          .removeClass( 'icon-play' )
          .addClass( 'icon-pause' );
    },

    stopSample : function () {
      this.$play.data( 'playing', false )
        .find('i')
          .addClass( 'icon-play' )
          .removeClass( 'icon-pause' );
      if ( this.source && this.source.noteOff ) {
        this.source.noteOff( 0 );
      }
    },

    showPlayer : function () {
      this.$el.animate({ 'margin-bottom' : '0px' });
      this.$el.data('hidden', false);
    },

    hidePlayer : function () {
      this.$el.animate({ 'margin-bottom' : '-150px' });
      this.$el.data('hidden', true);
    },

    // Loading GUI

    showLoading : function () {
      this.$el
        .find('.player-loading').show().end()
        .find('select, a').prop('disabled', true)
          .addClass('disabled');
    },

    hideLoading : function () {
      this.$el
        .find('.player-loading').hide().end()
        .find('select, a').prop('disabled', false)
          .removeClass('disabled');
    },

    // Event handlers

    handlePlayPause : function ( e ) {
      e.preventDefault();

      // Abort if button has class disabled
      if ( this.$play.hasClass('disabled') ) {
        return;
      }

      if ( this.$play.data( 'playing' ) ) {
        this.stopSample();
      } else {
        this.playSample();
      }
    },

    handleHide : function ( e ) {
      e.preventDefault();
      this.stopSample();
      this.hide();
    },

    handleSampleChange : function () {
      this.stopSample();
      this.currentSample = this.$samples.find(':selected').val();
    }

  });
})();

(function () {
  app.views.SearchBar = app.views.View.extend({

    name : 'searchBar',

    className : 'search-bar-view',

    initialize : function () {
      var that = this;

      this.triggerQuery = _.debounce(function ( query ) {
        that.trigger( 'query', query );
      }, 200 );

      this.render();
    },

    events : {
      'keyup #search-bar' : 'handleSearch'
    },

    handleSearch : function ( e ) {
      var query = $( e.target ).val();
      query = this.sanitizeQuery( query );

      this.triggerQuery( query );
    },

    sanitizeQuery : function ( query ) {
      return query.replace( /[^\w ]/g, '' );
    }

  });
})();

(function () {
  app.views.SearchResults = app.views.View.extend({

    name : 'searchResults',

    className : 'search-results-view',

    events : {
      'click a' : 'handlePackageSelect'
    },

    initialize: function ( options ) {
      var that = this;
      this.search = options.search;
      this.packages = options.packages;

      // Initialized filtered list with a reference to all packages
      this.filteredPackages = this.packages;

      this.search.on( 'query', this.onQuery, this );
      this.packages.on( 'select', this.onSelect, this );

      this.packages.fetch({
        success : function () {
          that.render();
        }
      });
    },

    filterPackages : function ( query ) {
      var filteredArray;

      // If query exists, filter via it
      if ( query ) {
     
        filteredArray = this.packages.filter(function ( pkg ) {
          return pkg.matches( query );
        });

        this.filteredPackages = new app.collections.Packages( filteredArray );

      // Otherwise, just use all packages
      } else {
        this.filteredPackages = this.packages;
      }

      app.router.navigate( '/package/search/' + query );
      this.query = query;
      this.render();
    },

    getRenderData : function () {
      return {
        packages : this.filteredPackages.toJSON(),
        query : this.query
      };
    },

    handlePackageSelect : function ( e ) {
      var
        name = $( e.target ).data( 'name' ),
        pkg = this.packages.where({ name: name })[ 0 ];

      e.preventDefault();
      this.packages.trigger( 'select', pkg );
    },

    onQuery : function ( query ) {
      this.show();
      this.filterPackages( query );
    },

    // handlePackageSelect triggers this event on packages
    // and onSelect subsequently hides the element if a different
    // source triggers the select package event
    onSelect : function () {
      this.hide();
    }

  });
})();

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
