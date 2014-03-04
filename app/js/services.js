'use strict';

/* Services */

angular.module('seedsApp.services', [])
.value('version', '0.1')
.factory('Taxonomy', function($http){
        var factory = {};
        factory.list = function(srchKey){
            //return $http.get('http://www.itis.gov/ITISWebService/jsonservice/ITISService/searchForAnyMatchPaged?srchKey=' + srchKey + '&pageSize=10&pageNum=1&ascend=false');
            return $http({method: 'POST'
                , data: {srchKey: srchKey}
                , url: 'getData.php'});
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


