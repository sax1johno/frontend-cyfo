var template = require('./app.html');
require('./app.styl');

var appDirective = function() {
  return {
    template: template,
    restrict: 'E',
    scope: {},
    replace: true
  }
};

module.exports = appDirective;

