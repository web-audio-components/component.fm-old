this["app"] = this["app"] || {};
this["app"]["templates"] = this["app"]["templates"] || {};

this["app"]["templates"]["index"] = function (Handlebars,depth0,helpers,partials,data) {
  helpers = helpers || Handlebars.helpers;
  


  return "<div class=\"row\">\n  <h1>Web Audio Package Manager</h1>\n  <p>This app is 3 separate components (maybe more, not sure). The goal was to create a package manager for web audio API nodes so they can be accessed all in one place, and browsable on an app, where if they follow a spec, they'll be able to be played in a browser so devs can try them out.</p>\n  <p>The <a href=\"https://github.com/wapm/wapm-cli\">CLI</a> for registering packages is still incomplete, but sending packages to the service.</p>\n  <p>The <a href=\"https://github.com/wapm/wapm-service\">service</a> stores information about the packages and exposes an API for use.</p>\n  <p>The app (this) is in the NKO repo, although all of these were started for 48 hours ago.</p>\n  <p>They all need a lot of love and will be worked on over the next few weeks, but this seemed a bit ambitious for one person :) Will iron out the spec, service, CLI and browsable app in the weeks to come, add components so the effects can be tweeked while browsing, etc.. also a lot of styling love.</p>\n  <p>To try it out, <strong>search for \"reverb\"</strong>, and then load up a sample below!</p>\n  <p><strong>Only works with the Web Audio API (webkit only at the moment)</strong></p>\n</div>\n\n";};

this["app"]["templates"]["package"] = function (Handlebars,depth0,helpers,partials,data) {
  helpers = helpers || Handlebars.helpers;
  var buffer = "", stack1, foundHelper, functionType="function", escapeExpression=this.escapeExpression;


  buffer += "<div class=\"row\">\n  <h1>";
  foundHelper = helpers.name;
  if (foundHelper) { stack1 = foundHelper.call(depth0, {hash:{}}); }
  else { stack1 = depth0.name; stack1 = typeof stack1 === functionType ? stack1() : stack1; }
  buffer += escapeExpression(stack1) + "</h1>\n  <div class=\"description\">";
  foundHelper = helpers.description;
  if (foundHelper) { stack1 = foundHelper.call(depth0, {hash:{}}); }
  else { stack1 = depth0.description; stack1 = typeof stack1 === functionType ? stack1() : stack1; }
  buffer += escapeExpression(stack1) + "</div>\n  <table class=\"table table-bordered table-striped\">\n    <tbody>\n      <tr>\n        <td class=\"attribute-label\">author</td>\n        <td>\n          ";
  foundHelper = helpers.author;
  if (foundHelper) { stack1 = foundHelper.call(depth0, {hash:{}}); }
  else { stack1 = depth0.author; stack1 = typeof stack1 === functionType ? stack1() : stack1; }
  buffer += escapeExpression(stack1) + "\n        </td>\n      </tr>\n      <tr>\n        <td class=\"attribute-label\">repo</td>\n        <td><a href=\"https://github.com/";
  foundHelper = helpers.repo;
  if (foundHelper) { stack1 = foundHelper.call(depth0, {hash:{}}); }
  else { stack1 = depth0.repo; stack1 = typeof stack1 === functionType ? stack1() : stack1; }
  buffer += escapeExpression(stack1) + "\" title=\"GitHub repository for ";
  foundHelper = helpers.name;
  if (foundHelper) { stack1 = foundHelper.call(depth0, {hash:{}}); }
  else { stack1 = depth0.name; stack1 = typeof stack1 === functionType ? stack1() : stack1; }
  buffer += escapeExpression(stack1) + "\">";
  foundHelper = helpers.repo;
  if (foundHelper) { stack1 = foundHelper.call(depth0, {hash:{}}); }
  else { stack1 = depth0.repo; stack1 = typeof stack1 === functionType ? stack1() : stack1; }
  buffer += escapeExpression(stack1) + "</a></td>\n      </tr>\n      <tr>\n        <td class=\"attribute-label\">keywords</td>\n        <td>";
  foundHelper = helpers.keywords;
  if (foundHelper) { stack1 = foundHelper.call(depth0, {hash:{}}); }
  else { stack1 = depth0.keywords; stack1 = typeof stack1 === functionType ? stack1() : stack1; }
  buffer += escapeExpression(stack1) + "</td>\n      </tr>\n      <tr>\n        <td class=\"attribute-label\">updated</td>\n        <td>";
  foundHelper = helpers.updated;
  if (foundHelper) { stack1 = foundHelper.call(depth0, {hash:{}}); }
  else { stack1 = depth0.updated; stack1 = typeof stack1 === functionType ? stack1() : stack1; }
  buffer += escapeExpression(stack1) + "</td>\n      </tr>\n      <tr>\n        <td class=\"attribute-label\">watchers</td>\n        <td>";
  foundHelper = helpers.watchers;
  if (foundHelper) { stack1 = foundHelper.call(depth0, {hash:{}}); }
  else { stack1 = depth0.watchers; stack1 = typeof stack1 === functionType ? stack1() : stack1; }
  buffer += escapeExpression(stack1) + " stars</td>\n      </tr>\n    </tbody>\n  </table>\n\n</div>\n";
  return buffer;};

this["app"]["templates"]["player"] = function (Handlebars,depth0,helpers,partials,data) {
  helpers = helpers || Handlebars.helpers;
  var buffer = "", stack1, foundHelper, functionType="function", escapeExpression=this.escapeExpression;


  buffer += "<div class=\"row\">\n  <select class=\"samples\">\n    <option value=\"vox\">vocals</li>\n    <option value=\"lead\">acoustic guitar lead</li>\n    <option value=\"rhythm\">acoustic guitar rhythm</li>\n    <option value=\"solo-dry\">electric guitar lead</li>\n  </select>\n  <div class=\"module well\">\n    <h3>";
  foundHelper = helpers.name;
  if (foundHelper) { stack1 = foundHelper.call(depth0, {hash:{}}); }
  else { stack1 = depth0.name; stack1 = typeof stack1 === functionType ? stack1() : stack1; }
  buffer += escapeExpression(stack1) + "</h3>\n\n  </div>\n</div>\n\n";
  return buffer;};

this["app"]["templates"]["searchBar"] = function (Handlebars,depth0,helpers,partials,data) {
  helpers = helpers || Handlebars.helpers;
  


  return "<div class=\"row\">\n  <form class=\"form-search\">\n    <div class=\"input-prepend\">\n      <span class=\"add-on\"><i class=\"icon icon-search\"></i></span>\n      <input type=\"search\" class=\"search-query\" id=\"search-bar\" placeholder=\"plate delay\"/>\n    </div>\n  </form>\n</div>\n";};

this["app"]["templates"]["searchResults"] = function (Handlebars,depth0,helpers,partials,data) {
  helpers = helpers || Handlebars.helpers;
  var buffer = "", stack1, functionType="function", escapeExpression=this.escapeExpression, self=this;

function program1(depth0,data) {
  
  var buffer = "", stack1, foundHelper;
  buffer += "\n    <h2>Results for ";
  foundHelper = helpers.query;
  if (foundHelper) { stack1 = foundHelper.call(depth0, {hash:{}}); }
  else { stack1 = depth0.query; stack1 = typeof stack1 === functionType ? stack1() : stack1; }
  buffer += escapeExpression(stack1) + "</h2>\n  ";
  return buffer;}

function program3(depth0,data) {
  
  
  return "\n    <h2>Recent packages</h2>\n  ";}

function program5(depth0,data) {
  
  var buffer = "", stack1, foundHelper;
  buffer += "\n      <li><a href=\"#\" data-id=\"";
  foundHelper = helpers.id;
  if (foundHelper) { stack1 = foundHelper.call(depth0, {hash:{}}); }
  else { stack1 = depth0.id; stack1 = typeof stack1 === functionType ? stack1() : stack1; }
  buffer += escapeExpression(stack1) + "\" data-name=\"";
  foundHelper = helpers.name;
  if (foundHelper) { stack1 = foundHelper.call(depth0, {hash:{}}); }
  else { stack1 = depth0.name; stack1 = typeof stack1 === functionType ? stack1() : stack1; }
  buffer += escapeExpression(stack1) + "\">";
  foundHelper = helpers.name;
  if (foundHelper) { stack1 = foundHelper.call(depth0, {hash:{}}); }
  else { stack1 = depth0.name; stack1 = typeof stack1 === functionType ? stack1() : stack1; }
  buffer += escapeExpression(stack1) + " - ";
  foundHelper = helpers.description;
  if (foundHelper) { stack1 = foundHelper.call(depth0, {hash:{}}); }
  else { stack1 = depth0.description; stack1 = typeof stack1 === functionType ? stack1() : stack1; }
  buffer += escapeExpression(stack1) + "</a></li>\n    ";
  return buffer;}

  buffer += "<div class=\"row\">\n  ";
  stack1 = depth0.query;
  stack1 = helpers['if'].call(depth0, stack1, {hash:{},inverse:self.program(3, program3, data),fn:self.program(1, program1, data)});
  if(stack1 || stack1 === 0) { buffer += stack1; }
  buffer += "\n  <ul class=\"nav nav-tabs nav-stacked\">\n    ";
  stack1 = depth0.packages;
  stack1 = helpers.each.call(depth0, stack1, {hash:{},inverse:self.noop,fn:self.program(5, program5, data)});
  if(stack1 || stack1 === 0) { buffer += stack1; }
  buffer += "\n  </ul>\n</div>\n";
  return buffer;};