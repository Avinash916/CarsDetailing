'use strict';

angular.module('myApp.Details', ['ngRoute'])

.config(['$routeProvider', function($routeProvider) {
  $routeProvider.when('/details/:id?', {
    templateUrl: 'Details/details.html',
    controller: 'DetailsCtrl'
  });
}])

.controller('DetailsCtrl', ['$scope','$routeParams','$location','DocumentFactory',function($scope,$routeParams,$location,$documentFactory) {
   $scope.details = {};
    $scope.createDocument = function(docuemntInfo){
      docuemntInfo.imgs = [{ 'url':docuemntInfo.imageUrl}]
      if(docuemntInfo._id){
        $documentFactory.updateDocument(docuemntInfo).then(function(){
          $location.path('/Main');
        });
      }else{
        $documentFactory.createDocument(docuemntInfo).then(function(){
          $location.path('/Main');
        });
      }
     
    }

    if($routeParams.id){
      $documentFactory.getDocument($routeParams.id).then(function(response){
          $scope.details = response.data;
         
      })
    }
}]);