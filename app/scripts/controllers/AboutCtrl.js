'use strict';

/**
 * @ngdoc function
 * @name angularNewsApp.controller:AboutCtrl
 * @description
 * # AboutCtrl
 * Controller of the angularNewsApp
 */
angular.module('angularNewsApp')
  .controller('AboutCtrl', function ($scope) {
    $scope.awesomeThings = [
      'HTML5 Boilerplate',
      'AngularJS',
      'Karma'
    ];
  });
