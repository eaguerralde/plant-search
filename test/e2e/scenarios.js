'use strict';

/* https://github.com/angular/protractor/blob/master/docs/getting-started.md */

describe('seedsApp', function() {
  browser.get('index.html');

  describe('search', function() {
      browser.get('index.html#/');
      
    it('should render search page when user navigates to /', function() {
      expect(element.all(by.css('h2')).first().getText()).
        toMatch(/Search/);
    });
    
    it('should display results when searching', function() {
        element(by.model('searchTerm')).sendKeys('asd'); //type search term
        element(by.css('button')).click();              //click search
        waits(3000);                                    //wait 3 seconds (might take longer so this will fail)
        expect(element.all(by.css('.item')).count()).
            toBeGreaterThan(0);
    });
    
    it('should navigte to specific details view when click on specific search result item', function() {
        var selectedItemSearchTerm;
        
        //target first search result so keep taxonomy to check later
        selectedItemSearchTerm = element.all(by.css('.item .taxonomy')).first().getText();
        
        //Navigate to details
        element.all(by.css('.item')).first().click().then(function(){
            //once page loaded check it is the right details page
            expect(element.all(by.css('.search-term')).first().getText())
                .toMatch(selectedItemSearchTerm);
        });
    });

  });
  
//  describe('search one by one', function() {
//    beforeEach(function() {
//      browser.get('index.html#/');
//    });
//
//    it('should render search page when user navigates to /', function() {
//      expect(element.all(by.css('h2')).first().getText()).
//        toMatch(/Search/);
//    });
//    
//    it('should display results when searching', function() {
//        element(by.model('searchTerm')).sendKeys('asd'); //type search term
//        element(by.css('button')).click();              //click search
//        waits(3000);                                    //wait 3 seconds (might take longer so this will fail)
//        expect(element.all(by.css('.item')).count()).
//            toBeGreaterThan(0);
//    });
//    
//    it('should navigte to specific details view when click on specific search result item', function() {
//        var selectedItemSearchTerm;
//        
//        //load some results
//        element(by.model('searchTerm')).sendKeys('asd');
//        element(by.css('button')).click();              
//        waits(3000);                                   
//        
//        //target first search result so keep taxonomy to check later
//        selectedItemSearchTerm = element.all(by.css('.item .taxonomy')).first().getText();
//        
//        //Navigate to details
//        element.all(by.css('.item')).first().click().then(function(){
//            //once page loaded check it is the right details page
//            expect(element.all(by.css('.search-term')).first().getText())
//                .toMatch(selectedItemSearchTerm);
//        });
//    });
//  });


  describe('Details', function() {
    beforeEach(function() {
      browser.get('index.html#/detail/Masdevallia%20coccinea');
    });

    it('should render details when user navigates to /details', function() {
      expect(element.all(by.css('h2')).first().getText()).
        toMatch(/Details/);
    });
  });
});
