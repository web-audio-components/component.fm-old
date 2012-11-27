(function () {
  app.views.Player = app.views.View.extend({

    name : 'player',

    className : 'player-view',

    initialize: function () {
      this.context = new ( window.AudioContext || window.webkitAudioContext )();
      app.packageView.on( 'select:package', this.loadPackage, this );

      this.$el.data( 'hidden', true );
      this.$('.samples').change();
      this.render();
    },

    events: {
      'change .samples' : 'handleLoadSample'
    },

    loadPackage : function ( name ) {
      var that = this;

      if ( this.$el.data('hidden') ) {
        this.showPlayer();
      }

      require(['/packages/' + name + '/script.js'], function ( module ) {
        that.module = new module( that.context );
        that.packageLoaded();
        that.module.connect( that.context.destination );
      });
    },

    packageLoaded : function () {

    },

    handleLoadSample : function ( e ) {
      var sample = $( e.target ).find(':selected').val();
      this.loadSample( sample );
    },

    loadSample : function ( sample ) {
      var that = this;

      // If previous buffer connected and playing, kill it
      if ( this.source && this.source.noteOff ) {
        this.source.noteOff( 0 );
      }

      this.source = this.context.createBufferSource();
      var xhr = new XMLHttpRequest();
      xhr.open( 'GET', 'samples/' + sample + '.mp3', true );
      xhr.responseType = 'arraybuffer';
      xhr.onload = function ( buffer ) {
        that.loadedSample( buffer, xhr );
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
