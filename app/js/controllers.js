'use strict';

/* Controllers */

angular.module('seedsApp.controllers', []).
  controller('SearchCtrl', ['$scope', 'Taxonomy', 
    function($scope, Taxonomy){
        $scope.search = function(){
            var result = Taxonomy.list({srchKey: $scope.searchTerm}, function(data){
                $scope.resultList = data.anyMatchList ? data.anyMatchList : [];
            });
            
              //Taxonomy.list($scope.searchTerm).success(function(data, status, headers, config){
              
//                $scope.resultList = resultMock[resultCounter].anyMatchList;//data.anyMatchList
//                resultCounter = resultCounter ? 0 : 1;
//            
//                $scope.dataClass = 'test';//data.class; 
                
              //});
        };
        
        $scope.resultClick = function(){
//            var currentResult = this.result;
//            this.selected = this.selected ? false : 
//                $.each($scope.resultList, function(index, result){
//                    currentResult == result ? 
//                        currentResult.selected = true 
//                        : result.selected = false;
//                });
            window.location = '#/detail/' + this.result.sciName;
        };
        
        
        function init(){
            $scope.loadStatus = 'init';
        }
        init();
    }])
    .controller('DetailsCtrl', ['$scope', '$routeParams', 'Wiki',
      function($scope, $routeParams, Wiki) {
      
    function init(){
        $scope.taxonomyId = $routeParams.taxonomyId;
        $scope.resultSet = Wiki.search({titles: $scope.taxonomyId});
    }
    init();
  }]);
  
  //data mock
  var resultCounter = 0,
  resultMock = [{"anyMatchList":[{"author":"Linden ex Lindl.","class":"gov.usgs.itis.itis_service.data.SvcAnyMatch","commonNameList":{"class":"gov.usgs.itis.itis_service.data.SvcCommonNameList","commonNames":[{"class":"gov.usgs.itis.itis_service.data.SvcCommonName","commonName":null,"language":null,"tsn":"894650"}],"tsn":"894650"},"matchType":"SCIENTIFIC","sciName":"Masdevallia coccinea","tsn":"894650"},{"author":"Ruiz & Pav.","class":"gov.usgs.itis.itis_service.data.SvcAnyMatch","commonNameList":{"class":"gov.usgs.itis.itis_service.data.SvcCommonNameList","commonNames":[{"class":"gov.usgs.itis.itis_service.data.SvcCommonName","commonName":null,"language":null,"tsn":"894601"}],"tsn":"894601"},"matchType":"SCIENTIFIC","sciName":"Masdevallia","tsn":"894601"},{"author":"Collin, 1939","class":"gov.usgs.itis.itis_service.data.SvcAnyMatch","commonNameList":{"class":"gov.usgs.itis.itis_service.data.SvcCommonNameList","commonNames":[{"class":"gov.usgs.itis.itis_service.data.SvcCommonName","commonName":null,"language":null,"tsn":"150126"}],"tsn":"150126"},"matchType":"SCIENTIFIC","sciName":"Hydrotaea basdeni","tsn":"150126"},{"author":"Castelnau, 1875","class":"gov.usgs.itis.itis_service.data.SvcAnyMatch","commonNameList":{"class":"gov.usgs.itis.itis_service.data.SvcCommonNameList","commonNames":[{"class":"gov.usgs.itis.itis_service.data.SvcCommonName","commonName":null,"language":null,"tsn":"614105"}],"tsn":"614105"},"matchType":"SCIENTIFIC","sciName":"Hemigymnus bleasdalei","tsn":"614105"},{"author":"Imadat�, 1965","class":"gov.usgs.itis.itis_service.data.SvcAnyMatch","commonNameList":{"class":"gov.usgs.itis.itis_service.data.SvcCommonNameList","commonNames":[{"class":"gov.usgs.itis.itis_service.data.SvcCommonName","commonName":null,"language":null,"tsn":"772199"}],"tsn":"772199"},"matchType":"SCIENTIFIC","sciName":"Eosentomon sawasdi","tsn":"772199"},{"author":"Wheeler, 1957","class":"gov.usgs.itis.itis_service.data.SvcAnyMatch","commonNameList":{"class":"gov.usgs.itis.itis_service.data.SvcCommonNameList","commonNames":[{"class":"gov.usgs.itis.itis_service.data.SvcCommonName","commonName":null,"language":null,"tsn":"146221"}],"tsn":"146221"},"matchType":"SCIENTIFIC","sciName":"Drosophila basdeni","tsn":"146221"},{"author":"(Jeps.) F.H. Lewis & M.E. Lewis","class":"gov.usgs.itis.itis_service.data.SvcAnyMatch","commonNameList":{"class":"gov.usgs.itis.itis_service.data.SvcCommonNameList","commonNames":[{"class":"gov.usgs.itis.itis_service.data.SvcCommonName","commonName":null,"language":null,"tsn":"525498"}],"tsn":"525498"},"matchType":"SCIENTIFIC","sciName":"Clarkia rubicunda ssp. blasdalei","tsn":"525498"},{"author":"Bicudo","class":"gov.usgs.itis.itis_service.data.SvcAnyMatch","commonNameList":{"class":"gov.usgs.itis.itis_service.data.SvcCommonNameList","commonNames":[{"class":"gov.usgs.itis.itis_service.data.SvcCommonName","commonName":null,"language":null,"tsn":"189512"}],"tsn":"189512"},"matchType":"SCIENTIFIC","sciName":"Arthrodesmus extensus var. croasdaleae","tsn":"189512"},{"author":"Crampton","class":"gov.usgs.itis.itis_service.data.SvcAnyMatch","commonNameList":{"class":"gov.usgs.itis.itis_service.data.SvcCommonNameList","commonNames":[{"class":"gov.usgs.itis.itis_service.data.SvcCommonName","commonName":"Marin bentgrass","language":"unspecified","tsn":"182484"}],"tsn":"182484"},"matchType":"SCIENTIFIC","sciName":"Agrostis blasdalei var. marinensis","tsn":"182484"},{"author":"Hitchc.","class":"gov.usgs.itis.itis_service.data.SvcAnyMatch","commonNameList":{"class":"gov.usgs.itis.itis_service.data.SvcCommonNameList","commonNames":[{"class":"gov.usgs.itis.itis_service.data.SvcCommonName","commonName":"Blasdale bentgrass","language":"unspecified","tsn":"182483"}],"tsn":"182483"},"matchType":"COMMON","sciName":"Agrostis blasdalei var. blasdalei","tsn":"182483"}],"class":"gov.usgs.itis.itis_service.data.SvcAnyMatchList"}
                ,{"anyMatchList":[{"author":"Eastw.","class":"gov.usgs.itis.itis_service.data.SvcAnyMatch","commonNameList":{"class":"gov.usgs.itis.itis_service.data.SvcCommonNameList","commonNames":[{"class":"gov.usgs.itis.itis_service.data.SvcCommonName","commonName":"smallflower deathcamas","language":"English","tsn":"531404"}],"tsn":"531404"},"matchType":"COMMON","sciName":"Zigadenus micranthus var. micranthus","tsn":"531404"},{"author":"(Eastw.) O.S. Walsh ex McNeal","class":"gov.usgs.itis.itis_service.data.SvcAnyMatch","commonNameList":{"class":"gov.usgs.itis.itis_service.data.SvcCommonNameList","commonNames":[{"class":"gov.usgs.itis.itis_service.data.SvcCommonName","commonName":"smallflower deathcamas","language":"English","tsn":"531403"}],"tsn":"531403"},"matchType":"COMMON","sciName":"Zigadenus micranthus var. fontanus","tsn":"531403"},{"author":"Eastw.","class":"gov.usgs.itis.itis_service.data.SvcAnyMatch","commonNameList":{"class":"gov.usgs.itis.itis_service.data.SvcCommonNameList","commonNames":[{"class":"gov.usgs.itis.itis_service.data.SvcCommonName","commonName":"smallflower deathcamas","language":"English","tsn":"43165"}],"tsn":"43165"},"matchType":"COMMON","sciName":"Zigadenus micranthus","tsn":"43165"},{"author":"(Vent.) Tzvelev","class":"gov.usgs.itis.itis_service.data.SvcAnyMatch","commonNameList":{"class":"gov.usgs.itis.itis_service.data.SvcCommonNameList","commonNames":[{"class":"gov.usgs.itis.itis_service.data.SvcCommonName","commonName":"bracted strawflower","language":"English","tsn":"780552"}],"tsn":"780552"},"matchType":"COMMON","sciName":"Xerochrysum bracteatum","tsn":"780552"},{"author":"Hatch, 1962","class":"gov.usgs.itis.itis_service.data.SvcAnyMatch","commonNameList":{"class":"gov.usgs.itis.itis_service.data.SvcCommonNameList","commonNames":[{"class":"gov.usgs.itis.itis_service.data.SvcCommonName","commonName":null,"language":null,"tsn":"771286"}],"tsn":"771286"},"matchType":"SCIENTIFIC","sciName":"Xenomycetes lawersi","tsn":"771286"},{"author":"O'Neill & G. R. Graves, 1977","class":"gov.usgs.itis.itis_service.data.SvcAnyMatch","commonNameList":{"class":"gov.usgs.itis.itis_service.data.SvcCommonNameList","commonNames":[{"class":"gov.usgs.itis.itis_service.data.SvcCommonName","commonName":"Long-whiskered Owlet","language":"English","tsn":"555470"}],"tsn":"555470"},"matchType":"SCIENTIFIC","sciName":"Xenoglaux loweryi","tsn":"555470"},{"author":"Eiselt, 1963","class":"gov.usgs.itis.itis_service.data.SvcAnyMatch","commonNameList":{"class":"gov.usgs.itis.itis_service.data.SvcCommonNameList","commonNames":[{"class":"gov.usgs.itis.itis_service.data.SvcCommonName","commonName":null,"language":null,"tsn":"701334"}],"tsn":"701334"},"matchType":"SCIENTIFIC","sciName":"Xenodon werneri","tsn":"701334"},{"author":"(Cushman) G. M. Smith","class":"gov.usgs.itis.itis_service.data.SvcAnyMatch","commonNameList":{"class":"gov.usgs.itis.itis_service.data.SvcCommonNameList","commonNames":[{"class":"gov.usgs.itis.itis_service.data.SvcCommonName","commonName":null,"language":null,"tsn":"8342"}],"tsn":"8342"},"matchType":"SCIENTIFIC","sciName":"Xanthidium subhastiferum var. towerii","tsn":"8342"},{"author":"Nutt.","class":"gov.usgs.itis.itis_service.data.SvcAnyMatch","commonNameList":{"class":"gov.usgs.itis.itis_service.data.SvcCommonNameList","commonNames":[{"class":"gov.usgs.itis.itis_service.data.SvcCommonName","commonName":"sunflower mule-ears","language":"English","tsn":"38681"}],"tsn":"38681"},"matchType":"COMMON","sciName":"Wyethia helianthoides","tsn":"38681"},{"author":"(Werderm.) D.M. Porter","class":"gov.usgs.itis.itis_service.data.SvcAnyMatch","commonNameList":{"class":"gov.usgs.itis.itis_service.data.SvcCommonNameList","commonNames":[],"tsn":"910899"},"matchType":"SCIENTIFIC","sciName":"Wigginsia vorwerkiana","tsn":"910899"}],"class":"gov.usgs.itis.itis_service.data.SvcAnyMatchList"}];