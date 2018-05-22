'use strict';

angular.module('myApp.ListView', ['ngRoute'])

.config(['$routeProvider', function($routeProvider) {
  $routeProvider.when('/list-view', {
    templateUrl: 'list-view/list-view.html',
    controller: 'ListViewCtrl'
  });
}])

.controller('ListViewCtrl', ['$scope','$routeParams','$location','DocumentFactory',function($scope,$routeParams,$location,$documentFactory) {
  $scope.documents = [];
  $scope.getVehicles= function(){
    $documentFactory.getDocuements().then(function(response){
      $scope.documents = response.data;
    })
  }

  $scope.deleteDocument = function(id){
      $documentFactory.deleteDocument(id).then(function() {
        $scope.getVehicles();
      })
  }
}]);