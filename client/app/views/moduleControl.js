(function () {
  app.views.ModuleControl = app.views.View.extend({

    name : 'moduleControl',

    className : 'module-control-view',

    initialize : function ( options ) {
      this.module = options.module;
      this.context = options.context;
      console.log(this.module);
      this.rack = new Rack(this.module);
      this.render();
    },

    render: function () {
      $('#content')
        .append(this.$el.html(this.rack.el));
      return this;
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
