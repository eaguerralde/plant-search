'use strict';

/* Services */

angular.module('myApp.services', [])
.value('version', '0.1')
.factory('Taxonomy', function($http){
        var factory = {};
        factory.list = function(){
            //return $http.get('http://www.itis.gov/ITISWebService/jsonservice/ITISService/searchForAnyMatchPaged?srchKey=homo%20sapiens&pageSize=10&pageNum=1&ascend=false');
            return $http({method: 'GET'
                , url: 'getData.php'});
                //, url: 'http://google.com'});
        };
        
        return factory;
}) ;

//var phonecatServices = angular.module('phonecatServices', ['ngResource']);
//
//phonecatServices.factory('Phone', ['$resource',
//  function($resource){
//    return $resource('phones/:phoneId.json', {}, {
//      query: {method:'GET', params:{phoneId:'phones'}, isArray:true}
//    });
//}]);


