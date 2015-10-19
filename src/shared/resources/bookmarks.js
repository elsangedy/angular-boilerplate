define(function(require) {
  'use strict';

  var angular = require('angular');

  var module = angular.module('bookmarks.resource', []);

  module.factory('BookmarkResource', BookmarkResource);

  //---

  BookmarkResource.$inject = [
    '$resource'
  ];

  function BookmarkResource($resource) {

    var endpoint = 'http://localhost/api/bookmarks/:id'; // add your endpoint

    return $resource(endpoint, {
        'id': ''
      }, {
        '$update': {
          'method': 'PUT'
        }
      }
    );

  }

  return module;

});
