'use strict';

angular.module('myApp.step1', ['ngRoute'])

.config(['$routeProvider', function($routeProvider) {
  $routeProvider.when('/step1', {
    templateUrl: 'step1/step1.html',
    controller: 'step1Ctrl',
  });
}])

.controller('step1Ctrl', ['$scope', function($scope, $window) {
  $scope.tabs = [
    { title:'Dynamic Title 1', content:'Dynamic content 1' },
    { title:'Dynamic Title 2', content:'Dynamic content 2', disabled: true }
  ];

  $scope.alertMe = function() {
    setTimeout(function() {
      alert('You\'ve selected the alert tab!');
    });
  };

  $scope.model = {
    name: 'Tabs'
  };
}]);