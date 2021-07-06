'use strict';

angular.module('myApp.step3', ['ngRoute'])

  .config(['$routeProvider', function ($routeProvider) {
    $routeProvider
    .when('/step3', {
      templateUrl: 'step3/step3.html',
      controller: 'step3Ctrl',
    })
  }])

  .controller('step3Ctrl', ['$scope', '$window', '$location' , function ($scope, $window, $location) {
    
    let currentDate = moment();
    
     let fnWeekDays = function(dt) {

        let currentDate = dt;
        let weekStart = currentDate.clone().startOf('week');

        let days = [];
        for (let i = 1; i <= 15; i++) {

            days.push(moment(weekStart).add(i, 'days').format("MMMM Do,dddd"));

        };
        return days;
    }
    
    $scope.weekDays = fnWeekDays(currentDate);

    $scope.back = function () {
      $location.path('/step2');
    };

    $scope.policyDetail = [{id: '1', selectedDay: '', billing: ''}];

    $scope.plan = [{id: '1', selectPetEssentials: '$200', selectPetPremium: '$200', selectPetPremiumPlus: '$200', select: ''}];
    
  }]);
  