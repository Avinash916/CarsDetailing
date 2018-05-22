'use strict';

angular.module('myApp.user-register', ['ngRoute'])

.config(['$routeProvider', function($routeProvider) {
  $routeProvider.when('/register', {
    templateUrl: 'user-register/user-register.html',
    controller: 'regsiterCtrl'
  });
}])

.controller('regsiterCtrl', ['$scope','$location','RegisterFactory',function($scope,$location,$registerService) {
         $scope.register = function(user){
                $registerService.regsiterUser(user).then(function(response){
                    localStorage.setItem('refreshToken',response.data.accessToken);
                    debugger;
                    $location.path('/View1');
                })
         }
}]);