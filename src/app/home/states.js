define(function(require) {
  'use strict';

  var module = require('./module');

  module.config(ConfigureStates);

  //---

  ConfigureStates.$inject = [
    '$stateProvider',
    '$urlRouterProvider'
  ];

  function ConfigureStates($stateProvider, $urlRouterProvider) {

    $stateProvider
      .state('home', {
        url: '/home',
        views: {
          'master': {
            templateUrl   : 'app/main/tpl/layout.html'
          },
          'content@home': {
            templateUrl   : 'app/home/tpl.html',
            controller    : 'HomeCtrl',
            controllerAs  : 'vm'
          }
        }
      });

  }

});
