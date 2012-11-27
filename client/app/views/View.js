(function () {
  app.views.View = Backbone.View.extend({
    render: function () {
      var data = this.getRenderData ? this.getRenderData() : {};
      $( '#content' )
        .append( this.$el.html( this.template( data )));
    }
  });
})();
