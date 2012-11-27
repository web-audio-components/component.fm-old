(function () {
  app.views.View = Backbone.View.extend({

    render : function () {
      // Generate template based off of name if doesn't exist
      this.template = this.template || Handlebars.template( app.templates[ this.name ]);

      var data = this.getRenderData ? this.getRenderData() : {};
      $( '#content' )
        .append( this.$el.html( this.template( data )));
    }
  });
})();
