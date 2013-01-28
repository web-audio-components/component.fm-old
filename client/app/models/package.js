(function () {
  app.models.Package = Backbone.Model.extend({ 
    
    initialize : function () {

    },

    /**
     * Determines whether the package instance 
     * matches the query string
     *
     * @param {String} query
     * @return {Boolean}
     * @TODO super inefficient search -- probably should cut down
     * on search scope
     */

    matches : function (query) {
      var
        params = query.split(' '),
        valid = false,
        pkg = this;

      params = _.map(params, function (param) {
        return new RegExp(param, 'gi');
      });

      _.each(params, function (param) {
        if (
          _.any(pkg.get('keywords') || [], function (keyword) {
            return keyword.match(param);
          }) ||
          pkg.get('description').match(param) ||
          pkg.get('name').match(param)
        ) {
          valid = true;
        }
      });

      return valid;
    },

    /**
     * Injects the package's related built script
     * into the DOM. Takes a callback to fire on load
     *
     * @param {Function} callback
     */

    injectBuild : function (callback) {
      var
        url = app.config.apiURL + 'components/' + this.get('repo') + '/build.js',
        scriptEl = document.createElement('script');
      scriptEl.src = url;
      scriptEl.onload = callback;
      $('body').append(scriptEl);
    }
  });
})();
