(function () {
  app.views.Player = app.views.View.extend({

    name : 'player',

    className : 'player-view',

    events: {
      'change .samples' : 'handleLoadSample',
      'click .play-button' : 'handlePlayPause'
    },

    initialize: function ( options ) {
      this.packageView = options.packageView;
      this.context = options.context;

      this.packageView.on( 'activate:demo', this.selectPackage, this );

      this.$el.data( 'hidden', true );
      this.render();

      this.$play = this.$el.find( '.play-button' );
      this.loadSample( 'vox' );
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
      });
    },

    packageLoaded : function () {
      if ( this.source ) {
        this.source.connect( this.module.input );
      }
      this.hideLoading();
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
                   console.log('playsample');
      this.$play.data( 'playing', true )
        .find('i')
          .removeClass( 'icon-play' )
          .addClass( 'icon-pause' );
      this.source.noteOn( 0 );
    },

    stopSample : function () {
                   console.log('stopsample');
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

    handleLoadSample : function ( e ) {
      var sample = $( e.target ).find(':selected').val();
      this.loadSample( sample );
    },

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
    }

  });
})();
