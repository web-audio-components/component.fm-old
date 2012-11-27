(function () {
  app.views.Package = app.views.View.extend({

    name : 'package',

    initialize : function () {
      this.on( 'setPackage', this.setPackage, this );

      this.render();
    },

    setPackage : function ( pkg ) {
      this.package = pkg;
      this.render();
    },

    getRenderData : function () {
      return this.package.toJSON();
    }

  });
})();
