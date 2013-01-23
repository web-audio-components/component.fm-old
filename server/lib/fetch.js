var
  config  = require('../config'),
  request = require('request'),
  async   = require('async'),
  _       = require('underscore'),
  url     = config.componentsURL;

module.exports = function () {
  request({ url: url, json: true }, function (err, res, body) {
    console.log(err,res,body);
    var audioComponents = _.filter(body, function (component) {
      console.log(component);
      return component && component.wapm;
    });

    console.log(audioComponents);
  });
}
