'use strict';

angular.module('myApp.step2', ['ngRoute', 'ngStorage'])

  .config(['$routeProvider', function ($routeProvider) {
    $routeProvider.when('/step2', {
      templateUrl: 'step2/step2.html',
      controller: 'step2Ctrl',
    });
  }])

  .controller('step2Ctrl', ['$scope', '$localStorage', '$location', function ($scope, $localStorage, $location) {

    $scope.yourpet = [{ id: '1', name: '', type: '', breed: '', born: '', gender: '', desexed: 'no' }];

    $scope.hideButton = true;

    $scope.addNewChoice = function () {

      let newItemNo = $scope.yourpet.length + 1;
      $scope.yourpet.push({
        'id': + newItemNo,
        'name': '',
        'type': '',
        'breed': '',
        'born': '',
        'gender': '',
        'desexed': 'no'
      });

      if (newItemNo !== 1) {
        $scope.hideButton = false;
      }

    };

    $scope.removeChoice = function () {
      let newItemNo = $scope.yourpet.length - 1;

      if (newItemNo !== 0) {
        $scope.yourpet.pop();
      }

      if (newItemNo === 1) {
        $scope.hideButton = true;
      }
    };

    $scope.yourself = [{ id: '1', birth: '', email: '', postcode: '', promotioncode: '' }];

    $scope.save = function () {
      $localStorage.yourpet = $scope.yourpet;
      $location.path('/step3');
    };

    $scope.view = function () {
      $scope.data = $localStorage.yourpet;
    };

  }]);