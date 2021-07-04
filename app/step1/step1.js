'use strict';

var app = angular.module('myApp.step1', ['ngRoute'])

app.config(['$routeProvider' ,function ($routeProvider) {
  $routeProvider.when('/step1.html', {
    templateUrl: 'step1.html',
    controller: 'step1Ctrl',
  })
  
}])

app.controller('step1Ctrl', function($scope, $location) {
  $scope.user = {};
  $scope.submit = function()
  {
      var email = $scope.email;
      var password = $scope.password;
      console.log(email,password);
      if($scope.email == "admin@123" && $scope.password == "123")
      { 
        // $location.path('/redirect.html');
        window.location.href = "file:///C:/Users/asus/Downloads/example_angu-master/example_angu-master/app/step1/redirect.html"; 

      }
  }

  $scope.model = {
    name: 'Tabs'
  };
});

