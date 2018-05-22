'use strict';

angular.module('myApp.Main', ['ngRoute'])

.config(['$routeProvider', function($routeProvider) {
  $routeProvider.when('/Main', {
    templateUrl: 'Main/Main.html',
    controller: 'MainCtrl'
  });
}])

.controller('MainCtrl', ['$scope','$location','DocumentFactory',function($scope,$location,$documentService) {
  $scope.documents = [];
 $scope.getVehicles = function() {
   $documentService.getDocuements().then(function(response){
     $scope.documents = response.data;
   })
 }

 $scope.viewDetails = function(details){
  debugger;
   $location.path('/details/'+details._id);
 }
}]);