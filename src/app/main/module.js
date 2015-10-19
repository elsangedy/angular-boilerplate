define(function(require) {
  'use strict';

  var angular = require('angular');

  require('uiRouter');
  require('uiBootstrap');

  // angular module definition
  return angular.module(
    // module name
    'main',

    // module dependencies
    [
      'ui.router',
      'ui.bootstrap',

      require('./tpl/cache').name,

      require('app/home/package').name,,

    ]
  );

});
