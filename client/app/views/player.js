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

      // If a moduleControlView already exists,
      // remove it properly
      if ( this.moduleControlView ) {
        this.moduleControlView.remove();
      }

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
