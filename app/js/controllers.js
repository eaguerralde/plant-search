'use strict';

/* Controllers */

angular.module('myApp.controllers', []).
  controller('SearchCtrl', function($scope, Taxonomy){
          function init(){
              Taxonomy.list().success(function(data){
          $scope.resultList = data.anyMatchList;
          $scope.dataClass = data.class;
                  
              });
          }
          init();
      })
  .controller('DetailsCtrl', function($scope, ajaxFactory) {
          //$scope.dummy = 'feck!';
    function init(){
        ajaxFactory.getAjax().success(function(data){
    console.log('ajax call');
            $scope.result = data;
        });
    }
    init();
  })