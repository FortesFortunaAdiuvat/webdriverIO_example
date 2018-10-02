//var expect = require('chai').expect;
var assert = require('assert');
// describe('webdriver.io api page', function() {
//     it('should be able to filter for commands', function () {
//         browser.url('http://webdriver.io/api.html');

//         // filtering property commands
//         $('.searchbar input').setValue('getT');

//         // get all results that are displayed
//         var results = $$('.commands.property a').filter(function (link) {
//             return link.isVisible();
//         });

//         // assert number of results
//         expect(results.length).to.be.equal(3);

//         // check out second result
//         results[1].click();
//         expect($('.doc h1').getText()).to.be.equal('GETTEXT');
//     });
// });

describe('webdriver.io home page', function() {
    it('should have the right title', function() {
        browser.url('/'); // complete browser url is pulled from wdio.conf.js
        var title = browser.getTitle();
        assert.equal(title, 'WebdriverIO - Selenium 2.0 javascript bindings for nodejs');
    });

    describe('API Documentation Page', function() {
        // use it.skip to skip tests, like if a test is still being worked on, it will show as pending in the report
        it.skip('should have a link to the API page', function() {
            browser.url('/');
            browser.isExisting('=API'); // checks for a link containing the exact text provided
            var hasApiLink = browser.isExisting('a[href="/api.html"]'); // checks for the HTML link tag in the DOM to be exactly matched
            assert(hasApiLink);
        });
        // below it.only() will only run this test in isolation apart from all other tests, use when testing your implementation
        it('should take you to the API page', function() {
            browser.url('/');
            browser.click('=API');

            var title = browser.getTitle();
            assert.equal(title, 'WebdriverIO - API Docs');

            //browser.debug(); // will wait for you to press enter to continue execution
            browser.pause(2000); // will pause execution for the given amount of time, here is 2 seconds
        });
        //TODO: why does the below pass with it.only but not with the other tests included? Inconsistent, maybe fixed now
        it('should filter search results', function(){
            browser.url('/api.html');
            browser.setValue('input[name="search"]', 'debug');
            browser.saveScreenshot('api-with-result.png');
        });
    });
    
});

describe('Doing synchronus testing for dynamically loaded components', function(){
    it.skip('can be handled with commands as promises', function(){
        return browser.getValue('#input').then(function(value){
            console.log(value); 
        });
    });

    it.skip('can be handled with commands using async/await', async function(){
        var value = await browser.getValue('#input');
        console.log(value); 
    });
});