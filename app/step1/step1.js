'use strict';

angular.module('myApp.step1', ['ngRoute'])

  .config(['$routeProvider', function ($routeProvider) {
    $routeProvider
    .when('/step1', {
      templateUrl: 'step1/step1.html',
      controller: 'step1Ctrl',
    })
  }])

  .controller('step1Ctrl', ['$scope', '$window', '$location' , function ($scope, $window, $location) {
    $scope.goNext = function() {
      $location.path('/step2');
    };
  }]);