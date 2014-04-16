'use strict';

/* Controllers */

angular.module('seedsApp.controllers', []).
  controller('SearchCtrl', ['$scope', 'Taxonomy', '$cacheFactory', 'ResultsSimpleCache', 
    function($scope, Taxonomy, $cacheFactory, ResultsCache){
        $scope.search = function(){
            var searchTerm = $scope.searchTerm,
                searchResult = ResultsCache.get(searchTerm),
            status = 'pulled from cache';
            
            if(!searchResult){
                status = 'requested';
                searchResult = Taxonomy.search({srchKey: searchTerm});
                ResultsCache.put(searchTerm, searchResult);
                ResultsCache.lastSearchTerm = searchTerm;
            }
            
            $scope.status = status;
            $scope.searchResult = searchResult;
        };
//        $scope.search = function(){
//            var searchTerm = $scope.searchTerm,
//                searchResult = ResultsCache.cache.get(searchTerm),
//            status = 'pulled from cache';
//            
//            if(!searchResult){
//                status = 'requested';
//                searchResult = Taxonomy.search({srchKey: searchTerm});
//                ResultsCache.cache.put(searchTerm, searchResult);
//                ResultsCache.lastSearchTerm = searchTerm;
//            }
//            
//            $scope.status = status;
//            $scope.searchResult = searchResult;
//        };
        
        $scope.resultClick = function(){
            var currentResult = this.result;
            this.selected = this.selected ? false : 
                $.each($scope.searchResult.anyMatchList, function(index, result){
                    currentResult == result ? 
                        currentResult.selected = true 
                        : result.selected = false;
                });
            window.location = '#/detail/' + this.result.sciName;
        };
        function init(){
            $scope.loadStatus = 'init';
            $scope.status = 'no search';
            $scope.searchResult = ResultsCache.get(ResultsCache.lastSearchTerm);
        }
        init();
    }])
    .controller('DetailsCtrl', ['$scope', '$routeParams', 'Wiki', 'ResultsSimpleCache',
      function($scope, $routeParams, Wiki, ResultsCache) {
          $scope.colNumber = 3;
          $scope.rowNumber = 0;
          
          
        function init(){
            var taxonomyId = $routeParams.taxonomyId,
                resultSet = ResultsCache.get(taxonomyId);
            $scope.status = 'pulled from cache';
            if(!resultSet){
                $scope.status = 'requested';
                resultSet = Wiki.search({srsearch: taxonomyId/*, titles: taxonomyId, aifrom: taxonomyId*/},
                            function(u, getResponseHeaders){
                                $scope.rowNumber = Math.floor( $scope.resultSet.query.search.length / $scope.colNumber ) 
                                       + ($scope.resultSet.query.search.length % $scope.colNumber > 0 ? 1 : 0);

                            });
                            
                ResultsCache.put(taxonomyId, resultSet);
            }
            $scope.taxonomyId = taxonomyId;
            $scope.resultSet = ResultsCache.get(taxonomyId);
             
        }
        init();
  }]);
//    .controller('DetailsCtrl', ['$scope', '$routeParams', 'Wiki', 'ResultsCache',
//      function($scope, $routeParams, Wiki, ResultsCache) {
//      
//        function init(){
//            var taxonomyId = $routeParams.taxonomyId,
//                resultSet = ResultsCache.cache.get(taxonomyId);
//            $scope.status = 'pulled from cache';
//            if(!resultSet){
//                $scope.status = 'requested';
//                resultSet = Wiki.search({titles: taxonomyId});
//                ResultsCache.cache.put(taxonomyId, resultSet);
//            }
//            $scope.taxonomyId = taxonomyId;
//            $scope.resultSet = ResultsCache.cache.get(taxonomyId);
//        }
//        init();
//  }]);
