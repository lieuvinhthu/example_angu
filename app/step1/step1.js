'use strict';

angular.module('myApp.step1', ['ngRoute'])

  .config(['$routeProvider', function ($routeProvider) {
    $routeProvider.when('/step1', {
      templateUrl: 'step2/step2.html',
      controller: 'step1Ctrl',
    });
  }])

  .controller('step1Ctrl', ['$scope', function ($scope, $window) {
    $scope.tabs = [
      { title: 'Dynamic Title 1', content: 'Dynamic content 1' },
      { title: 'Dynamic Title 2', content: 'Dynamic content 2', disabled: true }
    ];

    $scope.alertMe = function () {
      setTimeout(function () {
        alert('You\'ve selected the alert tab!');
      });
    };

    $scope.model = {
      name: 'Tabs'
    };

    //
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
  }]);