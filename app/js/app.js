'use strict';

//  angular.module('myApp.factories').factory('ajaxFactory', function(){
//        var factory = {};
//        
//        factory.getAjax = function($http){
//            return $http.get('http://google.com');
//        };
//        
//        return factory;
//}) ;

// Declare app level module which depends on filters, and services
var app = angular.module('seedsApp', [
  'ngRoute',
  'seedsApp.animations',
  'seedsApp.filters',
  'seedsApp.services',
  'seedsApp.directives',
  'seedsApp.controllers'
])
.config(['$routeProvider', function($routeProvider) {
  $routeProvider.when('/', {templateUrl: 'partials/search.html', controller: 'SearchCtrl'});
  $routeProvider.when('/detail/:taxonomyId', {templateUrl: 'partials/detail.html', controller: 'DetailsCtrl'});
  $routeProvider.otherwise({redirectTo: '/'});
}])
.config(['$httpProvider', function($httpProvider) {
        $httpProvider.defaults.useXDomain = true;
  delete $httpProvider.defaults.headers.common['X-Requested-With'];
}])

