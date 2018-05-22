'use strict';

// Declare app level module which depends on views, and components
angular.module('myApp', [
  'ngRoute',
  'ngMaterial',
  'myApp.Main',
  'myApp.Details',
  'myApp.ListView',
  'myApp.user-register',
  'myApp.version'
]).
config(['$locationProvider', '$routeProvider', function($locationProvider, $routeProvider) {
  $locationProvider.hashPrefix('!');
  if(localStorage.refreshToken){
    $routeProvider.otherwise({redirectTo: '/Main'});
  }else{
    $routeProvider.otherwise({redirectTo: '/register'});
  }
}]);

angular.module('myApp').config(function ($routeProvider, $httpProvider) {
  $httpProvider.interceptors.push('AuthInterceptor')
});

function goto(page){
  debugger;
}
