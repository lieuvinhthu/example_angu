'use strict';
// Declare app level module which depends on views, and core components
angular.module('myApp', [
  'ui.bootstrap',
  'ngRoute',
  'myApp.step1',
  'myApp.step2',
  'myApp.step3',
  'myApp.version',
]).
config(['$locationProvider', '$routeProvider', function($locationProvider, $routeProvider) {
  $locationProvider.hashPrefix('!');

  $routeProvider.otherwise({redirectTo: '/step1'});
}]);