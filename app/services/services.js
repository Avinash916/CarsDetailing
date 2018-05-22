angular.module('myApp').factory('RegisterFactory', ["$http", '$rootScope', function ($http, $rootScope) {
   this.regsiterUser = function(userInfo){
       return $http.post('https://alpha-dataflownode.zerionsoftware.com/code_assignment/register',userInfo);
   }
   return this;
}]);

angular.module('myApp').factory('DocumentFactory', ["$http", '$rootScope', function ($http, $rootScope) {
    let baseUrl = 'https://alpha-dataflownode.zerionsoftware.com/code_assignment/records';
    this.getDocuements = function(){
        return $http.get(baseUrl);
    }

    this.createDocument = function(documentInfo){
        return $http.post(baseUrl,documentInfo);
    }

    this.updateDocument = function(documentInfo){
        debugger;
        return $http.put(baseUrl+'/'+documentInfo._id,documentInfo);
    }

    this.getDocument = function(id){
        return $http.get(baseUrl+'/'+id);
    }

    this.deleteDocument = function(id){
        return $http.delete(baseUrl+'/'+id);
    }
    return this;
 }]);





angular.module('myApp').factory('AuthInterceptor', function ($rootScope, $q, $window, $location) {
    return {
      request: function (config) {
        config.headers = config.headers || {};
        if ($window.localStorage.refreshToken) {
          config.headers.Authorization = 'Bearer  ' + $window.localStorage.refreshToken;
        }
        return config;
      }
    };
    });