define(function(require) {
  'use strict';

  var module = require('./module');

  module.config(ConfigStates);

  //---

  ConfigStates.$inject = [
    '$stateProvider',
    '$urlRouterProvider',
    '$httpProvider'
  ];

  function ConfigStates($stateProvider, $urlRouterProvider, $httpProvider) {

    $urlRouterProvider
      .when('', '/home') // default
      .when('/', '/home') // default
      .otherwise('/404'); // For any unmatched url, redirect to /404

    $stateProvider
      .state('404', {
        url: '/404',
        views: {
          'master': {
            templateUrl   : 'app/main/tpl/layout.html'
          },
          'content@404': {
            templateUrl   : 'app/main/tpl/404.html'
          }
        }
      });

  }

});
