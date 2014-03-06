'use strict';

/* Services */

angular.module('seedsApp.services', ['ngResource'])
.value('version', '0.1')
.factory('Taxonomy', ['$resource', 
    function($resource){
//        var factory = {},
//            url = 'http://www.itis.gov/ITISWebService/jsonservice/';//getFullRecordFromTSN?tsn=202384
//            
//        function($resource){
        var result = $resource('getData.php', {}, {
            list: {method:'POST', params:{srv:'itis'}/*, isArray:true*/}
        });
          return result;
        
//        factory.list = function(srchKey){
//            //return $http.get('http://www.itis.gov/ITISWebService/jsonservice/ITISService/searchForAnyMatchPaged?srchKey=' + srchKey + '&pageSize=10&pageNum=1&ascend=false');
//            return $http({method: 'POST'
//                , data: {srchKey: srchKey}
//                , url: 'getData.php'});
//        };
//        factory.get = function(srchKey){
//            //return $http.get('getFullRecordFromTSN?tsn=202384?srchKey=' + srchKey + '&pageSize=10&pageNum=1&ascend=false');
//            return $http({method: 'POST'
//                , data: {srchKey: srchKey}
//                , url: 'getData.php'});
//        };
        
       // return factory;
}])
.factory('Wiki', ['$resource',
    function($resource){
        var result = $resource('getData.php', {}, {
            search: {method:'POST', params:{srv:'wiki'}/*, isArray:true*/}
        });
        return result;
}]);


