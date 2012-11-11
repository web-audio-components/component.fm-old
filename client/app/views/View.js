(function () {
  app.views.View = Backbone.View.extend({
    render: function ( data ) {
      $( '#content' )
        .append( this.$el.html( this.template( data ) ));
    }
  });
})();
